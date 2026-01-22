import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Award, BookOpen, Briefcase, Terminal, Cpu, Users, Zap, Menu, X } from 'lucide-react';

// --- MOCK DATA (Edit these to customize your portfolio) ---

const personalInfo = {
  name: "Alex Developer",
  title: "Full Stack Engineer",
  about: "I build accessible, pixel-perfect, and performant web experiences. Passionate about merging clean code with intuitive design.",
  email: "alex@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  // Placeholder image - replace with your actual photo URL
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
};

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for managing online store inventory, orders, and analytics. Built with real-time data visualization.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "An application that leverages OpenAI's API to generate creative images from text prompts. Features a community gallery.",
    tags: ["Next.js", "OpenAI API", "TypeScript"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task manager allowing teams to organize workflows with drag-and-drop functionality.",
    tags: ["Vue.js", "Firebase", "Pinia"],
    githubLink: "#",
    demoLink: "#"
  }
];

const experienceData = [
  {
    type: "Internship",
    role: "Frontend Developer Intern",
    company: "Tech Solutions Inc.",
    date: "June 2024 - Aug 2024",
    description: "Optimized landing page performance by 30% and implemented new React components for the design system."
  },
  {
    type: "Competition",
    role: "1st Place Winner",
    company: "Global Hackathon 2023",
    date: "Nov 2023",
    description: "Developed a sustainability tracking app in 48 hours using Flutter and Firebase."
  },
  {
    type: "Course",
    role: "Advanced React Patterns",
    company: "Frontend Masters",
    date: "Jan 2024",
    description: "Deep dive into compound components, render props, and state reducer patterns."
  }
];

const skills = {
  technical: [
    { name: "JavaScript/ES6+", icon: <Terminal size={18} /> },
    { name: "React & Next.js", icon: <Code2 size={18} /> },
    { name: "Node.js", icon: <Cpu size={18} /> },
    { name: "Python", icon: <Terminal size={18} /> },
    { name: "PostgreSQL", icon: <BookOpen size={18} /> },
    { name: "Git & GitHub", icon: <Code2 size={18} /> },
  ],
  soft: [
    { name: "Problem Solving", icon: <Zap size={18} /> },
    { name: "Team Leadership", icon: <Users size={18} /> },
    { name: "Effective Communication", icon: <Users size={18} /> },
    { name: "Agile Methodology", icon: <Briefcase size={18} /> },
  ]
};

// --- COMPONENTS ---

const Navbar = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'About Me', id: 'about' },
    { name: 'Skills', id: 'skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`${
                  activeSection === link.id
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-600 hover:text-blue-500'
                } transition-colors duration-200 text-sm uppercase tracking-wider`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ id }) => {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Info */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl text-blue-600 font-medium tracking-wide">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <h3 className="text-2xl md:text-3xl text-gray-600 font-bold">
                {personalInfo.title}
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              {personalInfo.about}
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-5 pt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-gray-800 hover:text-black border border-gray-100">
                <Github size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-blue-600 hover:text-blue-700 border border-gray-100">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-red-500 hover:text-red-600 border border-gray-100">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: Photo */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative circle behind */}
              <div className="absolute inset-0 bg-blue-100 rounded-full transform translate-x-4 translate-y-4"></div>
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name} 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Projects = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
              {/* Project Content */}
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <Code2 size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links Footer */}
              <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center">
                <a 
                  href={project.githubLink} 
                  className="flex items-center text-sm font-semibold text-gray-700 hover:text-black transition-colors"
                >
                  <Github size={16} className="mr-2" /> Code
                </a>
                <a 
                  href={project.demoLink} 
                  className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Live Demo <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            My journey through internships, competitions, and continuous learning.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-6 border-l-4 border-blue-500 hover:translate-x-2 transition-transform duration-300">
              <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  {item.type === 'Internship' && <Briefcase size={20} />}
                  {item.type === 'Competition' && <Award size={20} />}
                  {item.type === 'Course' && <BookOpen size={20} />}
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block">
                    {item.date}
                  </span>
                </div>
                <h4 className="text-lg text-gray-700 font-medium mb-2">{item.company}</h4>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-3">
                  <span className="text-xs font-bold tracking-wider text-gray-400 uppercase">{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Technical Skills */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.technical.map((skill, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                  <span className="text-gray-600 mr-3">{skill.icon}</span>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.soft.map((skill, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all">
                  <span className="text-gray-600 mr-3">{skill.icon}</span>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Let's Build Something Amazing</h2>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="#" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
        <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
        <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={24} /></a>
      </div>
      <p className="text-gray-500">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- MAIN APP ---

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection Observer to update active navigation link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'skills'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Hero id="hero" />
        <Projects id="projects" />
        <About id="about" />
        <Skills id="skills" />
      </main>
      <Footer />
    </div>
  );
};

export default App;