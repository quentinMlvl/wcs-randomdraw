import express from "express";

import { addStudent, putStudent, removeStudent, showStudents, addSpeech, clearSpeeches } from "../controllers/studentController.js";

const router = express.Router();

router.get("/students", showStudents);

router.post("/students", addStudent);

router.put("/students/:id", putStudent);

router.delete("/students/:id", removeStudent);

router.post("/students/:id/speech", addSpeech);

router.delete("/speeches", clearSpeeches);

export default router;
