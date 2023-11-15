import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featured from "../../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed pt-6 text-white my-20">
          <SectionTitle
          subHeading='---Check it out---'
          heading='FROM OUR MENU'
          ></SectionTitle>
          <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
            <div>
            <img src={featured} alt="" />
            </div>
            <div className="md:ml-10 text-white">
                <p>Aug 20, 2029</p>
                <p className="text-xl uppercase">WHERE CAN I GET SOME?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, reprehenderit ea? Ipsam sint, beatae laudantium unde, quaerat odio tempore numquam dicta atque illum pariatur delectus at facilis dolor facere eius ullam aspernatur repudiandae architecto accusamus sit iste consequatur. Velit dolore saepe illo fugiat illum sunt a assumenda aliquid in quam?</p>
                <button className="btn btn-outline border-0 border-b-8 mt-4 text-orange-600">Order Now</button>
            </div>
          </div>
        </div>
    );
};

export default Featured;