import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";



const FoodCard = ({item}) => {
    const {name, price, image, recipe, _id} = item
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () =>{
      if (user && user.email) {
        // send cart item to the database 
        const cerdItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }
        axiosSecure.post('/carts', cerdItem)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update the cart items count
            refetch();
          }
        })       
      }
      else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please Login add to cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            // Send the user to the login page
            navigate('/login', {state: {from: location}})
          }
        });
      }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">{price}</p>
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions flex flex-col items-center">
            <button
            onClick={ handleAddToCart}
             className="btn btn-outline border-0 border-b-8 bg-slate-200 mt-4 border-orange-600"
             
             >Add to Card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;