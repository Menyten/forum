const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const postSchema = mongoose.Schema({
  createdBy: {
    type: ObjectID,
    ref: 'User'
  },
  text: {
    type: Object,
    required: true
  },
  thread: {
    type: ObjectID,
    ref: 'Thread'
  }
},
  {
    minimize: false,
    timestamps: true
  }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post