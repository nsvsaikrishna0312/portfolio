import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github,Gamepad2 ,Zap, Brain, Shield, Globe, ShoppingCart, Palette, Cloud } from 'lucide-react';
const Projects = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "AI-powered Cloud Based Wildfire Detection System",
      description: "Used satellite imagery and AWS services to reduce response time by 60% with real-time fire detection using Satellite images and machine learning algorithms.",
      icon: <Zap className="w-8 h-8" />,
      tech: ["Python", "AWS Rekognition", "AWS Lambda", "Satellite Imagery"],
      metrics: "60% faster response time",
      color: "from-red-500 to-orange-500",

    },
    {
      title: "GLOF-EWS (Glacial Lake Outburst Flood Early Warning System)",
      description: "Developed an early warning system with 92% detection accuracy and 65% lower latency for predicting glacial lake outburst floods.",
      icon: <Shield className="w-8 h-8" />,
      tech: ["Machine Learning", "Python", "Edge Computing", "IoT","Google Earth Engine"],
      metrics: "92% accuracy, 65% lower latency",
      color: "from-blue-500 to-cyan-500",
      award: "🏆 Winner - Code4Change 2025",
      gitLink:"https://github.com/flying-spagetti/glof_ews"
    },
    {
      title: "Sentiment Analysis Using WhatsApp Chat",
      description: "Developed sentiment analysis using NLP techniques, achieving 87% accuracy in analyzing emotional patterns from chat conversations.",
      icon: <Brain className="w-8 h-8" />,
      tech: ["NLP", "Python", "scikit-learn", "NLTK"],
      metrics: "87% accuracy",
      color: "from-green-500 to-emerald-500",
      gitLink: "https://github.com/nsvsaikrishna0312/Sentiment-Analysis-Using-Whatsapp-Chat"
    },
    {
      title: "Visa Prediction System",
      description: "Built ML pipelines with SMOTE and logistic regression, improving prediction accuracy on imbalanced datasets by 72%.",
      icon: <Globe className="w-8 h-8" />,
      tech: ["Machine Learning", "SMOTE", "Logistic Regression", "Python"],
      metrics: "72% improvement",
      color: "from-purple-500 to-violet-500",
      gitLink: "https://github.com/nsvsaikrishna0312/visa_prediction"
    },
    {
      title: "Tribal Treasure",
      description: "Developed using Spring Boot and React, empowering tribal artisans by increasing online visibility by 60%.",
      icon: <ShoppingCart className="w-8 h-8" />,
      tech: ["Spring Boot", "React"],
      metrics: "60% increase in online visibility",
      color: "from-green-500 to-emerald-500",
      gitLink: "https://github.com/nsvsaikrishna0312/tribaltreasure"
    },
    {
      title: "Fruit Ninja Game using Hand Gestures",
      description: "Built an interactive Fruit Ninja game controlled entirely through hand gestures, leveraging computer vision techniques for real-time motion tracking and boosting user engagement by 70%.",
      icon: <Gamepad2 className="w-8 h-8" />,
      tech: ["Python", "OpenCV", "Mediapipe"],
      metrics: "70% increase in engagement",
      color: "from-yellow-500 to-orange-500",
      gitLink: "https://github.com/nsvsaikrishna0312/Fruit-Ninja-Game-using-hand-gestures"
    },

    {
      title: "Electronics E-commerce Website",
      description: "Created using MERN stack, reducing page load time by 35% with optimized performance and responsive design.",
      icon: <ShoppingCart className="w-8 h-8" />,
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      metrics: "35% faster load time",
      color: "from-indigo-500 to-blue-500",
      gitLink: "https://github.com/nsvsaikrishna0312/electronic-ecommerce"
    },
    {
      title: "Indian Culture Management Platform",
      description: "Built using Django, MySQL, HTML, and CSS, achieving a 40% improvement in responsive design and user experience.",
      icon: <Palette className="w-8 h-8" />,
      tech: ["Django", "MySQL", "HTML", "CSS"],
      metrics: "40% design improvement",
      color: "from-pink-500 to-rose-500",
      gitLink: "https://github.com/nsvsaikrishna0312/india-culture"
    },
      {
      title: "Real Estate Management System (REMS)",
      description: "Implemented using React.js, Node.js, and MongoDB, optimizing property search efficiency by 50%.",
      icon: <Globe className="w-8 h-8" />,
      tech: ["React.js", "Node.js", "MongoDB"],
      metrics: "50% faster property search",
      color: "from-teal-500 to-cyan-500",
        gitLink: "https://github.com/nsvsaikrishna0312/realestate-mernstack"
    },
      {
        title: "Weather Reporting Application",
        description: "Produced a desktop-based application using Python’s Tkinter and integrated a weather API, enabling real-time weather data display and improving accessibility to location-specific forecasts by 80%.",
        icon: <Cloud className="w-8 h-8" />,
        tech: ["Python", "Tkinter", "Weather API"],
        metrics: "80% improvement in accessibility",
        color: "from-sky-500 to-indigo-500",
        gitLink: "https://github.com/nsvsaikrishna0312/weatherforecast-tkinter"
    }



  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
        >
          <motion.h2
              variants={itemVariants}
              className="relative z-10 text-4xl md:text-5xl font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
              variants={itemVariants}
              className="relative z-10 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Innovative solutions that showcase my expertise in AI, ML, and software development
          </motion.p>
        </motion.div>

        <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
            variants={containerVariants}
            initial="hidden"
            animate="visible"   // 👈 instead of whileInView
        >
          {projects.map((project, index) => (
              <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 rounded-xl hover-lift group relative overflow-hidden"
                  whileHover={{scale: 1.02}}
              >
                {/* Background Gradient */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}/>

                {/* Award Badge */}
                {project.award && (
                    <div className="absolute top-4 right-4 text-xs bg-accent text-white px-2 py-1 rounded-full">
                      {project.award}
                    </div>
                )}
                <div className="relative z-20">
                  {/* Icon */}
                  <div
                      className={`text-primary mb-4 p-3 rounded-lg bg-gradient-to-br ${project.color} bg-opacity-20 w-fit`}>
                    {project.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mb-4">
        <span className="text-sm font-semibold text-accent bg-accent/20 px-2 py-1 rounded">
          {project.metrics}
        </span>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full"
                        >
            {tech}
          </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                        href={project.gitLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-white transition-colors"
                        // whileHover={{ scale: 1.05 }}
                        // whileTap={{ scale: 0.95 }}
                    >
                      < Github size={16}/>
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>

                  {/* Hover Effect */}
                  <div
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>
              </motion.div>

            ))}
        </motion.div>



        {/* Call to Action */}
        <motion.div
            className="text-center mt-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: false}}
        >
          <motion.button
              className="glass-card px-8 py-4 rounded-lg text-lg font-semibold text-primary border-primary hover-lift glow-effect"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
          >
            <a href={"https://github.com/nsvsaikrishna0312?tab=repositories"}
            target="_blank" rel="noopener noreferrer">
            View All Projects
            </a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
