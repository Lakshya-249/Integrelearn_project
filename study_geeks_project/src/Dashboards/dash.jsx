import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faTrophy,
  faChalkboardTeacher,
  faBookOpen,
  faBell,
  faClipboardCheck,
  faChartBar,
  faFolderOpen,
  faCalendarAlt,
  faUser,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./TeacherDashboard.css"; 

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="dashboard-container">
      {/* Sliding menu toggle button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon icon={faHome} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>

      {/* Sliding menu */}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="menu-items">
          <li className="menu-item">
            <Link to="/" onClick={closeMenu}>
              <FontAwesomeIcon icon={faHome} className="menu-icon" />
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/achievements" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTrophy} className="menu-icon" />
              Achievements
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/classes-scheduled" onClick={closeMenu}>
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                className="menu-icon"
              />
              Classes Scheduled
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/education" onClick={closeMenu}>
              <FontAwesomeIcon icon={faBookOpen} className="menu-icon" />
              Education
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/reminder" onClick={closeMenu}>
              <FontAwesomeIcon icon={faBell} className="menu-icon" />
              Reminder
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/evaluation" onClick={closeMenu}>
              <FontAwesomeIcon icon={faClipboardCheck} className="menu-icon" />
              Evaluation
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/progress" onClick={closeMenu}>
              <FontAwesomeIcon icon={faChartBar} className="menu-icon" />
              Progress
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/resources" onClick={closeMenu}>
              <FontAwesomeIcon icon={faFolderOpen} className="menu-icon" />
              Resources
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/upcoming-events" onClick={closeMenu}>
              <FontAwesomeIcon icon={faCalendarAlt} className="menu-icon" />
              Upcoming Events
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/profile" onClick={closeMenu}>
              <FontAwesomeIcon icon={faUser} className="menu-icon" />
              Profile
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/pending-doubt" onClick={closeMenu}>
              <FontAwesomeIcon icon={faQuestionCircle} className="menu-icon" />
              Pending Doubt
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className={`main-content ${isOpen ? "shrink" : ""}`}>
        {/* Profile and other content */}
        <div className="profile-content">
          <h2 className="dashboard-title">Welcome to Your Dashboard!</h2>
          <p className="dashboard-description">
            Welcome to Your Teacher's Command Center! Step into your
            personalized hub for educational excellence. From here, you hold the
            reins to ignite inspiration, cultivate curiosity, and sculpt minds.
            This dashboard isn't just a digital space; it's your virtual
            sanctuary, where every click shapes the future and every insight
            molds young intellects.
          </p>
          <p>Feel free to explore the menu for more options!</p>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

