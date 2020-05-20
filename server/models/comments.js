const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: {
    type: [Schema.Types.ObjectId],
    ref: "User",
  },
  comment: {
    type: String,
    required: true,
    maxlength: 256,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = moongose.module("Comment", CommentSchema);
