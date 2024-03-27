import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Dashboard from "./Components/TeacherDashboard";
import Achievements from "./Components/Achievements";
import Education from "./Components/Education";
import ClassesScheduled from "./Components/ClassesScheduled";
import Reminder from "./Components/Reminders";
import Evaluation from "./Components/Evaluation";
import Resources from "./Components/Resources";
import PendingDoubt from "./Components/PendingDoubt";
import Progress from "./Components/Progress";
import Profile from "./Components/Profile";
import UpcomingEvents from "./Components/UpcomingEvents";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink
              // @ts-ignore
              exact
              to="/"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/achievements">Achievements</NavLink>
          </li>
          <li>
            <NavLink to="/education">Education</NavLink>
          </li>
          <li>
            <NavLink to="/classes-scheduled">Classes Scheduled</NavLink>
          </li>
          <li>
            <NavLink to="/Reminders">Reminders</NavLink>
          </li>
          <li>
            <NavLink to="/Evaluation">Evaluation</NavLink>
          </li>
          <li>
            <NavLink to="/Progress">Progress</NavLink>
          </li>
          <li>
            <NavLink to="/Resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/UpcomingEvents">Upcoming Events</NavLink>
          </li>
          <li>
            <NavLink to="/Profile">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/PendingDoubt">Pending Doubt</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route
          // @ts-ignore
          exact
          path="/"
          element={<Dashboard />}
        />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/education" element={<Education />} />
        <Route path="/classes-scheduled" element={<ClassesScheduled />} />
        <Route path="/Reminders" element={<Reminder />} />
        <Route path="/Evaluation" element={<Evaluation />} />

        <Route path="/Progress" element={<Progress />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/PendingDoubt" element={<PendingDoubt />} />
      </Routes>
    </Router>
  );
}

export default App;
