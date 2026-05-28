const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

router.get('/users', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ msg: 'Access denied' });
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});
module.exports = router;