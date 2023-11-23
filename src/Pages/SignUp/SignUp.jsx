import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




const SignUp = () => {
   
    const { register, handleSubmit, reset, formState: { errors }} = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = date => {
        console.log(date);
        createUser(date.email, date.password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)
          updateUserProfile(date.name, date.photoURL)
          .then(() =>{
            console.log('user profile info updated')
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "user created successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          })
          .catch(error => console.log(error))
        })

    }


    return (
      <>
              <Helmet>
               <title>Bistro Boss | Sign Up</title>
             </Helmet>
        <div className="hero  min-h-screen bg-base-200"  style={{backgroundImage: 'url(https://i.ibb.co/fqMpvjC/authentication.png)'}}>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat <br /> fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="type" {...register("name", {required: true})} name="name" placeholder="Name" className="input input-bordered" />
          {errors.name && <span className="text-red-600">This name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="type" {...register("photoURL", {required: true})} placeholder="PhotoURL" className="input input-bordered" />
          {errors.photoURL && <span className="text-red-600">This photo URL is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", {required: true})} name="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600">This email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password", { required: true,
             minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]){8}/
               })} name="password" placeholder="password" className="input input-bordered" />
          {errors.password?.type === "minLength" && <p className="text-red-500">Password must be 6 characters </p>}
          {errors.password?.type === "maxLength" && <p className="text-red-500">Password must be less then 20 characters </p>}
          {errors.password?.type === "pattern" && <p className="text-red-500">Password must be haven one upper case one lower case, one number and one special characters </p>}
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
         
        </div>
      </form>
      <p className="pl-6 mb-4">Already haven Account <Link className="text-orange-500" to='/login'>Login</Link></p>
    </div>
  </div>
       </div>
      </>
    );
};

export default SignUp;