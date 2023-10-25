const mongoose = require('mongoose');
const { Schema } = mongoose;
const ReactionSchema = require('./Reaction'); // Import the Reaction schema

const ThoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction', // Reference to the Reaction model
    },
  ],
});

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

module.exports = mongoose.model('Thought', ThoughtSchema);
