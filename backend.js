const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a Mongoose schema and model
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: String,
    email: String,
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username, password })
        .then(user => {
            if (user) {
                res.json({ success: true, message: 'Login successful' });
            } else {
                res.json({ success: false, message: 'Invalid credentials' });
            }
        })
        .catch(err => res.status(500).json({ success: false, message: 'Error logging in' }));
});

app.post('/api/signup', (req, res) => {
    const { firstName, lastName, mobile, email, username, password } = req.body;
    User.findOne({ username })
        .then(user => {
            if (user) {
                return res.json({ success: false, message: 'Username already exists' });
            }

            const newUser = new User({
                firstName,
                lastName,
                mobile,
                email,
                username,
                password
            });

            newUser.save()
                .then(() => res.json({ success: true, message: 'Sign-up successful' }))
                .catch(err => res.status(500).json({ success: false, message: 'Error saving user' }));
        })
        .catch(err => res.status(500).json({ success: false, message: 'Error checking username' }));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});