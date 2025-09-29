import React from 'react';
import { MapPin, Calendar, Coffee, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const highlights = [
    { icon: Calendar, label: '5+ Years Experience', color: 'text-blue-600' },
    { icon: Coffee, label: '500+ Cups of Coffee', color: 'text-amber-600' },
    { icon: Award, label: '50+ Projects Completed', color: 'text-green-600' },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-slate-50 to-blue-50 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-gray-600">San Francisco, CA</span>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            I'm a passionate full-stack developer with over 5 years of experience creating 
            digital solutions that bridge the gap between design and functionality. My journey 
            in tech started with a curiosity about how things work, and it has evolved into 
            a love for crafting clean, efficient code.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            When I'm not coding, you'll find me exploring new technologies, contributing to 
            open-source projects, or enjoying a good cup of coffee while reading about the 
            latest developments in web development.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-2`} />
                <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">My Philosophy</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Clean, maintainable code is just as important as functionality</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">User experience should be at the heart of every decision</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <p className="text-gray-600">Continuous learning and adaptation drive innovation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;