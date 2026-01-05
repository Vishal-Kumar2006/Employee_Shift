import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./body/Navbar.jsx";
import Footer from "./body/Footer.jsx";
import Body from "./body/Body.jsx";
import Login from "./body/user/Login.jsx";
import SignUp from "./body/user/SignUp.jsx";
import Profile from "./body/user/Profile.jsx";
import AllEmployee from "./body/user/AllEmployee.jsx";
import Shift from "./body/shift/Shift.jsx";
import CreateShift from "./body/shift/CreateShift.jsx";

import "./App.css";
import AllShift from "./body/shift/AllShifts.jsx";
import ShowEmployee from "./body/user/ShowEmployee.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/user/sign-up" element={<SignUp />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/profile" element={<Profile />} />

          <Route path="/user/:id" element={<ShowEmployee />} />
          <Route path="/user/all-employees" element={<AllEmployee />} />

          <Route path="/user/:id/create-shift" element={<CreateShift />} />
          <Route path="/user/shift" element={<Shift />} />
          <Route path="/user/all-shifts" element={<AllShift />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
