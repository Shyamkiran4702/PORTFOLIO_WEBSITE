import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <a href="#home" className="text-2xl font-bold text-white mb-4 inline-block">
              Shyam <span className="text-blue-400">Kiran</span>
            </a>
            <p className="text-gray-400 leading-relaxed">
              Crafting beautiful and intuitive user interfaces with cutting-edge technologies.
              Let's create something amazing together.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#resume" className="text-gray-400 hover:text-blue-400 transition-colors">Resume</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Services 
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Frontend Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Responsive Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Web Application</a>
              </li>
            </ul>
          </div> */}
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect To Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Shyamkiran4702" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/shyam-kiran-040702sk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
             </a>
              {/* <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 flex items-center justify-center">
            © {currentYear} Shyam Kiran. All rights reserved. Made with <Heart size={16} className="mx-1 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;