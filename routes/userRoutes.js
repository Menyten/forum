const express = require('express')
const router = new express.Router()
const User = require('../models/user')

router.post('/api/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.send('Account created')
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router