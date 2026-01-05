import express from "express";

import {
  signUpController,
  loginController,
  profileController,
  allEmployeesController,
  employeeController,
  isLoggedIn,
  logoutController,
} from "../controllers/User.controllers.js";
import { protect, authorizeRoles } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/sign-up", signUpController);
router.post("/login", loginController);
router.get("/isLoggedIn", protect, isLoggedIn);
router.post("/logout", logoutController);
router.get("/profile", protect, profileController);
router.get("/all-employees", protect, authorizeRoles, allEmployeesController);
router.get("/:id", protect, employeeController);

export default router;
