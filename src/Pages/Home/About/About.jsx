import img1 from "../../../assets/images/about_us/parts.jpg"
import img2 from "../../../assets/images/about_us/person.jpg"

const About = () => {
    return (
        <div className="hero h-[600px] bg-base-200 rounded-xl mb-5">
        <div className="hero-content flex-col lg:flex-row">
         <div className="lg:w-1/2 relative">
         <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
         <img src={img1} className="w-1/2 border-4 border-white rounded-lg shadow-2xl ml-36 absolute top-1/2" />
         </div>
          <div className="lg:w-1/2 space-y-4 p-4">
            <h3 className="text-4xl font-bold text-red-600">About Us </h3>
            <h1 className="text-5xl font-semibold">We are qualified & of experience in this field</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="bg-red-600 h-10 w-28 rounded">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;