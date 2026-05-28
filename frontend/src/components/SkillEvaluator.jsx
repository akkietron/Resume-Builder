import React from 'react';

const SkillEvaluator = ({ skills, setSkills }) => {
  const addSkillLine = () => {
    setSkills([...skills, { name: '', proficiency: 'low' }]);
  };

  const updateSkill = (index, field, value) => {
    const updated = [...skills];
    updated[index][field] = value;
    setSkills(updated);
  };

  const renderBoxes = (level) => {
    let activeBoxes = level === 'low' ? 3 : level === 'medium' ? 4 : 3;
    let colorClass = level === 'low' ? 'bg-red-500' : level === 'medium' ? 'bg-yellow-500' : 'bg-green-500';
    
    return Array.from({ length: 10 }).map((_, i) => {
      const isFilled =
        (level === 'low' && i < 3) ||
        (level === 'medium' && i >= 3 && i < 7) ||
        (level === 'high' && i >= 7);
      return (
        <div key={i} className={`h-6 w-3 border border-gray-300 rounded-sm ${isFilled ? colorClass : 'bg-gray-100'}`} />
      );
    });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-700">Skills</h3>
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-wrap items-center gap-4 p-2 bg-gray-50 rounded">
          <input
            type="text"
            placeholder="Skill Name"
            value={skill.name}
            onChange={(e) => updateSkill(index, 'name', e.target.value)}
            className="p-2 border rounded max-w-xs"
          />
          <select
            value={skill.proficiency}
            onChange={(e) => updateSkill(index, 'proficiency', e.target.value)}
            className="p-2 border rounded"
          >
            <option value="low">Low (First 3 boxes)</option>
            <option value="medium">Medium (Middle 4 boxes)</option>
            <option value="high">High (Last 3 boxes)</option>
          </select>
          <div className="flex gap-1">{renderBoxes(skill.proficiency)}</div>
        </div>
      ))}
      <button type="button" onClick={addSkillLine} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
        + Add Skill
      </button>
    </div>
  );
};
export default SkillEvaluator;