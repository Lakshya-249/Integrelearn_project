import React from "react";

function StudentProgress() {
  return (
    <div className="student-progress-container">
      <h2 className="text-xl font-semibold mb-4">Student Progress</h2>
      <p>
        Track and monitor student progress in various subjects and activities.
      </p>
      <div className="progress-details">
        <h3 className="text-lg font-semibold mt-4 mb-2">Mathematics</h3>
        <p>Overall Grade: A</p>
        <p>Recent Test Score: 95%</p>
        <p>Homework Completion: 90%</p>
      </div>
      <div className="progress-details">
        <h3 className="text-lg font-semibold mt-4 mb-2">Science</h3>
        <p>Overall Grade: B+</p>
        <p>Recent Test Score: 85%</p>
        <p>Homework Completion: 80%</p>
      </div>
      {/* Add more subjects and progress details */}
    </div>
  );
}

export default StudentProgress;
