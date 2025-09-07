import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-white dark:from-gray-900/80 dark:to-gray-950 z-0"></div>
      
      {/* Animated background shapes */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 bg-blue-600/20 dark:bg-blue-400/20 rounded-full blur animate-pulse"></div>
            <img 
             src="https://i.ibb.co/pB2ScYWd/20230330174011-IMG-7579-01.jpg" alt="20230330174011-IMG-7579-01" border="5"
              alt="Profile" 
              className="w-32 h-32 object-cover rounded-full border-4 border-white dark:border-gray-800 relative z-10"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="relative">
              <span className="relative z-10">Shyam Kiran</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200 dark:bg-blue-900/50 -z-10 transform skew-x-3"></span>
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
              Software Developer
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed text-lg">
            I specialize in building robust database solutions and backend systems with SQL.
            With 1 year of experience in software development, I focus on creating efficient and scalable applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <a 
              href="#contact" 
              className="py-3 px-8 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center"
            >
              Let's Talk
              <ArrowRight size={18} className="ml-2 animate-pulse" />
            </a>
            <a 
              href="#projects" 
              className="py-3 px-8 rounded-full border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-gray-800 dark:text-gray-200 font-medium transition-all flex items-center justify-center"
            >
              View My Work
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Shyamkiran4702" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shyam-kiran-040702sk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;