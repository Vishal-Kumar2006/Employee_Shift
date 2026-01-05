import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import API_URL from "../../config/api";
import "./Profile.css";
import AllShift from "../shift/AllShifts";

const Profile = () => {
  const { user, loading, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      navigate("/user/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/profile`, {
          withCredentials: true,
        });
        setUserData(res.data.user);
      } catch (err) {
        if (err.response?.status === 401) {
          setUser(null);
          navigate("/user/login");
        }
      }
    };

    fetchProfile();
  }, [loading, user, navigate, setUser]);

  const logout = async () => {
    try {
      await axios.post(`${API_URL}/user/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setUser(null);
      navigate("/user/login");
    }
  };

  if (loading || !userData) return <p>Loading...</p>;

  return (
    <div className="Profile">
      <h1>Profile Page of {userData.name}</h1>
      <div className="profile-data">
        <p>
          You are
          <b> {userData.role}</b>
          level Employee
        </p>
        <p>
          Department: <b>{userData.department}</b>{" "}
        </p>
        <p>
          Email: <b> {userData.email}</b>
        </p>
        <p>
          Employee Code: <b> {userData.employeeCode} </b>
        </p>
      </div>

      <div className="btn-block">
        {userData.role === "USER" ? (
          <></>
        ) : (
          <>
            <button onClick={() => navigate("/user/all-employees")}>
              See Employees
            </button>
          </>
        )}

        <button onClick={logout}>Logout</button>
      </div>
      <div className="shift-block">
        <AllShift id={userData._id} />
      </div>
    </div>
  );
};

export default Profile;
