import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">AM</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Jagadeesh</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-4">Software Engineer</p>
        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
          Passionate about creating beautiful, functional web applications with modern technologies. 
          Specializing in React, Node.js, and cloud architecture.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </button>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-white hover:text-blue-400 transition-colors duration-200"
        >
          <ArrowDown className="h-8 w-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;