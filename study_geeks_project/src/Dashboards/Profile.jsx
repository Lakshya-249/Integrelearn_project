import React from "react";

function TeacherProfile() {
  // Sample teacher profile data
  const teacher = {
    name: "John Smith",
    subject: "Mathematics",
    email: "john.smith@example.com",
    bio: "Experienced mathematics teacher passionate about helping students excel in their studies.",
    // Add more profile data as needed
  };

  return (
    <div className="teacher-profile-container">
      <h2 className="text-xl font-semibold mb-4">Teacher Profile</h2>
      <div className="profile-details">
        <h3>Name: {teacher.name}</h3>
        <p>Subject: {teacher.subject}</p>
        <p>Email: {teacher.email}</p>
        <p>Bio: {teacher.bio}</p>
        {/* Add more profile details as needed */}
      </div>
      {/* Add additional profile sections or actions */}
      <div className="additional-info">
        <h3>Additional Information:</h3>
        <ul>
          <li>
            <a href="/education">Education Background</a>
          </li>
          <li>
            <a href="/achievements">Achievements</a>
          </li>
          {/* Add more links to related sections */}
        </ul>
      </div>
    </div>
  );
}

export default TeacherProfile;
