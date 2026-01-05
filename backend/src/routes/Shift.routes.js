import express from "express";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";
import {
  createShift,
  deleteOneShift,
  deleteShifts,
  getShifts,
  updateShifts,
} from "../controllers/Shift.controllers.js";

const router = express.Router();

router.get("/get-shifts/:id", protect, getShifts);
router.post("/create-shift", protect, authorizeRoles, createShift);
router.put("/update-shift", protect, authorizeRoles, updateShifts);
router.delete("/delete-one-shift", protect, authorizeRoles, deleteOneShift);
router.delete("/delete-all-shift", protect, authorizeRoles, deleteShifts);

export default router;
