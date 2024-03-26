import React from "react";

function Education() {
  return (
    <div>
      <h2 className="text-xl mb-4">Education</h2>
      <p>
        As an educator, my aim is to provide a dynamic and enriching learning
        experience for my students, empowering them with knowledge and skills to
        succeed in their academic and personal endeavors.
      </p>
      <h3 className="mt-4 mb-2 font-semibold">Educational Background:</h3>
      <ul className="list-disc ml-6">
        <li>
          Master of Education (M.Ed.) in [Your Field], [University Name], [Year]
        </li>
        <li>Bachelor of Arts in [Your Major], [University Name], [Year]</li>
      </ul>
      <h3 className="mt-4 mb-2 font-semibold">Teaching Philosophy:</h3>
      <p>
        My teaching philosophy revolves around student-centered learning,
        fostering critical thinking, creativity, and collaboration. I believe in
        creating a supportive and inclusive learning environment where every
        student feels valued and empowered to reach their full potential.
      </p>
      <h3 className="mt-4 mb-2 font-semibold">Areas of Expertise:</h3>
      <ul className="list-disc ml-6">
        <li>Curriculum Development</li>
        <li>Instructional Design</li>
        <li>Classroom Management</li>
        <li>Assessment and Evaluation</li>
        {/* Add any other areas of expertise */}
      </ul>
      <h3 className="mt-4 mb-2 font-semibold">Useful Resources:</h3>
      <ul className="list-disc ml-6">
        <li>
          <a
            href="https://example.com/teaching-strategies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Effective Teaching Strategies
          </a>{" "}
          - Explore a variety of teaching strategies to engage students and
          enhance learning outcomes.
        </li>
        <li>
          <a
            href="https://example.com/educational-research"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Educational Research Journals
          </a>{" "}
          - Access scholarly journals and articles in education to stay updated
          on the latest research and trends.
        </li>
        {/* Add any other useful resources */}
      </ul>
    </div>
  );
}

export default Education;
