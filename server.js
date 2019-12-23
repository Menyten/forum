const express = require('express')
const connectToDb = require('./db/connectToDb')
const app = express()
const userRoutes = require('./routes/userRoutes')

// Function to connect to db
connectToDb()
// if env port exists us it else use 3000
const PORT = process.env.PORT || 3000
// express built in body parser
app.use(express.json())
// routes for a user
app.use(userRoutes)
// route to check if aerver is up and running
app.get('/', (req, res) => res.send('Ok'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))