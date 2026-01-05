import "./Shift.css";

const Shift = ({ shift }) => {
  const formatISODate = (isoString) => {
    if (!isoString) return "";

    const date = new Date(isoString);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  };

  const formatMinutesToTime = (totalMinutes) => {
    const minutesInDay = 24 * 60;
    const normalized = totalMinutes % minutesInDay;

    const hours = Math.floor(normalized / 60);
    const minutes = normalized % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="Shift">
      <div className="shift-upper">
        <h2>Shift Details</h2>
      </div>

      <div className="shift-below">
        <p>
          Date: <b> {formatISODate(shift.date)}</b>{" "}
        </p>
        <div className="time">
          <p>
            {" "}
            From <b>{formatMinutesToTime(shift.startTime)}</b>{" "}
          </p>
          <p>
            {" "}
            to <b>{formatMinutesToTime(shift.endTime)} </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shift;
