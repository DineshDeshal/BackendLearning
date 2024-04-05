import express  from "express";
import { findStudent,createStudents,deleteStudent,updateStudent } from "../controllers/StudentController.mjs";
const router = express.Router();
router.get('/students',findStudent);
router.post("/addstudent",createStudents)
router.delete('/deletestudent',deleteStudent)
router.post('/updatestudent',updateStudent)

export default router;