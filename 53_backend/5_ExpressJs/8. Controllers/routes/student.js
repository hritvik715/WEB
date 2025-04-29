import express from "express";
import {
  allStudents,//these are controllers
  newStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/student.js";


const router = express.Router();

// router.get("/all", (req, res) => res.send("create new user"));//imp-> controllers ki help se we dont need callback fxn inside this
router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.put("/delete", deleteStudent);

export default router;
