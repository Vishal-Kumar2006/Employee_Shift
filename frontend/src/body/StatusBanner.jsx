import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const StatusBanner = () => {
  const { status } = useContext(AuthContext);

  if (!status) return null;

  const messages = {
    login: "Please login to continue",
    unauthorized: "You are not authorized",
    error: "Something went wrong",
    success: "Action successful",
  };

  return <div className={`status ${status}`}>{messages[status]}</div>;
};

export default StatusBanner;
