import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import "./Employee.css";

const Employee = ({ employee }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      navigate("/user/profile");
    }
  }, [user, navigate]);

  const handleCreateShift = () => {
    navigate(`/user/${employee._id}/create-Shift`);
  };

  const handleShowShift = () => {
    navigate(`/user/${employee._id}`);
  };

  return (
    <div className="Employee">
      <div className="employee-upper">
        <h2>{employee.name} </h2>
      </div>
      <div className="employee-lower">
        <div className="employee-details">
          <p>
            Code : <b> {employee.employeeCode} </b>{" "}
          </p>
        </div>

        <div className="employee-details">
          <p>
            Email : <b> {employee.email} </b>{" "}
          </p>
        </div>

        <div className="employee-details">
          <p>
            Department : <b> {employee.department} </b>{" "}
          </p>
        </div>
        <div className="employee-details">
          <p>
            Role : <b> {employee.role} </b>{" "}
          </p>
        </div>
      </div>

      {user.role === "ADMIN" ? (
        <>
          <button id="small-button" onClick={handleCreateShift}>
            Create Shift
          </button>

          <button id="small-button" onClick={handleShowShift}>
            Show Shift
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Employee;
