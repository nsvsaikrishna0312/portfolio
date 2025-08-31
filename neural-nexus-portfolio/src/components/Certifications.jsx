import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "June 2024 - June 2027",
      status: "Active",
      color: "from-orange-500 to-yellow-500",
      logo: "☁️",
      verify:"https://www.credly.com/badges/0f2b1674-fc4c-40b1-b765-6f89a437a1c4/linked_in_profile"
    },
    {
      title: "Red Hat Certified Enterprise Application Developer",
      issuer: "Red Hat",
      date: "January 2025 - January 2028",
      status: "Active",
      color: "from-red-500 to-pink-500",
      logo: "🎩",
      verify:"https://rhtapps.redhat.com/verify?certId=240-258-806"
    },
    {
      title: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      date: "July 2025",
      status: "Active",
      color: "from-green-500 to-emerald-500",
      logo: "⚙️",
      verify:"https://www.credly.com/badges/1cd2d7d5-8ddf-4625-81ca-1c707b517d9b/public_url"
    },
      {
      title: "ServiceNow Certified Application Developer",
      issuer: "ServiceNow",
      date: "June 2025 - June 2028",
      status: "Active",
      color: "from-green-600 to-emerald-600",
      logo: "🛠️",
        verify:"https://www.credly.com/badges/aaff9811-e872-4b1d-8cc8-cf540152209d/public_url"
    },

    {
      title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
      issuer: "Oracle",
      date: "2024",
      status: "Active",
      color: "from-blue-500 to-cyan-500",
      logo: "🔮",
      verify:"https://catalog-education.oracle.com/ords/certview/sharebadge?id=B648C9F552916585E81A461B658FB8A93BF9B2449F988AA42758B356CC0FE878"
    },
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "August 2024 - August 2027",
      status: "Active",
      color: "from-blue-600 to-indigo-600",
      logo: "⚡",
      verify:"https://www.salesforce.com/trailblazer/ik6ihtq137gz0varj8"
    },
    {
      title: "Getting Started with Deep Learning",
      issuer: "Nvidia",
      date: "March 2025",
      status: "Active",
      color: "from-purple-500 to-violet-500",
      logo: "🧠",
      verify:"https://learn.nvidia.com/certificates?id=274baU1wTcKIHBTsNUf2dQ"
    },
      {
      title: "Introduction to Transformer-Based Natural Language Processing",
      issuer: "Nvidia",
      date: "March 2025",
      status: "Active",
      color: "from-green-500 to-lime-600",
      logo: "🤖",
        verify:"https://learn.nvidia.com/certificates?id=HP4CegHiQBqxLrSb4ZA3Rw"
    },
      {
      title: "Deep Learning (Elite)",
      issuer: "NPTEL - IIT Kharagpur",
      date: "April 2025",
      status: "Active",
      color: "from-red-500 to-orange-600",
      logo: "🧠",
        verify:"https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25EE16S66000092104509646"
    },
      {
      title: "Introduction to Machine Learning (Elite)",
      issuer: "NPTEL - IIT Kharagpur",
      date: "September 2024",
      status: "Active",
      color: "from-green-600 to-emerald-600",
      logo: "🤖",
        verify:"https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS81S34960009302605791"
    }



  ];

  return (
    <section id="certifications" className="py-20 px-6">
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
            Certifications & Achievements
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="relative z-10 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Professional certifications that validate my expertise in cloud computing, AI, and enterprise technologies
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl text-center hover-lift">
            <Award className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">6+</div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl text-center hover-lift">
            <CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-3xl font-bold text-secondary">5</div>
            <div className="text-sm text-muted-foreground">Active Certifications</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl text-center hover-lift">
            <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-accent">2025</div>
            <div className="text-sm text-muted-foreground">Latest Achievement</div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-card p-6 rounded-xl text-center hover-lift">
            <ExternalLink className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Verification Rate</div>
          </motion.div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
              <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 rounded-xl hover-lift group relative overflow-hidden"
                  whileHover={{scale: 1.02}}
              >
                {/* Background Gradient */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}/>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                <span className={`text-xs px-2 py-1 rounded-full ${
                    cert.status === 'Active'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {cert.status}
                </span>
                </div>
                <div className="relative z-20">

                  {/* Logo */}
                  <div className="text-4xl mb-4">{cert.logo}</div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-secondary font-medium mb-2">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar size={14}/>
                    <span>{cert.date}</span>
                  </div>

                  {/* Action Button */}
                  <motion.a
                      href={cert.verify || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-white transition-colors mt-auto"
                      whileHover={{scale: 1.05}}
                      whileTap={{scale: 0.95}}
                  >
                    <ExternalLink size={16}/>
                    <span className="text-sm">Verify</span>
                  </motion.a>
                </div>
                  {/* Hover Effect */}
                  <div
                      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}/>
              </motion.div>
            ))}
        </motion.div>

        {/* Achievement Highlight */}
        <motion.div
            className="mt-16 glass-card p-8 rounded-xl text-center"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-2xl font-bold mb-4 text-accent neon-text-orange">
            Winner - Code4Change 2025 Hackathon
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Won 1st place in Open Innovation for GLOF-EWS, a real-time Glacial Lake Outburst Flood 
            early warning system optimized for edge deployment, demonstrating excellence in AI innovation 
            and practical problem-solving.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

