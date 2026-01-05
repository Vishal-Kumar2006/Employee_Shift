import { useState, useEffect, useContext } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    employeeCode: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/user/login`, formData, {
        withCredentials: true,
      });

      setUser(res.data.user);
      navigate("/user/profile");
    } catch (error) {
      console.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="Login">
      <h2>Log In to your Employee Id </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Enter Email Id
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="login-input"
            required
            autoComplete="email"
            placeholder="Enter Email Id"
          />
        </div>

        <div className="input-block">
          <label htmlFor="employeeCode" className="input-label">
            Enter Employee Code
          </label>
          <input
            type="text"
            name="employeeCode"
            value={formData.employeeCode}
            onChange={handleChange}
            className="login-input"
            required
            autoComplete="employeeCode"
            placeholder="Enter Employee Code"
          />
        </div>

        <div className="input-block">
          <label htmlFor="password" className="input-label">
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="login-input"
            required
            autoComplete="password"
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
