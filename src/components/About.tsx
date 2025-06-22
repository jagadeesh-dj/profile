import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS',
    'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'Tailwind CSS', 'Next.js'
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      school: 'Stanford University',
      year: '2020 - 2022',
      location: 'Stanford, CA'
    },
    {
      degree: 'Bachelor of Software Engineering',
      school: 'University of California, Berkeley',
      year: '2016 - 2020',
      location: 'Berkeley, CA'
    }
  ];

  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechFlow Solutions',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and AWS. Mentoring junior developers and architecting cloud solutions.'
    },
    {
      role: 'Software Engineer',
      company: 'StartupHub Inc.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality products.'
    },
    {
      role: 'Frontend Developer Intern',
      company: 'InnovateTech',
      period: '2019 - 2020',
      description: 'Built responsive web interfaces and learned industry best practices. Contributed to open-source projects and participated in code reviews.'
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.05),transparent_25%),radial-gradient(circle_at_70%_50%,rgba(255,100,255,0.05),transparent_25%)]"></div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 4 years of experience creating 
            innovative digital solutions. I love turning complex problems into simple, 
            beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 h-fit border border-gray-800">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-200">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-lg font-semibold text-slate-800">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <div className="flex items-center text-slate-600 text-sm mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{edu.year}</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-lg p-3 text-center text-slate-700 font-medium hover:from-blue-100 hover:to-teal-100 transition-all duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div> */}
          </div>


          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800">{exp.role}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                  {index < experience.length - 1 && (
                    <div className="h-px bg-slate-200 mt-8"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;