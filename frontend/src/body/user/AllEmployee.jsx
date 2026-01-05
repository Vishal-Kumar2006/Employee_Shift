import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../../config/api";
import Employee from "./Employee";
import "./Employee.css";

const AllEmployee = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  // 🔐 Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate("/user/login");
    }
  }, [user, loading, navigate]);

  // 📦 Fetch profile data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/all-employees`, {
          withCredentials: true,
        });

        setEmployees(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      fetchUsers();
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="All-employees">
      <h1> AllEmployee are given below </h1>
      <div className="employees-block">
        {employees.length == 0 ? (
          <p>No Employee Found under you</p>
        ) : (
          <>
            {employees.map((employee) => (
              <Employee key={employee.employeeCode} employee={employee} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AllEmployee;
