const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

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
  posts: [{
    type: ObjectID,
    required: true,
    ref: 'Post'
  }]
},
  {
    timestamps: true
  }
)

const Thread = mongoose.model('Thread', threadSchema)

module.exports = Thread