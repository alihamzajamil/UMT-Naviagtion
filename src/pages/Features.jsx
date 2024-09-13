import React from "react";

const features = [
  {
    title: "Interactive Campus Map",
    description:
      "Easily navigate the university campus with our interactive map, highlighting key locations and buildings.",
  },
  {
    title: "Directory of Services",
    description:
      "Access a comprehensive directory of university services, including contact information and office hours.",
  },
  {
    title: "Event Calendar",
    description:
      "Stay up-to-date with university events, workshops, and activities with our integrated event calendar.",
  },
  {
    title: "Personalized Dashboard",
    description:
      "Customize your experience with a personalized dashboard, tailored to your needs and preferences.",
  },
  {
    title: "Resources and FAQs",
    description:
      "Find answers to common questions and access essential resources to help you navigate university life.",
  },
  {
    title: "Community Engagement",
    description:
      "Join the university community through various engagement opportunities and stay connected with peers.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Discover UMT Navigator Features
          </h2>
          <p className="text-lg text-gray-600">
            UMT Navigator is equipped with a range of features to enhance your university experience.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
