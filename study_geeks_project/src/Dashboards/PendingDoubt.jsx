import React, { useState } from "react";

function PendingDoubt() {
  
  const [pendingDoubts, setPendingDoubts] = useState([
    {
      id: 1,
      studentName: "John Doe",
      doubt: "How to solve quadratic equations?",
    },
    {
      id: 2,
      studentName: "Jane Smith",
      doubt: "Could you explain the concept of derivatives?",
    },
   
  ]);

  
  const resolveDoubt = (id) => {
    setPendingDoubts(pendingDoubts.filter((doubt) => doubt.id !== id));
  };

  return (
    <div className="pending-doubt-container">
      <h2 className="text-xl font-semibold mb-4">Pending Doubts</h2>
      {pendingDoubts.length > 0 ? (
        <ul>
          {pendingDoubts.map((doubt) => (
            <li key={doubt.id}>
              <h3>{doubt.studentName}</h3>
              <p>{doubt.doubt}</p>
              <button onClick={() => resolveDoubt(doubt.id)}>Resolve</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending doubts at the moment.</p>
      )}
      
      <div className="additional-resources">
        <h3>Additional Resources:</h3>
        <ul>
          <li>
            <a href="/faq">Frequently Asked Questions</a>
          </li>
          <li>
            <a href="/support">Student Support Services</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PendingDoubt;
