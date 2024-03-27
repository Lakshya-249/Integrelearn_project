import React from "react";

function UpcomingEvents() {
  return (
    <div className="upcoming-events-container">
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <div className="event">
        <h3 className="text-lg font-semibold">Physics Exhibition</h3>
        <p>Date: March 15, 2024</p>
        <p>Location: School Auditorium</p>
        <p>Description: Showcase of student projects and experiments.</p>
        <p>Time: 9:00 AM - 12:00 PM</p>
        <p>Participants: Grades 6-12</p>
        <p>Theme: "Exploring the Wonders of Science"</p>
        <p>
          <a
            href="https://example.com/physics-exhibition-guide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Physics Exhibition Guide
          </a>{" "}
          - Learn more about organizing and participating in science fairs.
        </p>
      </div>
      <div className="event">
        <h3 className="text-lg font-semibold">Parent-Teacher Conference</h3>
        <p>Date: March 20, 2024</p>
        <p>Location: School Conference Room</p>
        <p>
          Description: Individual meetings between parents and teachers to
          discuss student progress and performance.
        </p>
        <p>Time: 3:00 PM - 6:00 PM</p>
        <p>
          <a
            href="https://example.com/parent-teacher-conference-tips"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Parent-Teacher Conference Tips
          </a>{" "}
          - Helpful tips for parents and teachers to make the most out of
          parent-teacher conferences.
        </p>
      </div>
      <div className="event">
        <h3 className="text-lg font-semibold">Field Trip</h3>
        <p>Date: March 25, 2024</p>
        <p>Location: Local Museum</p>
        <p>
          Description: Educational visit to explore exhibits and learn about
          local history and culture.
        </p>
        <p>Time: 10:00 AM - 2:00 PM</p>
        <p>
          <a
            href="https://example.com/field-trip-preparation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Field Trip Preparation Guide
          </a>{" "}
          - Tips for planning and organizing successful field trips.
        </p>
      </div>
      
    </div>
  );
}

export default UpcomingEvents;
