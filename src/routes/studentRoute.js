const express = require('express')

const router = express.Router()
const studentController = require('../controllers/studentController')

router.get("/", studentController.getAllStudent);
router.post("/", studentController.createStudent);
router.patch("/", studentController.updateStudent);
router.delete("/", studentController.deleteStudent);

module.exports = router
