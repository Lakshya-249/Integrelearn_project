import React, { useEffect, useRef } from "react";
import Chart from "chart.js/";

function StudentProgress() {
  const chartRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mathematics", "Physics", "Chemistry", "Biology"],
        datasets: [
          {
            label: "Overall Grade",
            data: [90, 85, 88, 92],
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Recent Test Score",
            data: [95, 85, 90, 88],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Homework Completion",
            data: [90, 80, 85, 90],
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          // @ts-ignore
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div className="student-progress-container">
      <h2 className="text-xl font-semibold mb-4">Student Progress</h2>
      <p>
        Track and monitor student progress in various subjects and activities.
      </p>
      <canvas ref={chartRef}></canvas>
      <div className="tabular-data mt-4">
        <h3 className="text-lg font-semibold mb-2">Tabular Data</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Overall Grade</th>
              <th>Recent Test Score</th>
              <th>Homework Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mathematics</td>
              <td>90</td>
              <td>95</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Physics</td>
              <td>85</td>
              <td>85</td>
              <td>80</td>
            </tr>
            <tr>
              <td>Chemistry</td>
              <td>88</td>
              <td>90</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Biology</td>
              <td>92</td>
              <td>88</td>
              <td>90</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentProgress;

