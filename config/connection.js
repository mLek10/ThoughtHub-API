const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/thoughthub-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// const dbURI = 'mongodb://localhost:27017/thoughthub-api';


// mongoose
//   .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('MongoDB connected successfully');
//     // Start your server or perform other actions here
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });
module.exports = mongoose.connection;