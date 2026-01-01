import { Rocket, Shield, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 pt-12 relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA Card */}
        <div className="max-w-5xl mx-auto p-12 rounded-3xl border border-primary/20 bg-card/30 backdrop-blur-sm">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something <span className="text-gradient">Amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Let's transform your ideas into powerful, scalable web applications. Whether you need a complete solution or want to enhance your existing project, I'm here to help you succeed.
            </p>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <Rocket size={20} />
              Start Your Project
            </a>

            {/* Features - Horizontal Layout */}
            <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-border/30">
              <FeatureItem
                icon={<Clock className="w-6 h-6" />}
                title="Fast Delivery"
              />
              <FeatureItem
                icon={<Shield className="w-6 h-6" />}
                title="Quality Assured"
              />
              <FeatureItem
                icon={<Rocket className="w-6 h-6" />}
                title="Long-term Support"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
      {icon}
    </div>
    <h3 className="font-semibold text-foreground">{title}</h3>
  </div>
);

export default CTASection;
