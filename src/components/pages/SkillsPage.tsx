import React from 'react';
import { Code, Database, Smartphone, Cloud, Palette, Wrench } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'bg-blue-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 85 },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'bg-green-500',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 78 },
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'bg-purple-500',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS', level: 70 },
        { name: 'Android', level: 72 },
      ]
    },
    {
      title: 'Cloud',
      icon: Cloud,
      color: 'bg-orange-500',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 82 },
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'bg-pink-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX', level: 88 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Prototyping', level: 82 },
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'bg-indigo-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'VS Code', level: 92 },
        { name: 'Webpack', level: 78 },
        { name: 'Jest', level: 85 },
      ]
    }
  ];

  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-slate-100 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className={`p-3 ${category.color} rounded-lg mr-3`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Currently Learning</h3>
          <div className="flex flex-wrap gap-3">
            {['Rust', 'WebAssembly', 'Three.js', 'Blockchain', 'AI/ML'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;