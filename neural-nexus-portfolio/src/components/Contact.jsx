import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


    const handleSubmit = async (e) => {
      e.preventDefault();

      const formEndpoint = "https://formspree.io/f/mrbakkjp";
      const formDataToSend = new FormData();

      // Append form data
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          body: formDataToSend,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        } else {
          alert("Failed to send the message. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
        alert("An error occurred. Please try again.");
      }

  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "2200030730cseh@gmail.com",
      link: "mailto:2200030730cseh@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8121406397",
      link: "tel:+918121406397",
      color: "text-secondary"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Guntur, Andhra Pradesh, India",
      link: "https://www.bing.com/maps?q=guntur%2C+andhra&FORM=HDRSC6&cp=16.31308%7E80.442646&lvl=13.2",
      color: "text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      link: "https://github.com/nsvsaikrishna0312",
      color: "hover:text-primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      link: "https://linkedin.com/in/nallajarla-sri-venkata-sai-krishna",
      color: "hover:text-secondary"
    },
    {
      icon: <SiLeetcode className="w-6 h-6" />,
      label: "LeetCode",
      link: "https://leetcode.com/u/saikrishna0312/",
      color: "hover:text-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
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
            Let's Connect
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="relative z-10 text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to collaborate on innovative AI projects or discuss opportunities? 
            Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`${info.color} group-hover:scale-110 transition-transform`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass-card p-4 rounded-lg text-muted-foreground ${social.color} transition-colors hover-lift`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-accent">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary neon-text">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">Fast</div>
                  <div className="text-sm text-muted-foreground">Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent neon-text-orange">Open</div>
                  <div className="text-sm text-muted-foreground">To Work</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Global</div>
                  <div className="text-sm text-muted-foreground">Remote</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Project Collaboration"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  variants={itemVariants}
                  className="w-full glass-card px-8 py-4 rounded-lg text-lg font-semibold text-primary border-primary hover-lift glow-effect flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

