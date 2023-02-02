const express = require('express')

const router = express.Router()
const schoolController = require('../controllers/schoolController');

router.get("/", schoolController.getAllSchool);
router.post("/", schoolController.createSchool);
router.patch("/:id", schoolController.updateSchool);
router.delete("/:id", schoolController.deleteSchool);

module.exports = router
