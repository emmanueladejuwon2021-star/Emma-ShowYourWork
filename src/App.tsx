import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load sections for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const TechStack = lazy(() => import('./components/TechStack'));
const Services = lazy(() => import('./components/Services'));
const Experience = lazy(() => import('./components/Experience'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component
function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
    </div>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fallback: ensure content shows even if preloader fails
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoaded(true);
  };

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-[#050509] text-gray-900 dark:text-white min-h-screen overflow-x-hidden transition-colors duration-300">
        {/* Preloader */}
        {!isLoaded && <Preloader onComplete={handlePreloaderComplete} />}

        {/* Main Content */}
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Navigation />
              <main>
                <Suspense fallback={<SectionLoader />}>
                  <Hero />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <About />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <TechStack />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Services />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Experience />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Portfolio />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Testimonials />
                </Suspense>
                <Suspense fallback={<SectionLoader />}>
                  <Contact />
                </Suspense>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
