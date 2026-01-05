import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_URL from "../../config/api";
import { AuthContext } from "../../context/AuthContext";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Redirect logged-in users
  useEffect(() => {
    if (user) {
      navigate("/user/profile");
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    employeeCode: "",
    password: "",
    department: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    console.log(formData);
    try {
      await axios.post(`${API_URL}/user/sign-up`, formData);

      navigate("/user/login");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Signup failed");
      } else {
        setError("Server not reachable");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SignUp">
      <h2>Create a New Employee</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Enter Employee Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Enter Email Id
          </label>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Enter Employee Code
          </label>

          <input
            type="text"
            name="employeeCode"
            placeholder="Employee Code"
            value={formData.employeeCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Enter Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Enter Department
          </label>

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-block-select">
          <label htmlFor="email" className="input-label">
            Select Your Role :
          </label>

          <select
            className="input-label"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required>
            <option value="">Select Role</option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>
        </div>

        <div className="input-block button">
          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create Employee"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
