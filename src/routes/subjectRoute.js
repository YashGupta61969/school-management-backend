const express = require('express')

const router = express.Router()
const subjectController = require('../controllers/subjectController')

router.get("/", subjectController.getAllSubject);
router.post("/", subjectController.createSubject);
router.patch("/", subjectController.updateSubject);
router.delete("/", subjectController.deleteSubject);

module.exports = router
