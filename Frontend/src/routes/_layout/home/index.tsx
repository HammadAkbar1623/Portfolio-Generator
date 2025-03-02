import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiSuitcase } from "react-icons/gi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const Route = createFileRoute("/_layout/home/")({
  component: RouteComponent,
});

const colorThemes = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-500",
    button: "bg-blue-600 hover:bg-blue-700",
    skillBg: "bg-blue-100",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-500",
    button: "bg-green-600 hover:bg-green-700",
    skillBg: "bg-green-100",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-500",
    button: "bg-purple-600 hover:bg-purple-700",
    skillBg: "bg-purple-100",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-700",
    border: "border-red-500",
    button: "bg-red-600 hover:bg-red-700",
    skillBg: "bg-red-100",
  },
};

function RouteComponent() {
  const [portfolio, setPortfolio] = useState({
    name: "",
    jobTitle: "",
    bio: "",
    skills: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    projects: [{ title: "", description: "", link: "" }],
    education: [{ institution: "", degree: "", startDate: "", endDate: "" }],
  });

  const [theme, setTheme] = useState<keyof typeof colorThemes>("blue");
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const parts = name.split('.');
    
    if (parts[0] === 'projects' || parts[0] === 'education') {
      const arrayName = parts[0];
      const index = parseInt(parts[1]);
      const field = parts[2];
      
      setPortfolio(prev => ({
        ...prev,
        [arrayName]: prev[arrayName].map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        )
      }));
    } else {
      setPortfolio(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addProject = () => {
    setPortfolio(prev => ({
      ...prev,
      projects: [...prev.projects, { title: "", description: "", link: "" }]
    }));
  };

  const removeProject = (index: number) => {
    setPortfolio(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setPortfolio(prev => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", startDate: "", endDate: "" }]
    }));
  };

  const removeEducation = (index: number) => {
    setPortfolio(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };


  
  

  return (

    <>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Portfolio Builder
            </span>
          </h1>

          {/* Color Picker */}
          <div className="flex justify-center space-x-3 mb-10">
            {Object.entries(colorThemes).map(([color, config]) => (
              <button
                key={color}
                onClick={() => setTheme(color as keyof typeof colorThemes)}
                className={`w-10 h-10 rounded-full ${config.button} transition-transform hover:scale-110 border-2 border-white shadow-lg`}
                title={color.charAt(0).toUpperCase() + color.slice(1)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side: Form */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Enter Your Details
              </h2>
              <form className="space-y-6">
                {[
                  { label: "Full Name", name: "name", icon: <CgProfile /> },
                  { label: "Job Title", name: "jobTitle", icon: <GiSuitcase /> },
                  { label: "Email", name: "email", icon: <MdMarkEmailUnread /> },
                  { label: "Phone", name: "phone", icon: <FaPhoneAlt /> },
                  { label: "LinkedIn", name: "linkedin", icon: <FaLinkedin /> },
                  { label: "GitHub", name: "github", icon: <FaGithub /> },
                ].map(({ label, name, icon }) => (
                  <div key={name} className="relative">
                    <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">{label}</label>
                    <div className="flex items-center gap-3">
                      <span className="text-xl absolute left-3 top-13 transform -translate-y-1/2 text-gray-400">{icon}</span>
                      <input
                        type="text"
                        name={name}
                        value={portfolio[name as keyof typeof portfolio]}
                        onChange={handleInputChange}
                        placeholder={label}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                ))}

                {/* Profile Photo Upload */}
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">Profile Photo</label>
                  <div className="relative cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-full px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl group-hover:border-blue-500 transition-colors">
                      <div className="flex items-center justify-center gap-2 text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">Upload Profile Photo</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">Bio</label>
                  <textarea
                    name="bio"
                    value={portfolio.bio}
                    onChange={handleInputChange}
                    placeholder="Tell us about yourself..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Skills */}
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">Skills</label>
                  <input
                    type="text"
                    name="skills"
                    value={portfolio.skills}
                    onChange={handleInputChange}
                    placeholder="Comma separated skills (e.g., React, JavaScript)"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                 {/* Projects Section */}
             <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Projects</h3>
                {portfolio.projects.map((project, index) => (
                  <div key={index} className="space-y-3 border-l-2 border-blue-200 pl-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-700">Project {index + 1}</h4>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeProject(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      name={`projects.${index}.title`}
                      value={project.title}
                      onChange={handleInputChange}
                      placeholder="Project Title"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                    />
                    <textarea
                      name={`projects.${index}.description`}
                      value={project.description}
                      onChange={handleInputChange}
                      placeholder="Project Description"
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                    />
                    <input
                      type="text"
                      name={`projects.${index}.link`}
                      value={project.link}
                      onChange={handleInputChange}
                      placeholder="Project Link"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addProject}
                  className="w-full py-2 text-sm text-blue-600 hover:text-blue-700 font-medium rounded-xl border border-dashed border-blue-200 hover:border-blue-300"
                >
                  + Add Another Project
                </button>
              </div>

              {/* Education Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800">Education</h3>
                {portfolio.education.map((edu, index) => (
                  <div key={index} className="space-y-3 border-l-2 border-green-200 pl-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-700">Education {index + 1}</h4>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeEducation(index)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      name={`education.${index}.institution`}
                      value={edu.institution}
                      onChange={handleInputChange}
                      placeholder="Institution"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                    />
                    <input
                      type="text"
                      name={`education.${index}.degree`}
                      value={edu.degree}
                      onChange={handleInputChange}
                      placeholder="Degree"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                    />
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name={`education.${index}.startDate`}
                        value={edu.startDate}
                        onChange={handleInputChange}
                        placeholder="Start Date (e.g., 2018)"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                      />
                      <input
                        type="text"
                        name={`education.${index}.endDate`}
                        value={edu.endDate}
                        onChange={handleInputChange}
                        placeholder="End Date (e.g., 2022)"
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addEducation}
                  className="w-full py-2 text-sm text-green-600 hover:text-green-700 font-medium rounded-xl border border-dashed border-green-200 hover:border-green-300"
                >
                  + Add Another Education
                </button>
              </div>


              </form>
            </div>

            
            {/* Right Side: Preview */}

              <div className={`p-8 rounded-3xl shadow-xl ${colorThemes[theme].bg} transition-colors duration-300`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Live Preview
                </h2>

             

                <div className="space-y-8">
                  {/* Profile Section */}
                  <div className="flex flex-col items-center text-center">
                    {previewPhoto && (
                      <img
                        src={previewPhoto}
                        alt="Profile"
                        className={`w-32 h-32 rounded-full object-cover border-4 ${colorThemes[theme].border} shadow-lg mb-6`}
                      />
                    )}
                    <h3 className={`text-3xl font-bold ${colorThemes[theme].text} mb-2`}>
                      {portfolio.name || ""}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                      {portfolio.jobTitle || ""}
                    </p>
                  </div>

                  {/* Bio */}
                  {portfolio.bio && (
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {portfolio.bio}
                      </p>
                    </div>
                  )}

                  {/* Skills */}
                  {portfolio.skills && (
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Skills & Expertise</h4>
                      <div className="flex flex-wrap gap-3">
                        {portfolio.skills.split(",").map((skill, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${colorThemes[theme].skillBg} ${colorThemes[theme].text}`}
                          >
                            {skill.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact Info */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h4>
                    <div className="space-y-3 text-gray-700">
                      {portfolio.email && <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        {portfolio.email}
                      </p>}
                      {portfolio.phone && <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {portfolio.phone}
                      </p>}
                      {portfolio.linkedin && <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <a href={portfolio.linkedin} target="_blank" className="hover:underline">
                          {portfolio.linkedin}
                        </a>
                      </p>}
                      {portfolio.github && <p className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <a href={portfolio.github} target="_blank" className="hover:underline">
                          {portfolio.github}
                        </a>
                      </p>}
                    </div>
                  </div>
                </div>

                 {/* Projects Preview */}
            {portfolio.projects.some(p => p.title || p.description || p.link) && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Projects</h4>
                <div className="space-y-6">
                  {portfolio.projects.map((project, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${colorThemes[theme].bg}`} />
                        <h5 className={`font-semibold ${colorThemes[theme].text}`}>
                          {project.title}
                        </h5>
                      </div>
                      {project.description && (
                        <p className="text-gray-600 text-sm">{project.description}</p>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Preview */}
            {portfolio.education.some(e => e.institution || e.degree) && (
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Education</h4>
                <div className="space-y-6">
                  {portfolio.education.map((edu, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${colorThemes[theme].bg}`} />
                        <h5 className={`font-semibold ${colorThemes[theme].text}`}>
                          {edu.degree}
                        </h5>
                      </div>
                      <p className="text-gray-600 text-sm">{edu.institution}</p>
                      {(edu.startDate || edu.endDate) && (
                        <p className="text-gray-500 text-xs">
                          {edu.startDate} - {edu.endDate}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
