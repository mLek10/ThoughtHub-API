// init.js or dbSetup.js
const User = require('./User');
const Thought = require('./Thought'); // Adjust the path based on your project structure
const Reaction = require('./Reaction');

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
  module.exports = { User, Thought };