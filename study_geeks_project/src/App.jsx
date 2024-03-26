import "./App.css";
import Header from "./BasicComponent/header";
import { Outlet } from "react-router-dom";
import Footer from "./BasicComponent/footer";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col pb-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
