import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with authentication, payments, and admin tools.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Real-time task manager with team boards and drag-n-drop UI.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    tags: ['React', 'Socket.io', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Mobile Weather App',
    description: 'Forecasting app with API maps, alerts, and smooth mobile UX.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
    tags: ['React Native', 'API Integration', 'Redux', 'TypeScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const Projects = () => {
  return (
    <section className="py-32 relative bg-gray-900" style={{ minHeight: `${projects.length * 700}px` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 mb-6">
          Sticky Overlap Card Showcase
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Explore my projects with a sticky overlap scroll effect and glassmorphism design ✨
        </p>
      </div>

      <div className="relative mt-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
            className={`
              relative w-full max-w-4xl 
              bg-gray-900/40 backdrop-blur-lg border border-gray-700/50 
              shadow-2xl rounded-2xl overflow-hidden 
              transition-all duration-500 ease-out
              hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
              hover:-translate-y-2
              sticky
            `}
            style={{
              top: '100px',
              zIndex: index + 1,
              minHeight: '600px',
              marginBottom: '100px',
            }}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
            </div>
            <div className="p-6 sm:p-8 relative">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 border border-blue-500/30 text-blue-300 px-3 py-1 text-xs sm:text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-6 text-sm sm:text-base">
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
