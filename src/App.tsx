import { useState, useEffect, useRef } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      for (const section of sections) {
        const el = sectionRefs.current[section];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
          }
          if (rect.top < window.innerHeight * 0.75) {
            setVisibleSections(prev => new Set([...prev, section]));
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-[#0a0a1a]/90 backdrop-blur-lg shadow-lg shadow-purple-500/5' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-xl sm:text-2xl font-bold gradient-text">
            AE.
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs xl:text-sm font-medium transition-all duration-300 hover:text-purple-400 ${activeSection === link.id ? 'text-purple-400' : 'text-gray-400'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 xl:px-5 py-2 rounded-full gradient-bg text-white text-xs xl:text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 -mr-2"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#0a0a1a]/95 backdrop-blur-lg border-t border-white/5 px-4 py-3">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-2.5 text-sm text-gray-300 hover:text-purple-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-2 w-full py-2.5 rounded-full gradient-bg text-white text-sm font-medium"
            >
              Let's Talk
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        ref={el => { sectionRefs.current['home'] = el; }}
        id="home"
        className="min-h-[100dvh] flex items-center justify-center relative px-4 sm:px-6 pt-16"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-[400px] md:w-[600px] h-64 sm:h-[400px] md:h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 right-8 sm:right-20 w-3 sm:w-4 h-3 sm:h-4 bg-purple-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-32 sm:top-40 left-8 sm:left-32 w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full animate-float-delay opacity-60"></div>
        <div className="absolute bottom-32 sm:bottom-40 right-10 sm:right-40 w-3 sm:w-5 h-3 sm:h-5 bg-indigo-500 rounded-full animate-float opacity-40"></div>
        <div className="hidden sm:block absolute bottom-48 sm:bottom-60 left-6 sm:left-20 w-2 h-2 bg-pink-500 rounded-full animate-float-delay opacity-60"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
          <div className="mb-4 sm:mb-6 animate-fade-in-up">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card text-xs sm:text-sm text-purple-300 font-medium">
              👋 Welcome to my world
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I'm <span className="gradient-text">Adejuwon</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-gray-300">Emmanuel</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-gray-400 mb-2 sm:mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Web Developer & Digital Craftsman
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-10 px-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            I transform ideas into beautiful, functional digital experiences that people love to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up px-4" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full gradient-bg text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-all hover:scale-105 glow-effect"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-card text-white text-sm sm:text-base font-semibold hover:bg-white/10 transition-all"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={el => { sectionRefs.current['about'] = el; }}
        id="about"
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">Get to Know Me</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 sm:mt-3">About <span className="gradient-text">Me</span></h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left - Image/Avatar Area */}
              <div className="relative flex justify-center order-1 md:order-1">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 lg:w-80">
                  <div className="absolute inset-0 gradient-bg rounded-2xl sm:rounded-3xl rotate-6 opacity-50"></div>
                  <div className="absolute inset-0 bg-[#1a1a3e] rounded-2xl sm:rounded-3xl flex items-center justify-center overflow-hidden">
                    <div className="text-center p-4 sm:p-8">
                      <div className="text-5xl sm:text-6xl md:text-7xl mb-2 sm:mb-4">👨‍💻</div>
                      <p className="text-purple-300 font-semibold text-sm sm:text-lg">Adejuwon Emmanuel</p>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1">Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-2 md:order-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                  More Than Just a Developer
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  I'm Adejuwon Emmanuel — a creative soul with a passion for building things that make a difference. 
                  Beyond the screen, I'm someone who believes in the power of storytelling, the beauty of simplicity, 
                  and the magic that happens when creativity meets purpose.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  I'm the kind of person who finds inspiration in everyday conversations, who loves turning a blank 
                  page into something meaningful, and who genuinely enjoys helping others bring their visions to life.
                </p>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                  When I'm not crafting digital experiences, you'll find me exploring new ideas, mentoring aspiring 
                  creators, or simply enjoying the little moments that make life beautiful.
                </p>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {[
                    { icon: '🎯', label: 'Detail-Oriented' },
                    { icon: '🤝', label: 'Team Player' },
                    { icon: '💡', label: 'Creative Thinker' },
                    { icon: '🌍', label: 'Lifelong Learner' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 sm:gap-3 glass-card rounded-lg sm:rounded-xl p-2 sm:p-3">
                      <span className="text-lg sm:text-2xl">{item.icon}</span>
                      <span className="text-xs sm:text-sm text-gray-300 font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className={`glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '30+', label: 'Happy Clients' },
                { number: '3+', label: 'Years Experience' },
                { number: '100%', label: 'Dedication' },
              ].map((stat, i) => (
                <div key={i} className="py-2 sm:py-0">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={el => { sectionRefs.current['services'] = el; }}
        id="services"
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">What I Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 sm:mt-3">My <span className="gradient-text">Services</span></h2>
            <p className="text-gray-400 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base px-2">
              I don't just build websites — I create digital experiences that connect, inspire, and deliver results.
            </p>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 transition-all duration-1000 delay-300 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              {
                icon: '🎨',
                title: 'Web Design',
                description: 'Beautiful, intuitive designs that capture your brand essence and keep visitors engaged.',
              },
              {
                icon: '💻',
                title: 'Web Development',
                description: 'Clean, efficient code that brings designs to life with smooth interactions and fast performance.',
              },
              {
                icon: '📱',
                title: 'Responsive Design',
                description: 'Websites that look stunning on every device — from desktop to the smallest phone screen.',
              },
              {
                icon: '🚀',
                title: 'Performance',
                description: 'Lightning-fast load times and smooth experiences that keep visitors happy and returning.',
              },
              {
                icon: '🔍',
                title: 'SEO Optimization',
                description: 'Strategic optimization that helps your website rank higher and reach the right audience.',
              },
              {
                icon: '🛠️',
                title: 'Maintenance',
                description: 'Ongoing care and support to keep your website running smoothly, securely, and up-to-date.',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 group cursor-pointer"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={el => { sectionRefs.current['portfolio'] = el; }}
        id="portfolio"
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('portfolio') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">My Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 sm:mt-3">Featured <span className="gradient-text">Projects</span></h2>
            <p className="text-gray-400 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base px-2">
              Each project tells a story of collaboration, creativity, and careful craftsmanship.
            </p>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 transition-all duration-1000 delay-300 ${visibleSections.has('portfolio') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              {
                title: 'E-Commerce Platform',
                category: 'Web Development',
                description: 'A modern shopping experience with seamless checkout and beautiful product showcases.',
                gradient: 'from-purple-600 to-blue-600',
                icon: '🛒',
              },
              {
                title: 'Restaurant Website',
                category: 'Web Design',
                description: 'An elegant digital menu and booking system that makes dining reservations effortless.',
                gradient: 'from-orange-600 to-red-600',
                icon: '🍽️',
              },
              {
                title: 'Fitness App Landing',
                category: 'UI/UX Design',
                description: 'A vibrant landing page that motivates visitors to start their fitness journey.',
                gradient: 'from-green-600 to-teal-600',
                icon: '💪',
              },
              {
                title: 'Real Estate Portal',
                category: 'Full Stack',
                description: 'Property listings with virtual tours and smart search that finds dream homes.',
                gradient: 'from-blue-600 to-indigo-600',
                icon: '🏠',
              },
              {
                title: 'Creative Agency Site',
                category: 'Web Design',
                description: 'A bold, artistic portfolio that showcases creativity and attracts top clients.',
                gradient: 'from-pink-600 to-purple-600',
                icon: '🎨',
              },
              {
                title: 'Educational Platform',
                category: 'Web Development',
                description: 'An interactive learning hub that makes education accessible and engaging for all.',
                gradient: 'from-yellow-600 to-orange-600',
                icon: '📚',
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`h-40 sm:h-52 md:h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <span className="text-4xl sm:text-5xl md:text-6xl group-hover:scale-125 transition-transform duration-300">{project.icon}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold text-xs sm:text-sm border border-white/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="bg-[#12122a] p-4 sm:p-5 md:p-6">
                  <span className="text-purple-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold mt-1 sm:mt-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={el => { sectionRefs.current['testimonials'] = el; }}
        id="testimonials"
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">Kind Words</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 sm:mt-3">What People <span className="gradient-text">Say</span></h2>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 transition-all duration-1000 delay-300 ${visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              {
                name: 'Sarah Johnson',
                role: 'Business Owner',
                text: "Emmanuel didn't just build us a website — he understood our vision and brought it to life in ways we never imagined. His attention to detail is remarkable.",
                avatar: '👩‍💼',
              },
              {
                name: 'David Okafor',
                role: 'Startup Founder',
                text: "Working with Adejuwon was a breath of fresh air. He's patient, creative, and genuinely cares about the success of your project. Highly recommended!",
                avatar: '👨‍💻',
              },
              {
                name: 'Amara Williams',
                role: 'Marketing Director',
                text: "The level of professionalism and creativity Emmanuel brings to every project is outstanding. He transformed our online presence completely.",
                avatar: '👩‍🎨',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-2xl sm:text-3xl">{testimonial.avatar}</span>
                  <div>
                    <p className="text-white font-semibold text-xs sm:text-sm">{testimonial.name}</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={el => { sectionRefs.current['contact'] = el; }}
        id="contact"
        className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 relative"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-purple-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 sm:mt-3">Let's Work <span className="gradient-text">Together</span></h2>
            <p className="text-gray-400 mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base px-2">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 transition-all duration-1000 delay-300 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                I'm always excited to take on new challenges and collaborate with amazing people. 
                Whether you have a specific project or just want to chat, don't hesitate to reach out.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: '📧', label: 'Email', value: 'adejuwon.emmanuel@email.com' },
                  { icon: '📱', label: 'Phone', value: '+234 XXX XXX XXXX' },
                  { icon: '📍', label: 'Location', value: 'Lagos, Nigeria' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl gradient-bg flex items-center justify-center text-base sm:text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium text-xs sm:text-base truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-all hover:-translate-y-1"
                  >
                    <span className="text-xs sm:text-sm text-gray-300">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 block">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs sm:text-sm text-gray-400 mb-1.5 sm:mb-2 block">Your Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl gradient-bg text-white text-sm sm:text-base font-semibold hover:opacity-90 transition-all hover:scale-[1.02] glow-effect"
                >
                  Send Message ✨
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <div className="text-xl sm:text-2xl font-bold gradient-text">AE.</div>
          <p className="text-gray-500 text-xs sm:text-sm">
            © 2024 Adejuwon Emmanuel. Crafted with ❤️ and lots of coffee.
          </p>
          <div className="flex gap-4 sm:gap-6">
            {navLinks.slice(0, 4).map(link => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-500 text-xs sm:text-sm hover:text-purple-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
