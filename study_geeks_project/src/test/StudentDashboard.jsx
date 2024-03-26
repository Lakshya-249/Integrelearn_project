/* eslint-disable no-unused-vars */
// src/components/StudentDashboard.js

import React from "react";
import "./StudentDashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faBook,
  faChartBar,
  faClock,
  faChalkboardTeacher,
  faBullseye,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import ChartComponent from "./ChartComponent"; // Import ChartComponent

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome, [Student Name]!</h1>

      {/* Performance Section */}
      <div className="performance-section">
        <h2>Performance Overview</h2>
        <p>Overall Progress: 75%</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <p>Recent Quizzes: 4/5 Correct</p>
      </div>

      {/* Enrolled Courses Section */}
      <div className="courses-section">
        <h2>Enrolled Courses</h2>
        <ul>
          <li>Mathematics - Basics</li>
          <li>Science - Introduction to Physics</li>
          <li>English Literature - Classic Novels</li>
          {/* Add more courses if needed */}
        </ul>
      </div>

      {/* Learning Resources Section */}
      <div className="resources-section">
        <h2>Learning Resources</h2>
        <div className="resource-card">
          <h3>Video: Algebra Fundamentals</h3>
          <p>Watch this video to strengthen your algebra skills.</p>
          <button>Watch Now</button>
        </div>
        <div className="resource-card">
          <h3>Article: Effective Time Management</h3>
          <p>Read this article to improve your time management skills.</p>
          <button>Read Now</button>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="achievements-section new-section">
        <h2>Achievements</h2>
        <div className="achievement-item">
          <FontAwesomeIcon icon={faTrophy} className="achievement-icon" />
          <p>Top Performer of the Month</p>
        </div>
        <div className="achievement-item">
          <FontAwesomeIcon icon={faBullseye} className="achievement-icon" />
          <p>Perfect Quiz Scores</p>
        </div>
        {/* Add more achievements if needed */}
      </div>

      {/* Quiz Section */}
      <div className="quiz-section new-section">
        <h2>Latest Quizzes</h2>
        <ul className="quiz-list">
          <li className="quiz-item">
            <div className="quiz-icon">
              <FontAwesomeIcon icon={faBook} />
            </div>
            <p>Math Quiz - Advanced Level</p>
          </li>
          <li className="quiz-item">
            <div className="quiz-icon">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
            <p>Science Quiz - Biology</p>
          </li>
          {/* Add more quizzes if needed */}
        </ul>
      </div>

      {/* Additional Section 1 */}
      <div className="additional-section new-section">
        <h2>Upcoming Events</h2>
        <div className="additional-content">
          <FontAwesomeIcon icon={faClock} className="additional-icon" />
          <p>Attend the live webinar on "Study Strategies" tomorrow at 3 PM.</p>
        </div>
      </div>

      {/* Additional Section 2 */}
      <div className="additional-section new-section">
        <h2>Personalized Recommendations</h2>
        <div className="additional-content">
          <FontAwesomeIcon icon={faVideo} className="additional-icon" />
          <p>Explore video lessons tailored to your learning preferences.</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-section new-section">
        <h2>Course Progress</h2>
        <div className="course-progress-info">
          <p>
            Track your progress across different courses. The chart provides an
            overview of your performance and areas for improvement.
          </p>
          <button className="explore-button">Explore Courses</button>
        </div>
        {/* Integrate the ChartComponent */}
        <ChartComponent />
      </div>
    </div>
  );
};

export default StudentDashboard;
