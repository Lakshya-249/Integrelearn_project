import React from "react";

function Overview() {
  // Sample data for overview statistics
  const statistics = [
    {
      label: "Total Students",
      value: 250,
    },
    {
      label: "Active Courses",
      value: 15,
    },
    {
      label: "Upcoming Assignments",
      value: 8,
    },
    // Add more statistics as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statistics.map((stat) => (
          <div key={stat.label} className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
            <p className="text-gray-600 text-xl">{stat.value}</p>
          </div>
        ))}
      </div>
      {/* Add additional overview content such as charts, graphs, etc. */}
    </div>
  );
}

export default Overview;
