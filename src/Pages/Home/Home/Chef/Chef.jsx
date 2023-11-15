import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import img1 from '../../../../assets/home/slide1.jpg'
const Chef = () => {
    return (
        <div>
            <SectionTitle subHeading='---Should Try---' heading='CHEF RECOMMENDS'></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="card  w-96 bg-[#F3F3F3] shadow-xl">
                <figure><img className="w-[400px] h-[350px]" src={img1} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <p className="text-3xl font-semibold">Caeser Salad</p>
                    <p className="text-[#151515] text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn btn-outline btn-secondary border-0 border-b-4">ADD TO CURD</button>
                </div>
            
                </div>
            <div className="card  w-96 bg-[#F3F3F3] shadow-xl">
                <figure><img className="w-[400px] h-[350px]" src={img1} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <p className="text-3xl font-semibold">Caeser Salad</p>
                    <p className="text-[#151515] text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn btn-outline  border-0 border-b-4  font-bold">ADD TO CURD</button>
                </div>
            
                </div>
            <div className="card  w-96 bg-[#F3F3F3] shadow-xl">
                <figure><img className="w-[400px] h-[350px]" src={img1} alt="Shoes" /></figure>
                <div className="card-body text-center">
                    <p className="text-3xl font-semibold">Caeser Salad</p>
                    <p className="text-[#151515] text-xl">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn btn-outline btn-success border-0 border-b-4">ADD TO CURD</button>
                </div>
            
                </div>
            </div>
        </div>
    );
};

export default Chef;