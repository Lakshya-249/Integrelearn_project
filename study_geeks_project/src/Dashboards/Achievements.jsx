import React from "react";

function Achievements() {
  return (
    <div className="achievements-container">
      <h2 className="text-xl mb-4">Achievements</h2>
      <p>
        Showcase your achievements and awards to inspire and motivate your
        students.
      </p>
      <ul className="list-disc ml-6">
        <li>
          Received "Teacher of the Year" award in 2021 - Recognized for
          exceptional dedication and contribution to students' learning.
        </li>
        <li>
          Published research paper on innovative teaching methodologies -
          Presented findings at national education conferences.
        </li>
        <li>
          Launched successful community service project - Engaged students in
          impactful community initiatives, fostering civic responsibility.
        </li>
      </ul>
      <h3 className="mt-4 mb-2 font-semibold">Useful Resources:</h3>
      <ul className="list-disc ml-6">
        <li>
          <a
            href="https://example.com/teacher-awards-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Guide to Teacher Awards and Recognitions
          </a>{" "}
          - Learn about different awards and recognition programs for educators.
        </li>
        <li>
          <a
            href="https://example.com/teaching-innovation-research"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Teaching Innovation Research
          </a>{" "}
          - Explore research articles on innovative teaching methodologies.
        </li>
        <li>
          <a
            href="https://example.com/community-service-ideas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Community Service Project Ideas
          </a>{" "}
          - Discover meaningful community service projects for your students.
        </li>
      </ul>
    </div>
  );
}

export default Achievements;
