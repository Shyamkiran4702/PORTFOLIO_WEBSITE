import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('featured');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'Emotion Based Music Player Using Deep Learning',
      description: 'An innovative music player that uses deep learning to detect user emotions through facial expressions and recommends personalized music based on their emotional state.',
      image: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Python', 'Deep Learning', 'OpenCV', 'TensorFlow'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Shyamkiran4702/Emotion-Based-Music-Player',
      featured: true
    },
    {
      id: 2,
      title: 'BMI Calculator using Web Technologies',
      description: 'A web-based BMI (Body Mass Index) calculator that helps users track their health metrics with a user-friendly interface and personalized recommendations.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Shyamkiran4702/BMI-Calculator',
      featured: true
    }
  ];

  // Get unique tags for filter
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
      ? projects.filter(project => project.featured)
      : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="mb-2 inline-block">
            <span className="text-blue-600 dark:text-blue-400 font-medium tracking-wider text-sm uppercase">Portfolio</span>
            <div className="h-1 w-10 bg-blue-600 dark:bg-blue-400 mx-auto mt-1"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my recent work and see how I've developed innovative solutions using various technologies
            and programming concepts.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveFilter('featured')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'featured'
                ? 'bg-blue-600 dark:bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Featured
          </button>
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Github size={16} className="mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found with the selected filter.</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Shyamkiran4702"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-3 px-6 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 font-medium transition-colors"
          >
            <Github size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;