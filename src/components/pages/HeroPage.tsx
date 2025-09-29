import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const HeroPage: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-32 right-8 w-24 h-24 bg-indigo-500 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
          JD
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
          John <span className="text-blue-600">Developer</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-2 font-light">Full Stack Developer</p>
        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
          Passionate about creating beautiful, functional web experiences that make a difference.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </a>
          <a
            href="mailto:john@example.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
          </a>
        </div>

        {/* CTA Button */}
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium flex items-center mx-auto group">
          View My Work
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default HeroPage;