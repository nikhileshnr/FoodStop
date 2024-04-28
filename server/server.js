const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
const MONGO_URI = 'mongodb+srv://22it3026:Abcd%401234@cluster0.j536v4x.mongodb.net/';

mongoose.connect(MONGO_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
    res.send('Hello from Node.js backend!');
});

// Example route to handle data
app.post('/api/data', (req, res) => {
    const data = req.body;
    // Process data (e.g., save to database)
    res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
