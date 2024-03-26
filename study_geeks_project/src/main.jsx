import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Homefolder/home.jsx";
import About from "./AboutFolder/about.jsx";
import Courses from "./CoursesFolder/courses.jsx";
import Studentlogin from "./LoginPageFolder/studentlogin.jsx";
import Teacherlogin from "./LoginPageFolder/teacherlogin.jsx";
import StudentRegister from "./RegisterPageFolder/studentRegister.jsx";
import TeacherRegister from "./RegisterPageFolder/teacherRegister.jsx";
import Team from "./AboutFolder/team.jsx";
import Notes from "./Notes/notes.jsx";
import Maths from "./Notes/Subjects/maths.jsx";
import Physics from "./Notes/Subjects/physics.jsx";
import Chemistry from "./Notes/Subjects/chemistry.jsx";
import Eth from "./Notes/11th.jsx";
import Tth from "./Notes/12th.jsx";
import Course1 from "./CoursesFolder/courses1.jsx";
import Course2 from "./CoursesFolder/courses2.jsx";
import Course3 from "./CoursesFolder/courses3.jsx";
import Course4 from "./CoursesFolder/courses4.jsx";
import Overview from "./Dashboards/overview.jsx";
import Dash from "./Dashboards/dash.jsx";
import ClassesScheduled from "./Dashboards/ClassesScheduled.jsx";
import Evaluation from "./Dashboards/Evaluation.jsx";
import Education from "./Dashboards/Education.jsx";
import PendingDoubt from "./Dashboards/PendingDoubt.jsx";
import StudentProgress from "./Dashboards/Progress.jsx";
import UsefulResources from "./Dashboards/Resources.jsx";
import TeacherProfile from "./Dashboards/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="courses" element={<Courses />}></Route>
      <Route path="team" element={<Team />}></Route>
      <Route path="course1" element={<Course1 />}></Route>
      <Route path="course2" element={<Course2 />}></Route>
      <Route path="course3" element={<Course3 />}></Route>
      <Route path="course4" element={<Course4 />}></Route>
      <Route path="notes" element={<Notes />}>
        <Route path="maths" element={<Maths />}>
          <Route path="11th" element={<Eth />}></Route>
          <Route path="12th" element={<Tth />}></Route>
        </Route>
        <Route path="physics" element={<Physics />}>
          <Route path="11th" element={<Eth />}></Route>
          <Route path="12th" element={<Tth />}></Route>
        </Route>
        <Route path="chemistry" element={<Chemistry />}>
          <Route path="11th" element={<Eth />}></Route>
          <Route path="12th" element={<Tth />}></Route>
        </Route>
      </Route>
      <Route path="teacher/login" element={<Teacherlogin />}></Route>
      <Route path="student/login" element={<Studentlogin />}></Route>
      <Route path="teacher/register" element={<TeacherRegister />}></Route>
      <Route path="student/register" element={<StudentRegister />}></Route>
      <Route path="studentdash" element={<Dash />}>
        <Route path="overview" element={<Overview />}></Route>
        <Route path="classschedule" element={<ClassesScheduled />}></Route>
        <Route path="evaluation" element={<Evaluation />}></Route>
        <Route path="education" element={<Education />}></Route>
        <Route path="pendingdbt" element={<PendingDoubt />}></Route>
        <Route path="progress" element={<StudentProgress />}></Route>
        <Route path="resources" element={<UsefulResources />}></Route>
        <Route path="profile" element={<TeacherProfile />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
