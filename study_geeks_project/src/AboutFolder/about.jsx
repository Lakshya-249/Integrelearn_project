import React from "react";

// Template for individual section in the About page
const AboutSection = ({ title, content }) => (
  <div className="flex flex-col justify-around bg-[#EABE6C] text-gray-900 font-sans border rounded-lg p-4 max-w-md transition-transform transform-gpu hover:shadow-md hover:scale-105 cursor-pointer">
    {/* Title of the section */}
    <h3 className="mb-2 text-lg font-semibold">{title}</h3>
    {/* Content of the section */}
    <p>{content}</p>
  </div>
);

function About() {
  return (
    <div className="w-[87rem] h-[40rem] flex justify-center mt-8">
      {/* Grid layout for the About page sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* About Integrelearn section */}
        <AboutSection
          title="About Integrelearn"
          content="Welcome to Integrelearn, your ultimate destination for IIT JEE preparation! We blend expert teaching with cutting-edge technology to empower students for success."
        />
        {/* Our Mission section */}
        <AboutSection
          title="Our Mission"
          content="At Integrelearn, we're dedicated to making quality IIT JEE education accessible to all. Our mission is to equip students with the knowledge, skills, and confidence needed to excel in their exams."
        />
        {/* Our Vision section */}
        <AboutSection
          title="Our Vision"
          content="We envision a future where education knows no bounds. Join us in shaping tomorrow's innovators and problem solvers."
        />
        {/* Join Us! section */}
        <AboutSection
          title="Join Us!"
          content="Ready to unlock your potential? Join Integrelearn today and kickstart your journey to IIT JEE success!"
        />
      </div>
    </div>
  );
}

export default About;
