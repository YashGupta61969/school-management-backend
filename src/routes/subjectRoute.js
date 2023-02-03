const express = require('express')

const router = express.Router()
const subjectController = require('../controllers/subjectController')

router.get("/", subjectController.getAllSubject);
router.post("/", subjectController.createSubject);
router.patch("/:id", subjectController.updateSubject);
router.delete("/:id", subjectController.deleteSubject);

module.exports = router
