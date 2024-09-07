const mongoose = require("mongoose");

// Define the schema
const messageSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },
  {
    timestamps: true,
  }
);

// Create the model from the schema
const Message = mongoose.model("Message", messageSchema);

// Export the model
module.exports = Message;
