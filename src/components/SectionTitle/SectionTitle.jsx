

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-xl italic text-orange-600 mb-4">---{subHeading}---</p>
            <h1 className="text-4xl font-normal border-y-4 my-4 py-6 uppercase">{heading}</h1>
        </div>
    );
};

export default SectionTitle;