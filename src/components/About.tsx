import React from 'react';
import { Award, BookOpen, Clock, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image column */}
          <div className="w-full md:w-5/12 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-105 duration-500">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About me" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-white text-lg font-medium">Building robust database solutions</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200/50 dark:bg-blue-900/30 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-200/50 dark:bg-teal-900/30 rounded-lg -z-10"></div>
          </div>
          
          {/* Content column */}
          <div className="w-full md:w-7/12">
            <div className="mb-2 inline-block">
              <span className="text-blue-600 dark:text-blue-400 font-medium tracking-wider text-sm uppercase">About Me</span>
              <div className="h-1 w-10 bg-blue-600 dark:bg-blue-400 mt-1"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              I'm a passionate <span className="text-blue-600 dark:text-blue-400">Software Developer</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With 1 year of experience in software development, I specialize in designing and implementing 
              database solutions using SQL. My expertise includes writing efficient queries, stored procedures, 
              and maintaining data integrity in large-scale applications.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm passionate about optimizing database performance and creating maintainable code. 
              My approach combines technical expertise with a strong understanding of business requirements 
              to deliver scalable solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Award className="mx-auto mb-3 text-blue-600 dark:text-blue-400" size={28} />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1+</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <BookOpen className="mx-auto mb-3 text-teal-600 dark:text-teal-400" size={28} />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">5+</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Clock className="mx-auto mb-3 text-purple-600 dark:text-purple-400" size={28} />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">1k+</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Hours Coded</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Coffee className="mx-auto mb-3 text-amber-600 dark:text-amber-400" size={28} />
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1">500+</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Cups of Coffee</p>
              </div>
            </div>
            
            <a 
              href="#resume" 
              className="inline-flex items-center py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-all shadow-md hover:shadow-lg"
            >
           <center> Download Resume </center>   
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;