import React from "react";

function ClassesScheduled() {

  const upcomingClasses = [
    {
      id: 1,
      title: "Introduction to Biology",
      date: "March 15, 2024",
      time: "10:00 AM - 11:30 AM",
      location: "Room 101",
      instructor: "Dr. Smith",
    },
    {
      id: 2,
      title: "Algebra II",
      date: "March 16, 2024",
      time: "9:00 AM - 10:30 AM",
      location: "Room 202",
      instructor: "Ms. Johnson",
    },
   
  ];

  return (
    <div className="classes-scheduled-container">
      <h2 className="text-2xl font-bold mb-6">Upcoming Classes</h2>
      <div className="upcoming-classes">
        {upcomingClasses.map((classItem) => (
          <div key={classItem.id} className="class-item mb-8">
            <h3 className="text-xl font-semibold">{classItem.title}</h3>
            <p className="text-gray-600">Date: {classItem.date}</p>
            <p className="text-gray-600">Time: {classItem.time}</p>
            <p className="text-gray-600">Location: {classItem.location}</p>
            <p className="text-gray-600">Instructor: {classItem.instructor}</p>
          </div>
        ))}
      </div>
      <div className="additional-resources mt-8">
        <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="/class-materials"
              className="text-blue-600 hover:underline"
            >
              Class Materials
            </a>{" "}
            - Access materials for your upcoming classes.
          </li>
          <li>
            <a href="/study-guides" className="text-blue-600 hover:underline">
              Study Guides
            </a>{" "}
            - Review helpful study guides to prepare for exams.
          </li>
          <li>
            <a
              href="/tutoring-services"
              className="text-blue-600 hover:underline"
            >
              Tutoring Services
            </a>{" "}
            - Explore tutoring services available for students.
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default ClassesScheduled;
