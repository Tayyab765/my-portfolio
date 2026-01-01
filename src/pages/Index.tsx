import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Tayyab Attiq | Software Engineer & Full-Stack Developer</title>
        <meta
          name="description"
          content="Software Engineer with expertise in full-stack development, AI systems, and DevOps. Specialized in MERN stack, RAG systems, and building scalable applications."
        />
        <meta
          name="keywords"
          content="Tayyab Attiq, Software Engineer, Full-Stack Developer, AI Developer, MERN Stack, React, Node.js, Python, Islamabad"
        />
        <meta property="og:title" content="Tayyab Attiq | Software Engineer & Full-Stack Developer" />
        <meta
          property="og:description"
          content="Software Engineer with expertise in full-stack development, AI systems, and DevOps."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tayyab-attiq.dev" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CTASection />
        <ContactSection />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;
