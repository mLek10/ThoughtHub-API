const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Import userRoutes
const thoughtRoutes = require('./routes/thoughtRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/thoughts', thoughtRoutes);

mongoose.connection.once('open', () => { // Use mongoose.connection
  console.log('MongoDB database connection established successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
