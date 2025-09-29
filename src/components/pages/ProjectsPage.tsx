import React from 'react';
import { ExternalLink, Github, Star, Users, Code } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      stats: { stars: 124, forks: 32 }
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      stats: { stars: 89, forks: 24 }
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Data visualization dashboard for weather patterns and trends',
      image: 'https://images.pexels.com/photos/1421903/pexels-photo-1421903.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      stats: { stars: 67, forks: 18 }
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-blue-50 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center">
                      <Code className="w-4 h-4 mr-1" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;