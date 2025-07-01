const mongoose = require("mongoose");

// ❌ Hardcoded connection string (should be in environment variables)
const MONGO_URI =
  "mongodb+srv://admin:admin123@cluster0.mongodb.net/myapp?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // ❌ Inadequate error handling – doesn't log the actual error
    console.log("Failed to connect to MongoDB");
  }
};

module.exports = connectDB;
