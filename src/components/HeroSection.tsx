import { useEffect, useState } from 'react';
import { Code2, Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const roles = ['Software Engineer', 'Full-Stack Developer', 'AI Developer'];

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '4+', label: 'Projects Completed' },
  { value: '10+', label: 'Technologies' },
  { value: '100', label: '% Dedication' },
];

const techStack = [
  'React',
  'Node.js',
  'Python',
  'MongoDB',
  'Express.js',
  'Spring Boot',
];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowArrow(scrolled < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 20 + 20}s`,
            }}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10 min-h-screen flex flex-col items-center justify-center pt-32 pb-8">
        {/* Code Icon */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="code-icon-bg animate-float">
            <Code2 className="w-12 h-12 text-accent" />
          </div>
        </div>
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient">Tayyab Attiq</span>
        </h1>

        {/* Animated Role */}
        <div className="h-10 mb-8 animate-fade-in-up animation-delay-200">
          <h2 className="text-xl md:text-2xl text-muted-foreground">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-muted-foreground mb-10 leading-relaxed animate-fade-in-up animation-delay-400 text-base md:text-lg italic">
          Crafting scalable web applications with modern technologies like React, Node.js, and Python. Specialized in MERN stack development, DevOps, and creating exceptional user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up animation-delay-600">
          <a href="#contact" className="cta-button cta-button-outline flex items-center gap-2">
            Get In Touch
          </a>
          <a
            href="/ResumeDec25.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button cta-button-primary flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-16 animate-fade-in-up animation-delay-800">
          <a
            href="https://github.com/Tayyab765"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/tayyab-attiq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:tayyabattiq@example.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Down Arrow */}
        <div className={`mt-16 transition-opacity duration-500 ${showArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-bounce inline-block">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>

      {/* Stats and Tech Stack Section */}
      <div className="container mx-auto px-6 pb-12 relative z-10">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '1s' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack Section with Gradient */}
        <div className="relative animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          {/* Gradient Background for Expertise */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl blur-3xl -z-10"></div>
          
          <div className="relative py-12 px-6 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-8 tracking-wide text-center">
              TECH STACK EXPERTISE
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="skill-badge"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
