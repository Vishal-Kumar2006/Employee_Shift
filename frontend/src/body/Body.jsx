import { useNavigate } from "react-router-dom";
import "./Body.css";

const Body = () => {
  const navigate = useNavigate();

  return (
    <div className="Body">
      <h1 className="body-content">
        Your Schedule and other employee Information
      </h1>
      <h2 className="body-content">You are at XYZ Shift comapny Dashboard </h2>
      <p className="body-content">Login to see your Shifts</p>

      <button onClick={() => navigate("/user/login")}>Log In</button>
    </div>
  );
};

export default Body;
