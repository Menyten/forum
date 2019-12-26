const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const commentSchema = mongoose.Schema({
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

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment