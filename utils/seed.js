// const mongoose = require('mongoose');
const {User, Thought} = require(`../models`);
// const dbURI = 'mongodb://localhost:27017/thoughthub-api';

async function seedDatabase() {
  try {
    // // Clear existing data
    // await User.deleteMany({});
    // await Thought.deleteMany({});

    // Insert seed data
   await User.insertMany([
      {
        username: 'user1',
        email: 'user1@example.com',
      },
      {
        username: 'user2',
        email: 'user2@example.com',
      },
      {
        username: 'user3',
        email: 'user3@example.com',
      },
    ]);
    await Thought.insertMany([
    // const thoughts = [
      {
        thoughtText: 'I have a thought!',
        username: 'user1',
      },
      {
        thoughtText: 'I have a better thought!',
        username: 'user2',
      },
      {
        thoughtText: 'I have the best thought!',
        username: 'user3',
      },
    ]);
    
   

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding the database:', err);
  }
};
seedDatabase();

// Establish database connection and seed the data
// mongoose.connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Database connected');
//   return seedDatabase();
// })
// .catch((err) => console.error('Error connecting to the database:', err));

