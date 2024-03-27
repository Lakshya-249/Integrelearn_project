import React from "react";

function Reminder() {
  return (
    <div className="reminder-container">
      <h2 className="text-xl font-semibold mb-4">Reminder</h2>
      <p>Stay organized with important reminders.</p>
      <ul className="reminder-list">
        <li>
          <strong>Faculty Meeting:</strong> Faculty meeting scheduled for March
          10, 2024, at 10:00 AM.
        </li>
        <li>
          <strong>Parent-Teacher Conference:</strong> Parent-teacher conferences
          will be held on March 15, 2024.
        </li>
        <li>
          <strong>Report Card Distribution:</strong> Report cards will be
          distributed on March 30, 2024.
        </li>
      </ul>
    </div>
  );
}

export default Reminder;
