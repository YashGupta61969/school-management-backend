const express = require('express')

const router = express.Router()
const studentController = require('../controllers/studentController')

router.get("/", studentController.getAllStudent);
router.post("/", studentController.createStudent);
router.patch("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router
