import React from 'react';

export const TemplateRenderer = ({ data }) => {
  const { template, personalInfo, education, skills, languages, experience, projects, certifications, accomplishments } = data;

  const themes = {
    Classic: 'font-serif bg-white text-gray-900 p-8',
    IT: 'font-mono bg-slate-900 text-emerald-400 p-8 border-t-4 border-emerald-500',
    Business: 'font-sans bg-gray-50 text-slate-800 p-8 border-l-8 border-blue-900',
    Law: 'font-serif bg-stone-100 text-neutral-900 p-10 border-double border-4 border-stone-400',
    Medical: 'font-sans bg-white text-cyan-900 p-8 border-t-4 border-cyan-500'
  };

  return (
    <div id="resume-preview" className={${themes[template] || themes.Classic} max-w-4xl mx-auto shadow-lg min-h-[11in]}>
      {/* Header Section */}
      <div className="flex items-center gap-6 border-b pb-4 mb-6">
        {personalInfo?.profilePic && (
          <img src={personalInfo.profilePic} alt="Profile" className="w-24 h-24 rounded-full object-cover border" />
        )}
        <div>
          <h1 className="text-3xl font-bold uppercase tracking-wide">{personalInfo?.name || 'Your Name'}</h1>
          <p className="text-sm">{personalInfo?.phone} | {personalInfo?.email}</p>
        </div>
      </div>

      {/* Profile Bio */}
      <div className="mb-6">
        <h2 className="text-xl font-bold uppercase mb-2 border-b">About Me</h2>
        <p className="text-sm">{personalInfo?.about}</p>
      </div>

      {/* Two Column Layout Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Side: Skills & Langs */}
        <div className="col-span-1 border-r pr-4">
          <h3 className="font-bold uppercase border-b mb-2">Skills</h3>
          <ul className="text-sm space-y-1 mb-4">
            {skills?.map((s, i) => (
              <li key={i} className="flex justify-between font-medium">
                <span>{s.name}</span>
                <span className="text-xs uppercase opacity-75">({s.proficiency})</span>
              </li>
            ))}
          </ul>

          <h3 className="font-bold uppercase border-b mb-2">Languages</h3>
          <ul className="text-sm space-y-1">
            {languages?.map((l, i) => (
              <li key={i} className="text-xs">
                <span className="font-bold">{l.name}:</span> {[l.read && 'Read', l.write && 'Write', l.speak && 'Speak'].filter(Boolean).join(', ')}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Professional Experience timeline */}
        <div className="col-span-2 space-y-4">
          <div>
            <h3 className="font-bold uppercase border-b mb-2">Experience</h3>
            {experience?.map((exp, i) => (
              <div key={i} className="mb-2">
                <h4 className="font-bold text-sm">{exp.role} - {exp.company}</h4>
                <p className="text-xs italic">{exp.duration}</p>
                <p className="text-xs mt-1">{exp.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-bold uppercase border-b mb-2">Education</h3>
            {education?.map((edu, i) => (
              <div key={i} className="text-xs mb-1">
                <span className="font-bold">{req.degree}</span> from {edu.school} ({edu.year})
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};