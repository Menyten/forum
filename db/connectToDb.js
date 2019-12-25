const mongoose = require('mongoose')

const connectToDb = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  console.log('Connected to DB');
}

module.exports = connectToDb