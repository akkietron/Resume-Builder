const expressResume = require('express');
const resumeRouter = expressResume.Router();
const authMiddleware = require('../middleware/auth');
const Resume = require('../models/Resume');

resumeRouter.post('/', authMiddleware, async (req, res) => {
  try {
    const newResume = new Resume({ ...req.body, user: req.user.id });
    const resume = await newResume.save();
    res.json(resume);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

resumeRouter.get('/:id', async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ msg: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});
module.exports = resumeRouter;