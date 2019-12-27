const express = require('express')
const router = new express.Router()
const Forum = require('../models/forum')
const Thread = require('../models/thread')
const Post = require('../models/post')

// Route to get all forums
router.get('/api/forums', async (req, res) => {
  try {
    const forums = await Forum.find().select('_id title')
    res.send(forums)
  } catch (e) {
    res.status(500).send(e)
  }
})

// Route to create a new forum
router.post('/api/forums/create', async (req, res) => {
  const forum = new Forum(req.body)
  try {
    await forum.save()
    res.send({ success: 'New forum created' })
  } catch (e) {
    res.status(500).send(e)
  }
})

// Route to create a new thread in a forum
router.post('/api/forum/:id/create', async (req, res) => {
  const firstComment = new Post({
    createdBy: '5e04da8bdb928a1dcfcb7fcd',
    text: req.body.text
  })
  const thread = new Thread({ title: req.body.title })
  res.send()

})

module.exports = router