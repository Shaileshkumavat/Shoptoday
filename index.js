require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const userRoutes = require("./routes/routes");


const app = express();

// Middleware
app.use("/api/users", userRoutes);
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Connect to MongoDB Compass
mongoose.connect("mongodb://127.0.0.1:27017/ecomerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Define a simple API route
app.get("/", (req, res) => {
    res.send("Welcome to the E-Commerce API");
});

// Define PORT
const PORT = process.env.PORT || 2773;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
