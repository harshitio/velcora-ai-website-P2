import { MotionConfig } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import TechStackSection from './sections/TechStackSection';
import ProcessSection from './sections/ProcessSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div style={{ overflowX: 'clip' }}>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ProjectsSection />
        <TechStackSection />
        <ProcessSection />
        <ContactSection />
        <Footer />
      </div>
    </MotionConfig>
  );
}
