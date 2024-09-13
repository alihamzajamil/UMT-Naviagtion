import React from 'react';
import hero from "../assets/hero.png"
import umtImage from "../assets/umt-campus.jpg"; 
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'; // Use React Router for navigation
import FeaturesSection from './Features';
// import heroImage from './assets/hero.png'; // Ensure the path to the image is correct

const Home = () => {
  return (
    <>
    <section className="text-black body-font bg-gray-50">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className=" text-5xl sm:text-4xl  mb-4 font-semibold text-gray-800">
        Welcome to UMT Navigator
        </h1>
        <p className="mb-8 leading-relaxed text-gray-600">
          UMT Navigator is designed to enhance your university experience by providing easy access to campus resources, schedules, and more. Whether you're a student or staff, our tool helps you navigate university life with ease and efficiency.
        </p>
        <div className="flex justify-center">
          <NavLink to="/features">
            <button className="inline-flex  bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
              Explore Features
            </button>
          </NavLink>
          <NavLink to="/contact-us">
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
              Contact Us
            </button>
          </NavLink>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="University Campus" src={hero} />
      </div>
    </div>
  </section>
  
  <section className="bg-gray-100 py-16">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
    {/* Image Section */}
    <div className="md:w-1/2 mb-8 md:mb-0">
      <img
        src={umtImage}
        alt="University of Management and Technology"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
    {/* Content Section */}
    <div className="md:w-1/2 md:pl-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Discover University of Management and Technology
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        The University of Management and Technology (UMT) is a leading institution that provides high-quality education and training to students from various backgrounds. Our state-of-the-art facilities and diverse academic programs are designed to empower students and equip them with the skills needed to excel in their careers.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        At UMT, we focus on delivering an exceptional learning experience through innovative teaching methods and comprehensive support services. Join us in shaping the future and becoming a part of our dynamic and supportive academic community.
      </p>
    </div>
  </div>
</section>
<FeaturesSection/>
<section className="bg-black p-8 md:px-16 md:py-16 mt-20 mx-auto max-w-4xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
        Elevate Your Campus Experience
      </h2>
      <p className="text-gray-200 mt-4 text-lg md:text-xl">
        Discover the power of UMT Navigator. Seamlessly access campus resources, stay updated with events, and navigate university life with ease.
      </p>
      <div className="flex mt-6">
        <NavLink
          to="/navigator"
          className="inline-flex bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg"
        >
          Explore UMT Navigator
        </NavLink>
      </div>
    </section>
</>
);
  
};

export default Home;
