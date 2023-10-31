const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/thoughthub-api';


mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
