const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
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
router.post('/api/forums/create', auth, async (req, res) => {
  const forum = new Forum(req.body)
  try {
    if (req.user.role !== 'admin') { return res.status(403).send() }
    await forum.save()
    res.send({ success: 'New forum created' })
  } catch (e) {
    res.status(500).send(e)
  }
})

// Route to create a new thread in a forum
// TODO: Replace hardcoded createdBy with dynamic _id
router.post('/api/forum/:id', auth, async (req, res) => {
  const thread = new Thread({
    title: req.body.title,
    forum: req.params.id,
    createdBy: '5e07655906b796297590ec4d'
  })
  const firstPost = new Post({
    createdBy: '5e07655906b796297590ec4d',
    text: req.body.text,
    thread: thread._id
  })
  try {
    await thread.save()
    await firstPost.save()
    res.send()
  } catch (e) {
    res.status(500).send(e)
  }
})

// Route to get all threads in forum
// TODO: Should probably implement pagination
router.get('/api/forum/:id', async (req, res) => {
  try {
    const threads = await Thread
      .find({ forum: req.params.id })
      .populate({ path: 'createdBy', select: 'username' })
      .exec()
    res.send(threads)
  } catch (e) {
    res.status(500).send(e)
  }
})

// Route to post in a thread
router.post('/api/thread/:id', auth, async (req, res) => {
  const post = new Post({
    createdBy: '5e07655906b796297590ec4d',
    text: req.body.text,
    thread: req.params.id
  })
  try {
    const savedPost = await post.save()
    res.send(savedPost)
  } catch (e) {
    res.status(500).send(e)
  }
})

// Route to get all posts in a thread
// TODO: should probably implement pagination
//  
router.get('/api/thread/:id', async (req, res) => {
  try {
    const posts = await Post
      .find({ thread: req.params.id })
      .populate({ path: 'createdBy', select: 'username' })
      .exec()
    res.send(posts)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router