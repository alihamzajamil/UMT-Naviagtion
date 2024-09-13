import React from "react";
import umtlogo from "../assets/logo.png"; 

const About = () => {
  return (
    <div className="max-h-screen bg-gray-50 flex flex-col justify-center items-center py-16">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden md:max-w-6xl w-full mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex items-center justify-center bg-gray-200 p-8 md:p-12">
          <img 
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            src={umtlogo} 
            alt="UMT Logo"
          />
        </div>
        <div className="w-full md:w-2/3 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">Meet the passionate team behind UMT Navigator.</p>
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Empowering Your Campus Experience</h2>
            <p className="text-md leading-relaxed text-gray-600 mb-6">
              At UMT Navigator, we are a diverse team of professionals dedicated to enhancing the university experience. 
              With backgrounds spanning various industries and regions, we bring unique perspectives and skills to the 
              table, ensuring our platform meets the needs of students, faculty, and staff alike.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
