const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const forumSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  /* threads: {
    type: [{
      type: ObjectID,
      ref: 'Thread'
    }],
  } */
},
  {
    timestamps: true
  }
)

const Forum = mongoose.model('Forum', forumSchema)

module.exports = Forum