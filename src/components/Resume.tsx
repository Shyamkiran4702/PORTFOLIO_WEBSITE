import React from 'react';
import { FileText, Download, Briefcase, GraduationCap, BookOpen, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block">
            <span className="text-blue-600 dark:text-blue-400 font-medium tracking-wider text-sm uppercase">Resume</span>
            <div className="h-1 w-10 bg-blue-600 dark:bg-blue-400 mx-auto mt-1"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional experience, education, and career milestones that have shaped
            my development as a Software developer.
          </p>
          
          <a 
            href="https://i.ibb.co/PZZMr9jh/Resume-Shyamkiran.jpg" 
            className="inline-flex items-center py-3 px-6 mt-6 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-all shadow-md hover:shadow-lg"
          >
            <Download size={18} className="mr-2" />
            Download Full Resume
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h3>
            </div>
            
            <div className="relative border-l-2 border-blue-200 dark:border-blue-900 pl-8 pb-8">
              <div className="absolute w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 left-[-9px] top-0"></div>
              <div className="mb-10">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Software Developer</h4>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                    2025 jan - Present
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-3">MResult Technologies Pvt Ltd. | Hyderabad, Hyd</p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>I contributed to the building of a data mart at ICICI, which    improved access to data for reporting reasons.</li>
                  <li>I myself resposible for the data submitted to RBI for different   requirements and regulatory submissions across ICICI BANK .</li>
                  <li>Using improved SQL, we streamlined a vital batch processing   system, cutting processing time by 50%.</li>
                  <li>Interacted with senior developers and also Part of the code   reviews</li>
                  <li>Optimized code performance, reducing load time by 35%</li>
                </ul>
              </div>
            </div>  
          </div>
          
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-full mr-4">
                <GraduationCap className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-teal-200 dark:border-teal-900 pl-8 mb-12">
              <div className="absolute w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 left-[-9px] top-0"></div>
              <div className="mb-10">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">B.Tech in Information Technology</h4>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm font-medium rounded-full">
                    2019 - 2023
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-3">SRKR Engineering College | Bhimavaram, AP</p>
                <p className="text-gray-600 dark:text-gray-300">
                 Graduated with honors in Information Technology. Active member of the CSI Club and Organized
                  multiple Events.
                  <div>
                    Thesis: "Emotion Based Music Player Using Deep Learning"</div>
                </p>
              </div>
              
              <div className="absolute w-4 h-4 rounded-full bg-teal-600 dark:bg-teal-400 left-[-9px] top-[67%]"></div>
              <div>
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Inter in MPC</h4>
                  <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm font-medium rounded-full">
                    2017 - 2019
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-3">Sri Chaitanya junior College | Guntur, </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Graduated High school with a CGPA of 8.44 Average.
                </p>
              </div>
            </div>
            
            {/* Publications Section */}
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full mr-4">
                <BookOpen className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Journal Publications</h3>
            </div>
            
            <div className="relative border-l-2 border-purple-200 dark:border-purple-900 pl-8 mb-12">
              <div className="absolute w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400 left-[-9px] top-0"></div>
              <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Research Publication</h4>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium rounded-full">
                    2023
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Published research work in the Journal of Emerging Technologies and Innovative Research
                </p>
                <a 
                  href="https://www.jetir.org/papers/JETIR2304670.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <FileText size={16} className="mr-2" />
                  View Publication
                </a>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full mr-4">
                <FileText className="text-amber-600 dark:text-amber-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Internship & Certifications</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">AWS Fundamentals</h4>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">2022</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Internship in AWS Fundamentals provided by HMIE Engineering Services and S.V.IT solutions.</p>
                <a 
                  href="https://www.linkedin.com/in/shyam-kiran-040702sk/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:underline"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </a>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Introduction To Internet of Things</h4>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">2022</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Online certification of Introduction to Internet of Things provided by NPTEL online learning</p>
                <a 
                  href="https://www.linkedin.com/in/shyam-kiran-040702sk/details/certifications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:underline"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;