import { useState } from "react";
import axios from "axios";
import API_URL from "../../config/api";
import { useParams, useNavigate } from "react-router-dom";

const CreateShift = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [shift, setShift] = useState({
    date: "",
    startTime: [0, 0],
    endTime: [0, 0],
  });

  const updateTime = (field, index, value) => {
    setShift((prev) => {
      const updated = [...prev[field]];
      updated[index] = Number(value);

      return {
        ...prev,
        [field]: updated,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const parseTime = (time) => {
      const finalTime = time[0] * 60 + time[1];
      return finalTime;
    };

    const start = parseTime(shift.startTime);
    const end = parseTime(shift.endTime);

    if (!start || !end) {
      console.log(start, end);
      alert("Invalid time input");
      return;
    }

    try {
      const res = await axios.post(
        `${API_URL}/shift/create-shift`,
        {
          userId: id,
          date: shift.date,
          startTime: start,
          endTime: end,
        },
        { withCredentials: true }
      );
      navigate(`/user/${id}`);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="CreateShift">
      <h1> Create a new Shift for the Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="date">Enter Date</label>
          <input
            type="date"
            value={shift.date}
            onChange={(e) => setShift({ ...shift, date: e.target.value })}
            required
          />
        </div>

        <div className="input-block">
          <label>Enter Start Time</label>

          <input
            type="number"
            min="0"
            max="23"
            required
            value={shift.startTime[0]}
            onChange={(e) => updateTime("startTime", 0, e.target.value)}
          />

          <input
            type="number"
            min="0"
            max="59"
            required
            value={shift.startTime[1]}
            onChange={(e) => updateTime("startTime", 1, e.target.value)}
          />
        </div>

        <div className="input-block">
          <label>Enter End Time</label>

          <input
            type="number"
            min="0"
            max="23"
            required
            value={shift.endTime[0]}
            onChange={(e) => updateTime("endTime", 0, e.target.value)}
          />

          <input
            type="number"
            min="0"
            max="59"
            required
            value={shift.endTime[1]}
            onChange={(e) => updateTime("endTime", 1, e.target.value)}
          />
        </div>

        <button type="submit">Create Shift</button>
      </form>
    </div>
  );
};

export default CreateShift;
