import React, { useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, Award, BookOpen, 
  Brain, Eye, Database, Puzzle, MessageCircle, Briefcase, 
  Terminal, Cpu, Users, Zap, Menu, X, FileText, Activity, Layers, 
  GitGraph, Server, BarChart3, Network, BrainCircuit // ✅ تم إضافة BrainCircuit هنا لحل مشكلة الشاشة البيضاء
} from 'lucide-react';

// تأكد أن الصورة موجودة في هذا المسار
import myPhoto from './assets/my_photo.png';

// --- DATA ---

const personalInfo = {
  name: "Mohamed Khaled Saad",
  title: "AI Engineer",
  about: "I have a passion for building AI systems to solve realistic problems and boost work to make it easier and powerful. Specialized in Computer Vision and Deep Learning.",
  email: "mohamedkhaledsaadkamel@gmail.com",
  github: "https://github.com/MahamedKhaledSaad11",
  linkedin: "https://www.linkedin.com/in/moohhaammeed-khaled/",
  cvPath: "/Mohamed_Khaled.pdf",
  photo: myPhoto
};

const projects = [
  {
    id: 1,
    title: "Smart Entrance Gate",
    description: [
      'Built a multi-modal biometric access control system on Raspberry Pi, combining face recognition with liveness detection, fingerprint scanning, and RFID authentication.',
      'Designed a reliable embedded architecture, using Python-based monitoring and asynchronous communication with ESP32 microcontrollers to ensure stable, continuous operation.',
      'Delivered a full-stack management solution, featuring a real-time PyQt6 gate interface and a Django web dashboard for user management, device control, and access logs.'
    ],
    tags: ["Python", "Django", "Face Recognition", "OpenCV"],
    icon: <Eye size={24} />, 
    githubLink: "https://github.com/MahamedKhaledSaad11/Smart_Entrance_Gate",
    demoLink: "https://drive.google.com/file/d/1tJ5ZBLZ-BkIpypTGbgq1i48K2lNjAeiW/view?usp=sharing"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: [
      'Developed a full-stack Hospital Management System as both a web and desktop application to enhance communication between doctors and patients.',
      'Integrated dual platforms (web + desktop) increasing system flexibility by 60%.',
      'Enabled 100% access to patients’ medical history and prescriptions online.',
      'Reduced appointment booking time by 40% through automation.'
    ],
    tags: ["Html", "Css", "Javascript", "Bootstrap", "Django", "SQLite", "Python"],
    icon: <Activity size={24} />, 
    githubLink: "https://github.com/MahamedKhaledSaad11/hospital-management-system",
    demoLink: "https://mohamedkhaledsaad.pythonanywhere.com/"
  },
  {
    id: 3,
    title: "Machine Learning Automation",
    description: [
      'Developed a full-stack web application allowing users to upload datasets, perform feature engineering, and train complex machine learning models (Random Forest, SVM, etc.) without writing code.',
      'Integrated dynamic visualization tools for real-time exploratory data analysis (EDA), correlation heatmaps, and model performance comparison.',
      'Engineered a backend feature that automatically converts the user\'s visual workflow into downloadable, production-ready Python scripts.'
    ],
    tags: ["Html", "Css", "Javascript", "Flask", 'pandas', 'Scikit-Learn', "Numpy"],
    icon: <BrainCircuit size={24} />, // ✅ الآن ستعمل هذه الأيقونة لأننا استدعيناها
    githubLink: 'https://github.com/MahamedKhaledSaad11/Auto-ML',
    demoLink: "https://momosaad11.pythonanywhere.com/"
  }
];

const experienceData = [
  {
    type: "Course",
    role: "Artificial Intelligence Program",
    company: "Zewail University (Impact)",
    date: "July 2023 - October 2023",
    description: [
      "Introduction to Artificial intelligence and its Applications, Python Programming",
      "Overview of Machine learning, Deep learning and Neural Networks",
      "Explored Machine learning Models and their benefits in Multiple Industries"
    ]
  },
  {
    type: "National Technical Program",
    role: "HCIA - AI Trainee",
    company: "National Telecommunication Institute (NTI)",
    date: "June 2025", // تم تصحيح Jube إلى June
    description: [
      "Completed an 80-hour Artificial Intelligence course by Huawei Academy, covering Python programming, mathematics for AI, data analysis, machine learning, and deep learning",
      "Acquired hands-on experience with AI development frameworks, Huawei AI platforms, and an introduction to quantum computing"
    ]
  },
  {
    type: "National Technical Program",
    role: "Computer Vision Trainee",
    company: "National Telecommunication Institute (NTI)",
    date: "July 2025 - August 2025",
    description: [
      "Introduced to major ideas, methods, and techniques of computer vision and pattern recognition.",
      "Developed appreciation for design issues in object recognition systems",
      "Learned to use deep Learning and computer vision algorithms to automate and perform vision tasks"
    ]
  },
  {
    type: "National Technical Program",
    role: "Data Scientist Trainee",
    company: "Digital Egypt Pioneers - MCIT",
    date: "November 2025 - present",
    description: [
      "Intensive training in Data Science foundations, including data analysis, visualization, SQL databases, and Python-based workflows for extracting insights and building data-driven solutions.",
      "Hands-on experience in Machine Learning and applied AI, covering model development, evaluation, and deployment-oriented practices using industry tools such as MLflow and Hugging Face.",
      "Completion of end-to-end projects and a capstone, applying the full data science lifecycle—from problem formulation and data preparation to model building and real-world business insight generation."
    ]
  }
];

const skills = {
  technical: [
    { 
      category: "Programming Languages", 
      items: ["Python", "C++", "Java"],
      icon: <Terminal size={20} />
    },
    { 
      category: "Machine Learning", 
      items: ["Supervised Learning", "Unsupervised Learning", "Clustering", "Scikit-learn"],
      icon: <Brain size={20} />
    },
    { 
      category: "Deep Learning", 
      items: ["CNN", "ANN", "Transfer Learning", "TensorFlow", "Keras", "PyTorch"],
      icon: <Layers size={20} />
    },
    { 
      category: "Computer Vision", 
      items: ["Image Classification", "Segmentation", "Object Detection", "OpenCV"],
      icon: <Eye size={20} />
    },
    { 
      category: "Data Science", 
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Data Cleaning"],
      icon: <BarChart3 size={20} />
    },
    { 
      category: "Embedded Systems", 
      items: ["Arduino", "Raspberry Pi", "Atmega 32/328"],
      icon: <Cpu size={20} /> 
    },
    { 
      category: "Web & Tools", 
      items: ["Flask", "Streamlit", "Git", "GitHub", "Jupyter", "Google Colab"],
      icon: <Network size={20} /> 
    },
    { 
      category: "Databases", 
      items: ["MySQL", "SQLite"],
      icon: <Database size={20} />
    }
  ],
  soft: [
    { name: "Problem Solving", icon: <Puzzle size={18} /> },
    { name: "Team Leadership", icon: <Users size={18} /> },
    { name: "Communication", icon: <MessageCircle size={18} /> },
    { name: "Agile Methodology", icon: <Briefcase size={18} /> },
  ]
};

// --- COMPONENTS ---

const Navbar = ({ activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'about' },
    { name: 'Skills', id: 'skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md shadow-lg shadow-slate-900/50 z-50 transition-all duration-300 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Portfolio.
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`${
                  activeSection === link.id
                    ? 'text-blue-400 font-semibold'
                    : 'text-slate-300 hover:text-blue-300'
                } transition-colors duration-200 text-sm uppercase tracking-wider`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-blue-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800 rounded-md"
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
    <section id={id} className="min-h-screen flex items-center justify-center pt-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl text-blue-400 font-medium tracking-wide">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <h3 className="text-2xl md:text-3xl text-slate-400 font-bold flex items-center justify-center md:justify-start gap-2">
                <Terminal className="text-blue-500" size={32} />
                {personalInfo.title}
              </h3>
            </div>
            
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">
              {personalInfo.about}
            </p>

            <div className="flex justify-center md:justify-start space-x-5 pt-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full shadow-md hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 text-slate-200 border border-slate-700">
                <Github size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full shadow-md hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 text-blue-400 border border-slate-700">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-3 bg-slate-800 rounded-full shadow-md hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 text-red-400 border border-slate-700">
                <Mail size={24} />
              </a>
              <a 
                href={personalInfo.cvPath} 
                download="Mohamed_Khaled_CV.pdf"
                className="p-3 bg-slate-800 rounded-full shadow-md hover:bg-emerald-900/50 hover:text-emerald-400 hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 text-emerald-500 border border-slate-700 group flex items-center justify-center"
                title="Download CV"
              >
                <FileText size={24} />
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full transform translate-x-4 translate-y-4 animate-pulse"></div>
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full transform -translate-x-4 -translate-y-4"></div>
              <img 
                src={personalInfo.photo} 
                alt={personalInfo.name} 
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10"
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
    <section id={id} className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col md:flex-row gap-8"
            >
              <div className="flex-shrink-0 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-4">
                <div className="p-4 bg-slate-700/50 rounded-xl text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors duration-300 shadow-inner">
                  {project.icon}
                </div>
                
                <div className="hidden md:flex flex-col gap-3 w-full mt-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-300 bg-slate-900/50 rounded-lg hover:text-white hover:bg-slate-700 transition-all border border-slate-700"
                  >
                    <Github size={16} className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-400 bg-blue-900/10 rounded-lg hover:bg-blue-600 hover:text-white transition-all border border-blue-500/20 hover:border-blue-500"
                  >
                    Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="text-slate-400 leading-relaxed text-sm md:text-base">
                    {Array.isArray(project.description) ? (
                      <ul className="list-disc list-inside space-y-2 marker:text-blue-500/50">
                        {project.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{project.description}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-700/50">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-900 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-slate-500 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex md:hidden gap-4 mt-6">
                   <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-300 bg-slate-900/50 rounded-lg border border-slate-700"
                  >
                    <Github size={16} className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-400 bg-blue-900/10 rounded-lg border border-blue-500/20"
                  >
                    Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
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
    <section id={id} className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Journey</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <div key={index} className="bg-slate-900 rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-6 border-l-4 border-blue-500 hover:bg-slate-800 transition-colors duration-300">
              
              <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700">
                  {item.type === 'Internship' && <Briefcase size={20} />}
                  {item.type === 'Competition' && <Award size={20} />}
                  {item.type === 'Course' && <BookOpen size={20} />}
                  {item.type === 'National Technical Program' && <Briefcase size={20} />}
                </div>
              </div>

              <div className="flex-grow text-center md:text-left">
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div className="flex flex-col md:items-start items-center">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                      <h3 className="text-xl font-bold text-white">{item.role}</h3>
                      <span className="text-xs font-medium text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-lg text-slate-300 font-medium">{item.company}</h4>
                  </div>

                  <span className="text-sm font-medium text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full mt-2 md:mt-0 inline-block border border-blue-900/50 whitespace-nowrap">
                    {item.date}
                  </span>
                </div>

                <div className="mt-4 text-slate-400 leading-relaxed text-sm md:text-base">
                  {Array.isArray(item.description) ? (
                    <ul className="list-disc list-inside space-y-1 text-left">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
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
    <section id={id} className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Code2 className="mr-3 text-blue-400" /> Technical Proficiency
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.technical.map((tech, index) => (
              <div 
                key={index} 
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-slate-700/50 rounded-lg text-blue-400 mr-3">
                    {tech.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{tech.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-900/60 rounded border border-slate-700/50 hover:border-blue-500/30 hover:text-blue-200 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Users className="mr-3 text-green-400" /> Soft Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.soft.map((skill, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-green-500/30 hover:bg-slate-800 transition-all group">
                <span className="text-slate-400 group-hover:text-green-400 transition-colors mr-3">
                  {skill.icon}
                </span>
                <span className="font-medium text-slate-200 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h2>
      <div className="flex justify-center space-x-6 mb-8">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Github size={24} /></a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
        <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={24} /></a>
      </div>
      <p className="text-slate-600">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- MAIN APP ---

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-blue-500 selection:text-white">
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