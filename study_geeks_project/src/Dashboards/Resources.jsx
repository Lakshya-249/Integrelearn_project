import React from "react";

function UsefulResources() {
  return (
    <div className="useful-resources-container">
      <h2 className="text-xl font-semibold mb-4">
        Useful Resources for Teachers
      </h2>
      <ul className="resource-list">
        <li>
          <a
            href="https://example.com/teaching-strategies"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Teaching Strategies
          </a>
          <p>
            Explore various teaching strategies to engage students and enhance
            learning outcomes.
          </p>
        </li>
        <li>
          <a
            href="https://example.com/lesson-plan-templates"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Lesson Plan Templates
          </a>
          <p>
            Download customizable lesson plan templates for effective lesson
            planning.
          </p>
        </li>
        <li>
          <a
            href="https://example.com/professional-development"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Professional Development
          </a>
          <p>
            Access professional development resources to enhance teaching skills
            and expertise.
          </p>
        </li>
        {/* Add more useful resources */}
      </ul>
    </div>
  );
}

export default UsefulResources;
