import { Code, Database, Server, Cloud, Wrench, Brain } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6" />,
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Full-Stack Development',
    icon: <Server className="w-6 h-6" />,
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    title: 'AI & Data',
    icon: <Brain className="w-6 h-6" />,
    skills: ['Python', 'RAG Systems', 'AI Information Retrieval', 'NLP Basics', 'Machine Learning'],
  },
  {
    title: 'DevOps & Testing',
    icon: <Cloud className="w-6 h-6" />,
    skills: ['Git', 'GitHub Actions', 'Docker', 'CI/CD Pipelines', 'Jest', 'Postman'],
  },
  {
    title: 'Databases',
    icon: <Database className="w-6 h-6" />,
    skills: ['MongoDB', 'MySQL', 'SQL Server'],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench className="w-6 h-6" />,
    skills: ['VS Code', 'Postman', 'Linux', 'Figma'],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 pt-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-gradient">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
