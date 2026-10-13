import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
                <Hero />
                <About />
                <TechStack />
                <Services />
                <Experience />
                <Portfolio />
                <Testimonials />
                <Contact />
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
