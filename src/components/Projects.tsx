import React from 'react';
import { ExternalLink, Github, Zap, Shield, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Zap
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      tags: ['React', 'Socket.io', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Shield
    },
    {
      title: 'Mobile Weather App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts. Built with modern web technologies.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      tags: ['React Native', 'API Integration', 'Redux', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      icon: Smartphone
    }
  ];

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.05),transparent_25%),radial-gradient(circle_at_70%_50%,rgba(255,100,255,0.05),transparent_25%)]"></div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-slate-600 hover:text-slate-700 font-medium transition-colors duration-200"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;