const mongoose = require('mongoose');
const { Schema } = mongoose;

// Reaction Schema
const ReactionSchema = new mongoose.Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    // default: Date.now,
  },
});

// Thought Schema
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
  reactions: [ReactionSchema], // Embed the ReactionSchema as a subdocument
});

module.exports = {
  Thought: mongoose.model('Thought', ThoughtSchema),
  Reaction: mongoose.model('Reaction', ReactionSchema),
};
