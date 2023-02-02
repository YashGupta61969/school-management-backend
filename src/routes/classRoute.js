const express = require('express')

const router = express.Router()
const classController = require('../controllers/classController')

router.get("/", classController.getAllClass);
router.post("/", classController.createClass);
router.patch("/", classController.updateClass);
router.delete("/", classController.deleteClass);

module.exports = router
