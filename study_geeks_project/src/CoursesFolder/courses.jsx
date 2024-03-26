import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseBox = ({ title, duration, features, buttonText, path }) => (
  <div className="flex flex-col justify-between w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 bg-gradient-to-br from-[#FFD166] to-[#FF851B] rounded-lg shadow-lg text-white font-sans p-4 m-4 transition duration-300 ease-in-out hover:from-[#FFA500] hover:to-[#FF6347] hover:scale-105 border-transparent border hover:border-white">
    <div>
      <h4 className="mb-2 text-xl font-bold">{title}</h4>
      <p className="mb-2 text-lg">Duration: {duration}</p>
      <p className="mb-2 text-lg">Key Features:</p>
      <ul className="list-disc ml-4 mb-2 text-lg">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
    <Link
      to={path}
      className="bg-[#2E86AB] hover:bg-[#4A6C6F] text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out hover:scale-105 hover:delay-100"
    >
      {buttonText}
    </Link>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="text-lg font-bold mb-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is the course duration?",
      answer:
        "The duration varies depending on the course, ranging from 2 months to 12 months.",
    },
    {
      question: "How are the courses different?",
      answer:
        "Each course caters to different needs. Comprehensive covers the entire syllabus, Topic-based focuses on specific areas, Crash Course provides intensive preparation, and Test Series offers practice tests.",
    },
    {
      question: "Are there any prerequisites?",
      answer:
        "Some courses may require prerequisites. Please refer to the course details for specific requirements.",
    },
    {
      question: "Is financial aid available?",
      answer:
        "Yes, financial aid options are available for eligible students. Contact us for more information.",
    },
    {
      question: "Can I access the materials offline?",
      answer:
        "Course materials are primarily online, with some resources available offline through recordings.",
    },
  ];

  return (
    <div className="bg-gray-100 rounded-lg p-4 my-4 w-full sm:w-2/3 lg:w-1/2 xl:w-2/3">
      <h2 className="text-xl font-bold mb-2">FAQ</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "Comprehensive Online Course",
      duration: "12 months",
      features: [
        "Full syllabus coverage",
        "Engaging video lectures",
        "Interactive quizzes",
      ],
      buttonText: "Enroll Now",
      path: "/course1",
    },
    {
      title: "Focused Topic-based Course",
      duration: "3 months",
      features: [
        "In-depth exploration of specific topics",
        "Targeted instruction",
        "Problem-solving sessions",
      ],
      buttonText: "Enroll Now",
      path: "/course2",
    },
    {
      title: "Intensive Crash Course",
      duration: "2 months",
      features: [
        "Accelerated preparation",
        "Condensed curriculum",
        "Intensive problem-solving",
      ],
      buttonText: "Enroll Now",
      path: "/course3",
    },
    {
      title: "Practice Test Series",
      duration: "6 weeks",
      features: [
        "Simulated practice tests",
        "Detailed performance analysis",
        "Effective test-taking strategies",
      ],
      buttonText: "Enroll Now",
      path: "/course4",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {courses.map((course, index) => (
        <CourseBox key={index} {...course} />
      ))}
      <FAQ />
    </div>
  );
};

export default Courses;
