import { User } from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUpController = async (req, res) => {
  try {
    const { name, email, password, employeeCode, department, role } = req.body;

    console.log(name, email, password, employeeCode, department, role);
    if (!name || !email || !password || !employeeCode || !department || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUserbyEmail = await User.findOne({ email });
    const existingUserbyCode = await User.findOne({ employeeCode });
    if (existingUserbyEmail || existingUserbyCode) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      employeeCode: employeeCode,
      department: department,
      role: role,
    });

    console.log(`User Crested : ${user}`);
    return res.status(201).json({
      message: "User created successfully",
      userId: user._id,
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, employeeCode, password } = req.body;

    if (!email || !employeeCode || !password) {
      return res.status(400).json({ message: "Al fields are required" });
    }

    const user = await User.findOne({ email, employeeCode });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const isLoggedIn = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ user: null });
  }

  return res.status(200).json({
    user: req.user,
  });
};

export const logoutController = (req, res) => {
  try {
    console.log("Loogg-Out");
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const profileController = async (req, res) => {
  try {
    const userId = req.user.userId;
    if (!userId) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const userData = await User.findOne({ _id: userId });

    if (!userData) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ user: userData });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const employeeController = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const allEmployeesController = async (req, res) => {
  try {
    const employees = await User.find({ role: "USER" }).select("-password");
    return res.status(200).json(employees);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
