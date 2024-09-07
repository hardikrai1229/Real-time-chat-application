const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  removeFromGroup,
  addToGroup,
  renameGroup,
} = require("../controllers/chatControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Route to create or fetch a one-to-one chat
router.route("/").post(protect, accessChat); // POST /api/chat

// Route to fetch all chats for the logged-in user
router.route("/").get(protect, fetchChats); // GET /api/chat

// Route to create a group chat
router.route("/group").post(protect, createGroupChat); // POST /api/chat/group

// Route to rename a group chat
router.route("/rename").put(protect, renameGroup); // PUT /api/chat/rename

router.route("/groupadd").put(protect, addToGroup);

router.route("/groupremove").put(protect, removeFromGroup);
module.exports = router;
