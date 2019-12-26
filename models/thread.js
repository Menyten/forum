const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId
const Comment = require('../models/comment')

const threadSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  /**
   * Eventually this field will be added
   * But need to fix token being sent on requests first
   */
  // createdBy: {
  //   type: ObjectID,
  // }
  /* comments: [{
    type: Comment,
    required: true
  }] */
},
  {
    timestamps: true
  }
)

const Thread = mongoose.model('Thread', threadSchema)

module.exports = Thread