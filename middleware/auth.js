const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log('THE FUCKING TOOKKEKEKEKEKEN', token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('DECODED ID', decoded._id)
    const user = await User.findOne({ _id: decoded._id, 'tokens': token });
    console.log('no user?', user)
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(403).send({ error: 'Not logged in' });
  }
}

module.exports = auth;