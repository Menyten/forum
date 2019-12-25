const mongoose = require('mongoose')

const forumSchema = mongoose.Schema({
  threads: {
    title: {
      type: String,
      required: true
    },
    type: Array
  }
})

const Forum = mongoose.model('Forum', forumSchema)

module.exports = Forum