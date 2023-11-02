const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/thoughthub-api';


mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    createIndexes: "throw", // Add this option if needed
  })
  .then(() => {
    console.log('MongoDB connected successfully');
    // Start your server or perform other actions here
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
