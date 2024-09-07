const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// POST /api/message/ - Create a new message
router.route("/").post(protect, sendMessage);

// GET /api/message/:chatId - Get all messages for a specific chat
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
