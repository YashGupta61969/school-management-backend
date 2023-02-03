const express = require('express')

const router = express.Router()
const classController = require('../controllers/classController')

router.get("/", classController.getAllClass);
router.post("/", classController.createClass);
router.patch("/:id", classController.updateClass);
router.delete("/:id", classController.deleteClass);

module.exports = router
