import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const About = () => {
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

  const skills = [
    { name: 'Python', level: 90 },
    { name: 'Java', level: 90 },
    { name: 'Javascript', level: 85 },
    { name: 'React', level: 90 },
    { name: 'Springboot', level: 80 },
    { name: 'Django', level: 90 },
    { name: 'Machine Learning', level: 87 },
    { name: 'Deep Learning', level: 85 },
    { name: 'TensorFlow/PyTorch', level: 88 },
    { name: 'Data Science', level: 85 },
    { name: 'NLP', level: 85 },
    { name: 'Cloud Computing', level: 80 }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="relative z-10 text-4xl md:text-5xl font-bold mb-4"
            >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="relative z-10 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Passionate about transforming complex data into intelligent solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I am a Computer Science student at KL University, specializing in Python, machine learning, 
                and generative AI, with a strong passion for innovation and technology. As President of the 
                Kognitiv Technology Club, I lead AI-driven initiatives, mentor peers, and foster collaboration 
                to explore cutting-edge advancements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With leadership experience, a problem-solving mindset, and a dedication to continuous learning, 
                I aim to contribute meaningfully to AI and emerging technologies. I hold certifications in 
                AWS Cloud, Oracle Generative AI, Red Hat, and Salesforce AI, showcasing my technical expertise 
                and commitment to growth.
              </p>
            </motion.div>


            {/* Education */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">B.Tech Computer Science and Engineering</h4>
                  <p className="text-primary">KL University</p>
                  <p className="text-sm text-muted-foreground">2022 - Present | CGPA: 9.7</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Intermediate (MPC)</h4>
                  <p className="text-secondary">Vignan Cooperative Junior College</p>
                  <p className="text-sm text-muted-foreground">2020 - 2022 | GPA: 9.75 | Jee Mains: 94 Percentile | EAPCET: 4668 rank</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2 rounded-full">
                      <motion.div
                        className="skill-progress h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

