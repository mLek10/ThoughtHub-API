const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const thoughtRoutes = require('./routes/thoughtRoutes');
const connection = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/thoughts', thoughtRoutes);


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });