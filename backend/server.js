const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Compass
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Contact Schema & Model
const contactSchema = new mongoose.Schema({
  from_name: String,
  reply_to: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/api/contact", async (req, res) => {
  try {
    const { from_name, reply_to, message } = req.body;
    if (!from_name || !reply_to || !message) {
      return res.status(400).json({ error: "Please fill all fields" });
    }

    const newContact = new Contact({ from_name, reply_to, message });
    await newContact.save();
    res.status(201).json({ message: "Message received!" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});