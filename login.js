const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser'); // Import body-parser
const port = 5500;

const app = express();

// Middleware to parse JSON and URL-encoded bodies"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(__dirname));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/userlogin', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
    console.log("MongoDB connection successful");
});

// Define user schema
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String, // Fixed typo: changed Last_name to last_name
    mobile: Number,
    email: String,
    dob: Date
});

// Create user model
const Users = mongoose.model("data", userSchema);

// Serve the login.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); // Ensure login.html is in the same directory
});

// Handle form submission
app.post('/post', async (req, res) => {
    // Check if req.body is defined
    if (!req.body) {
        return res.status(400).send("Request body is missing");
    }

    const { first_name, last_name, mobile, email, dob } = req.body; // Fixed typo: changed firat_name to first_name
    const user = new Users({
        first_name,
        last_name,
        mobile,
        email,
        dob
    });

    await user.save();
    console.log(user);
    res.send("Form Submission Successful");
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});