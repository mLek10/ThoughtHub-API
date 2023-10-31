const mongoose = require('mongoose');
const { Schema } = mongoose;
const User = require('./User');
const Thought = require('./Thought');

// Create a new thought
const newThought = new Thought({
  thoughtText: 'This is a thought.',
  username: 'exampleUser',
});

// Create a new reaction
const newReaction = new Reaction({
  reactionBody: 'This is a reaction.',
  username: 'anotherUser',
});

// Add the reaction to the thought's reactions array
newThought.reactions.push(newReaction);

// Save the thought and reaction to the database
newThought.save()
  .then((thought) => {
    console.log('Thought and reaction saved:', thought);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = {
  User,
  Thought,
  Schema
};