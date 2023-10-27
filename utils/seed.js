const mongoose = require('mongoose');
const { users, thoughts } = require('./seed'); // Import the seed data

const dbURI = 'mongodb://localhost:27017/thoughthub-api';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require('./models/User');
const Thought = require('./models/Thought');

async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert seed data
    await User.insertMany(users);
    await Thought.insertMany(thoughts);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding the database:', err);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();
