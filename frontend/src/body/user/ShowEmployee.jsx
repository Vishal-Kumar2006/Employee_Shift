import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import Employee from "./Employee";
import AllShift from "../shift/AllShifts";
import "./Employee.css";

const ShowEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  //   To fetch user data
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`${API_URL}/user/${id}`, {
          withCredentials: true,
        });
        setEmployee(response.data.user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!employee) return <p>No employee found</p>;

  return (
    <div className="ShowEmployee">
      <Employee key={employee._id} employee={employee} />
      <AllShift id={id} />
    </div>
  );
};

//   return (
//     <div className="Employee">
//       {/* <div className="employee-details">
//         <p>Employee Name : {employee.name} </p>
//       </div>
//       <div className="employee-details">
//         <p>Employee Name : {employee.email} </p>
//       </div>
//       <div className="employee-details">
//         <p>Employee Name : {employee.employeeCode} </p>
//       </div>
//       <div className="employee-details">
//         <p>Employee Name : {employee.department} </p>
//       </div>
//       <div className="employee-details">
//         <p>Employee Name : {employee.role} </p>
//       </div> */}
//     </div>
//   );

export default ShowEmployee;
