import React from "react";

// Functional component for displaying Course1 details
const Course1 = () => {
  // Course data object containing information about the course
  const courseData = {
    title: "Comprehensive Online Course",
    duration: "12 months",
    features: [
      "Full syllabus coverage",
      "Engaging video lectures",
      "Interactive quizzes",
      "Live one-to-one doubt solving sessions",
      "Teacher-student interaction",
      "Communication between students",
      "Live classes on our platform with chat option",
      "Best faculty notes",
      "Assignments",
      "Quizzes",
    ],
    price: "₹7,000",
    paymentMethods: [
      "Credit Card",
      "Debit Card",
      "UPI",
      "Net Banking",
      "Paytm",
    ],
  };

  return (
    <div className="container ">
      <div className="bg-[#eade6c] shadow-md rounded-lg p-8">
        {/* Course title */}
        <h1 className="text-5xl font-bold mb-6 text-center text-gray-800 hover:underline">
          {courseData.title}
        </h1>
        {/* Course duration */}
        <p className="text-lg mb-6 text-center text-gray-700">
          Duration: {courseData.duration}
        </p>
        {/* Key features */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2 text-gray-800 hover:underline">
            Key Features:
          </h2>
          {/* List of course features */}
          <ul className="list-disc ml-6">
            {courseData.features.map((feature, index) => (
              <li key={index} className="mb-2 text-gray-700 hover:font-bold">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        {/* Course price and payment methods */}
        <div className="mb-8">
          <p className="text-lg font-bold mb-2 text-gray-800">Price:</p>
          <p className="text-3xl text-blue-800 font-bold mb-4 hover:underline">
            {courseData.price}
          </p>
          <p className="text-lg mb-2 text-gray-800">
            Accepted Payment Methods:
          </p>
          {/* Buttons for each payment method */}
          <div className="flex flex-wrap">
            {courseData.paymentMethods.map((method, index) => (
              <button
                key={index}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out mr-4 mb-4"
                onClick={() => {
                  console.log(`Selected payment method: ${method}`);
                }}
              >
                {method}
              </button>
            ))}
          </div>
        </div>
        {/* Button for proceeding to payment */}
        <button
          className="bg-[#003049] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full inline-block transition duration-300 ease-in-out mx-auto"
          onClick={() => {
            console.log("Proceed to Payment");
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Course1;
