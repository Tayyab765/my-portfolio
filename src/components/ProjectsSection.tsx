import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

import projectPOS from '@/assets/project-pos.png';
import projectE2EE from '@/assets/project-e2ee.png';
import projectRAG from '@/assets/project-rag.png';
import projectCropify from '@/assets/project-cropify.png';

const projects = [
  {
    title: 'POS System',
    description: 'A complete Point of Sale (POS) system designed for retail environments with product management, billing, and sales tracking.',
    github: 'https://github.com/Tayyab765/POS-System-MERN-Stack-.git',
    live: 'https://pos-system-mern-stack.vercel.app/',
    image: projectPOS,
  },
  {
    title: 'End-to-End Encrypted Messaging',
    description: 'A secure communication system implementing end-to-end encryption for privacy and confidentiality.',
    github: 'https://github.com/Tayyab765/e2ee.git',
    image: projectE2EE,
  },
  {
    title: 'FYP RAG System',
    description: 'An AI-powered academic assistant using RAG to help students query FYP handbook data efficiently.',
    github: 'https://github.com/Tayyab765/RAG-FYP2023Handbook.git',
    live: 'https://tayyab-rag-fyp2023handbook.streamlit.app/',
    image: projectRAG,
  },
  {
    title: 'Cropify',
    description: 'A full-stack agriculture marketplace connecting farmers with buyers using React and Spring Boot.',
    github: 'https://github.com/Tayyab765/SDA_Project_Cropify.git',
    image: projectCropify,
  },
];

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-24 pt-12 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work demonstrating my skills in full-stack development, DevOps, and workflow automation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Stacked Cards */}
          <div className="relative w-full max-w-md h-80 flex-shrink-0">
            {projects.map((project, index) => {
              const offset = (index - currentIndex + projects.length) % projects.length;
              const isActive = offset === 0;
              const isNext = offset === 1;
              const isPrev = offset === projects.length - 1;
              
              let transform = 'translateX(100%) scale(0.8)';
              let zIndex = 0;
              let opacity = 0;
              
              if (isActive) {
                transform = 'translateX(0) rotate(-6deg) scale(1)';
                zIndex = 30;
                opacity = 1;
              } else if (isNext) {
                transform = 'translateX(-15%) translateY(10%) rotate(3deg) scale(0.9)';
                zIndex = 20;
                opacity = 0.7;
              } else if (isPrev || offset === 2) {
                transform = 'translateX(-30%) translateY(20%) rotate(8deg) scale(0.8)';
                zIndex = 10;
                opacity = 0.4;
              }

              return (
                <div
                  key={project.title}
                  className="absolute inset-0 rounded-2xl overflow-hidden transition-all duration-500 ease-out shadow-2xl"
                  style={{
                    transform,
                    zIndex,
                    opacity,
                  }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              );
            })}
          </div>

          {/* Project Info */}
          <div className="flex-1 text-center lg:text-left">
            {/* Counter */}
            <p className="text-muted-foreground text-sm mb-4">
              {currentIndex + 1}/{projects.length}
            </p>

            {/* Title with link */}
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 group"
            >
              <span className="text-xl font-semibold">{currentProject.title}</span>
              <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {currentProject.description}
            </p>

            {/* Live Demo Link */}
            {currentProject.live && (
              <a
                href={currentProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors mb-8"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <button
                onClick={prevProject}
                className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
