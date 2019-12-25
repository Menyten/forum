const express = require('express')
const router = new express.Router()
const User = require('../models/user')

// Route to create an account
router.post('/api/user', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.send({ success: 'Account created' })
  } catch (e) {
    if (e.code === 11000) {
      res.status(403).send({ error: 'An account with that email already exists' })
      return
    }
    res.status(500).send(e)
  }
})

// Route to sign in
router.post('/api/user/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.generateAuthToken()
    res.send({ user, token })
  } catch (e) {
    res.status(403).send()
  }
})

module.exports = router