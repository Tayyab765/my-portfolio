import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 pt-8">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-gradient">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated <span className="text-foreground font-semibold">Software Engineer</span> with strong foundations in full-stack web development, 
              hands-on experience with DevOps & CI/CD, and growing expertise in AI-driven systems such as RAG (Retrieval Augmented Generation).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in modern JavaScript frameworks like React.js and Node.js, and I'm passionate about writing clean, maintainable code. 
              From building secure applications to developing intelligent systems, I strive to deliver solutions that are both technically sound and impactful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor's in Software Engineering at FAST-NUCES Islamabad, I'm passionate about building scalable, 
              secure, and intelligent applications that solve real-world problems.
            </p>

            {/* Quick Facts */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <QuickFact icon={<Calendar />} text="2+ Years Experience" />
              <QuickFact icon={<Briefcase />} text="4+ Projects Completed" />
              <QuickFact icon={<MapPin />} text="Based in Islamabad" />
              <QuickFact icon={<GraduationCap />} text="FAST-NUCES Student" />
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-8">
            {/* Education */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="border-l-2 border-primary/30 pl-4 ml-5">
                <h4 className="font-semibold text-foreground">
                  BS Software Engineering
                </h4>
                <p className="text-primary text-sm">FAST-NUCES, Islamabad</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Aug 2022 – June 2026
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="border-l-2 border-accent/30 pl-4 ml-5">
                <h4 className="font-semibold text-foreground">
                  Software Development Intern
                </h4>
                <p className="text-accent text-sm">Protect Lab</p>
                <p className="text-muted-foreground text-sm mt-1">Summer 2024</p>
                <ul className="text-muted-foreground text-sm mt-2 space-y-1">
                  <li>• Developed MalDef, a signature-based malware detection system</li>
                  <li>• Worked on secure coding practices and cybersecurity fundamentals</li>
                  <li>• Collaborated in a team environment following structured workflows</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuickFact = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
    <div className="text-primary">{icon}</div>
    <span className="text-sm text-foreground">{text}</span>
  </div>
);

export default AboutSection;
