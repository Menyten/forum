const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const threadSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  forum: {
    type: ObjectID,
    required: true
  },
  createdBy: {
    type: ObjectID,
    required: true
  }
  // posts: [{
  //   type: ObjectID,
  //   required: true,
  //   ref: 'Post'
  // }]
},
  {
    timestamps: true
  }
)

const Thread = mongoose.model('Thread', threadSchema)

module.exports = Thread