import React, { useState } from 'react';
import SkillEvaluator from '../components/SkillEvaluator';
import { TemplateRenderer } from '../components/ResumeTemplates';

const Builder = () => {
  const [template, setTemplate] = useState('Classic');
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', about: '', profilePic: '' });
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([{ name: '', read: false, write: false, speak: false }]);
  const [education, setEducation] = useState([{ school: '', degree: '', year: '' }]);
  const [experience, setExperience] = useState([{ company: '', role: '', duration: '', desc: '' }]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setPersonalInfo({ ...personalInfo, profilePic: reader.result });
    if (file) reader.readAsDataURL(file);
  };

  const exportPDF = () => {
    window.print(); // Easy native conversion using utility styling print:hidden layers
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Editor Panel Form Controls */}
      <div className="bg-white p-6 rounded-lg shadow space-y-6 max-h-screen overflow-y-auto print:hidden">
        <h2 className="text-2xl font-bold">Configure Resume</h2>
        
        <div>
          <label className="block font-medium mb-1">Select Domain Template</label>
          <select value={template} onChange={(e) => setTemplate(e.target.value)} className="w-full p-2 border rounded">
            {['Classic', 'IT', 'Business', 'Law', 'Medical'].map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Bio Details */}
        <div className="space-y-3">
          <input type="text" placeholder="Full Name" onChange={(e) => setPersonalInfo({...personalInfo, name: e.target.value})} className="w-full p-2 border rounded"/>
          <input type="text" placeholder="Email" onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})} className="w-full p-2 border rounded"/>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full text-sm text-gray-500" />
          <textarea placeholder="About Profile Description" onChange={(e) => setPersonalInfo({...personalInfo, about: e.target.value})} className="w-full p-2 border rounded"/>
        </div>

        {/* Dynamic Multi-row Components integration */}
        <SkillEvaluator skills={skills} setSkills={setSkills} />

        <button onClick={exportPDF} className="w-full py-3 bg-green-600 text-white rounded font-bold hover:bg-green-700 transition">
          Export Document & Share
        </button>
      </div>

      {/* Render Blueprint Frame Live View Side */}
      <div className="bg-white p-4 rounded-lg shadow overflow-y-auto max-h-screen">
        <TemplateRenderer data={{ template, personalInfo, skills, languages, education, experience }} />
      </div>
    </div>
  );
};
export default Builder;