import { useEffect, useState } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import Shift from "./Shift";

const AllShift = ({ id }) => {
  const [shifts, setShifts] = useState([]);
  useEffect(() => {
    if (!id) return;

    const fetchShifts = async () => {
      try {
        const response = await axios.get(`${API_URL}/shift/get-shifts/${id}`, {
          withCredentials: true,
        });
        setShifts(response.data.shifts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShifts();
  }, [id]);

  return (
    <div className="AllShift">
      <h1>All Shift</h1>
      <div className="shifts">
        {shifts.length == 0 ? (
          <>
            <h2>No Shifts Available </h2>
          </>
        ) : (
          <>
            {shifts.map((shift) => (
              <Shift key={shift._id} shift={shift} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AllShift;
