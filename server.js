const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // adjust path as necessary

const app = express();
const PORT = process.env.PORT || 5003;  // Changed port to 5003


// Middleware
app.use(express.json());

// Use the user routes
app.use('/', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database connected'))
.catch(err => console.error('Database connection error:', err));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
