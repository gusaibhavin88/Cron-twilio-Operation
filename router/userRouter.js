import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  register,
  twilioTest,
  updateUser,
} from "../controller/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.post("/register", register);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/twilio", twilioTest);

export default router;
