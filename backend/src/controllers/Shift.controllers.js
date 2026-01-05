import { Shift } from "../models/Shift.model.js";

export const getShifts = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const shifts = await Shift.find({ userId: id }).sort({
      date: -1,
      startTime: -1,
    }); // newest date first, latest shift first

    if (!shifts.length) {
      return res.status(404).json({ message: "Shift Not Found" });
    }

    return res.status(200).json({ shifts });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createShift = async (req, res) => {
  try {
    console.log(req.body);
    const { userId, date, startTime, endTime } = req.body;

    if (!userId || !date || !startTime || !endTime) {
      return res.status(401).json({ message: "All fields required" });
    }

    const shift = await Shift.create({
      userId,
      date,
      startTime,
      endTime,
    });

    return res.status(201).json(shift);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Not Emplemented
export const updateShifts = (req, res) => {
  try {
    const userId = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Un authorized" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteOneShift = (req, res) => {
  try {
    const userId = req.body;

    if (!userId) {
      return res.status(401).json({ message: "Un authorized" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteShifts = (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
