import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-24 pt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-6 py-16 px-8 bg-background/80 backdrop-blur-lg border border-border/50 rounded-3xl">
          {/* Name */}
          <h3 className="text-3xl font-bold text-gradient">Tayyab Attiq</h3>
          
          {/* Roles */}
          <p className="text-muted-foreground">
            Software Engineer | Full-Stack Developer | AI Developer
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-6 pt-2">
            <a
              href="https://github.com/Tayyab765"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tayyab-attiq-9b233127b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/itx._.tyb908"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border/50 mt-6" />
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm pt-4">
            © {currentYear} Tayyab Attiq. Crafted with passion and modern technologies.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
