const mongoose = require('mongoose')

const connectToDb = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/forum', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log('Connected to DB');
}

module.exports = connectToDb