const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const postSchema = mongoose.Schema({
  createdBy: {
    type: ObjectID
  },
  text: {
    type: String,
    required: true
  }
},
  {
    timestamps: true
  }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post