require('dotenv').config()
const express = require('express')
const app = express()
const connectToDb = require('./db/connectToDb')
const userRoutes = require('./routes/userRoutes')
const PORT = process.env.PORT || 3000

const startServer = async () => {
  let error = null

  // Function call to connect to db
  await connectToDb().catch(err => {
    console.log('Error connecting to DB')
    error = err
  })

  // if error stop server connection
  if (error) { return }

  // express built in body parser
  app.use(express.json())
  // routes for a user
  app.use(userRoutes)
  // route to check if server is up and running
  app.get('/', (req, res) => res.send('Ok'))

  app.listen(PORT, () => console.log(`listening on port ${PORT}`))
}

startServer()


