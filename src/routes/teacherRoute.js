const express = require('express')

const router = express.Router()
const teacherController = require('../controllers/teacherController')

router.get("/", teacherController.getAllTeacher);
router.post("/", teacherController.createTeacher);
router.patch("/", teacherController.updateTeacher);
router.delete("/", teacherController.deleteTeacher);

module.exports = router
