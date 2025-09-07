import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  const technicalSkills: Skill[] = [
    { name: "SQL", level: 90, color: "bg-blue-600 dark:bg-blue-500" },
    { name: "Database Design", level: 85, color: "bg-teal-500 dark:bg-teal-400" },
    { name: "Python", level: 80, color: "bg-yellow-500 dark:bg-yellow-400" },
    { name: "Power BI", level: 80, color: "bg-red-500 dark:bg-red-400" },
    { name: "Git", level: 75, color: "bg-orange-500 dark:bg-orange-400" },
    { name: "Problem Solving", level: 85, color: "bg-purple-500 dark:bg-purple-400" },
  ];
  
  const softSkills: string[] = [
    "Analytical Thinking",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Attention to Detail",
    "Documentation"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${technicalSkills[index].level}%`;
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block">
            <span className="text-blue-600 dark:text-blue-400 font-medium tracking-wider text-sm uppercase">My Skills</span>
            <div className="h-1 w-10 bg-blue-600 dark:bg-blue-400 mx-auto mt-1"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Expertise</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I've developed a strong foundation in database development and software engineering,
            with a focus on SQL and backend technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" ref={skillsRef}>
          {/* Technical Skills Column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`skill-progress-bar h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills & Tools Column */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Soft Skills</h3>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {softSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 shadow-sm transition-transform hover:scale-105 hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Tools & Platforms</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="SQL Server" className="w-12 h-12 mx-auto mb-3" />
                <p className="text-gray-800 dark:text-gray-200">SQL Server</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <img src="https://www.svgrepo.com/show/354200/postgresql.svg" alt="PostgreSQL" className="w-12 h-12 mx-auto mb-3" />
                <p className="text-gray-800 dark:text-gray-200">PostgreSQL</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12 mx-auto mb-3" />
                <p className="text-gray-800 dark:text-gray-200">Python</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12 mx-auto mb-3" />
                <p className="text-gray-800 dark:text-gray-200">Git</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="w-12 h-12 mx-auto mb-3" />
                <p className="text-gray-800 dark:text-gray-200">VS Code</p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-sm transition-transform hover:scale-105 hover:shadow-md">
                <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="Docker" className="w-12 h-12 mx-auto mb-3" />
                <p className="text-gray-800 dark:text-gray-200">Java</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;