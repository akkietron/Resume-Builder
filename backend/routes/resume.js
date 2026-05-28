const mongoose = require('mongoose');
const ResumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  template: { type: String, required: true },
  personalInfo: {
    name: String, email: String, phone: String, about: String, profilePic: String
  },
  education: [{ school: String, degree: String, year: String }],
  skills: [{ name: String, proficiency: { type: String, enum: ['low', 'medium', 'high'] } }],
  languages: [{ name: String, read: Boolean, write: Boolean, speak: Boolean }],
  experience: [{ company: String, role: String, duration: String, desc: String }],
  projects: [{ title: String, technologies: String, desc: String }],
  certifications: [String],
  accomplishments: [String]
});
module.exports = mongoose.model('Resume', ResumeSchema);
