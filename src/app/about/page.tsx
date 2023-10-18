import React from "react";

const About = () => {
  return (
    <div
      className="bg-cover bg-center w-full bg-no-repeat bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex-1 flex justify-center items-center"
      style={{ backgroundImage: `url("https://picsum.photos/1600/900")` }}
    >
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold mb-6">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our blog! We are a passionate team of writers and creators
          who love to share stories, insights, and knowledge with our readers.
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to inspire, inform, and entertain our audience through
          engaging and thought-provoking content.
        </p>
        <p className="text-gray-700 mb-4">
          With a diverse group of contributors, we cover a wide range of topics
          including technology, lifestyle, travel, and more. We are dedicated to
          delivering valuable content that resonates with our readers.
        </p>
      </div>
    </div>
  );
};

export default About;
