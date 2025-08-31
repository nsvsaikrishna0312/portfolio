import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Zap } from 'lucide-react';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Floating Icons */}
      <motion.div className="absolute top-24 left-6 sm:left-16 text-primary" variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 1 }}>
        <Code size={35} className="float-animation" />
      </motion.div>
      <motion.div className="absolute top-24 right-6 sm:right-16 text-secondary" variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
        <Brain size={40} className="neural-pulse" />
      </motion.div>
      <motion.div className="absolute bottom-24 left-6 sm:left-16 text-accent" variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 1.4 }}>
        <Database size={30} className="neural-pulse" />
      </motion.div>
      <motion.div className="absolute bottom-16 right-6 sm:right-16 text-primary" variants={iconVariants} initial="hidden" animate="visible" transition={{ delay: 1.6 }}>
        <Zap size={38} className="glow-effect" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 lg:gap-52 xl:gap-40 w-full px-6 sm:px-12 md:px-16 lg:px-24"
      >
        {/* Profile Image */}
        <motion.div
          className="relative z-0 mt-20 sm:mt-24 md:mt-0 rounded-full overflow-hidden border-4 border-cyan-400 shadow-xl hover:shadow-2xl transition-transform duration-500 hover:scale-105"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <img
            src="/krishna-hero.jpg"
            alt="Nallajarla Sri Venkata Sai Krishna"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-100 lg:h-100 object-cover rounded-full"
          />
        </motion.div>

        {/* Hero Text */}
        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <div className="mb-4">
            <span className="text-primary text-sm sm:text-base md:text-lg font-medium tracking-wider">
              FULL STACK DEVELOPER & MACHINE LEARNING ENGINEER
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Nallajarla Sri Venkata Sai Krishna
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-9 leading-relaxed">
            Building <span className="text-secondary font-semibold">full-stack applications</span> powered by
            <span className="text-primary font-semibold"> Machine Learning</span>,
            <span className="text-secondary font-semibold"> Deep Learning</span>, and
            <span className="text-accent font-semibold"> Generative AI</span>, transforming ideas into intelligent, deployable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <motion.button
              className="glass-card px-6 py-3 sm:px-7 sm:py-4 rounded-lg text-base sm:text-lg font-semibold text-primary border-primary hover-lift glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
            >
              Explore Projects
            </motion.button>
            <motion.button
              className="glass-card px-6 py-3 sm:px-7 sm:py-4 rounded-lg text-base sm:text-lg font-semibold text-white border-white/20 hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://1drv.ms/b/c/330ec12843f96e2b/ETIFIkhGxMtAlAIAT3O29YsBxMCgf2oDR3kFatkwJ2-EQg?e=b2LfBe', '_blank')}
            >
              Download Resume
            </motion.button>
          </div>

          <div className="mt-10 flex justify-center md:justify-start space-x-6 sm:space-x-9">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary neon-text">9.7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">CGPA</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-secondary">4+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent neon-text-orange">1st</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Place Winner</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
