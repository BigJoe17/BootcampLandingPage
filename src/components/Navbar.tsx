import React, { useState, type JSX } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiCode,
  FiLayers,
  FiAward,
} from "react-icons/fi";
import "../App.css";

type Week = {
  title: string;
  topics: string[];
  icon: JSX.Element;
};

type Deliverable = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const BootcampLanding: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const weeks: Week[] = [
    {
      title: "Web Dev Foundations + AI Tools",
      topics: [
        "HTML Basics - Build your first webpage",
        "CSS Styling - Design a landing page",
        "AI Tools for Web Dev (ChatGPT, GitHub Copilot)",
      ],
      icon: <FiLayers className="week-icon" />,
    },
    {
      title: "Interactive Websites + GitHub",
      topics: [
        "JavaScript Basics - Build a calculator/to-do list",
        "Responsive Design - Mobile-friendly sites",
        "GitHub Essentials & Student Pack",
      ],
      icon: <FiGithub className="week-icon" />,
    },
    {
      title: "Real Project + Deployment",
      topics: [
        "Final Project Setup (Portfolio or Business Site)",
        "Deploy with GitHub Pages",
        "AI-powered Coding Tips",
      ],
      icon: <FiCode className="week-icon" />,
    },
    {
      title: "Polish & Presentation",
      topics: [
        "Project Review & Feedback",
        "Building Confidence (Interview Prep)",
        "Showcase Day & Certificate Award",
      ],
      icon: <FiAward className="week-icon" />,
    },
  ];

  const deliverables: Deliverable[] = [
    {
      icon: <FiCode size={32} />,
      title: "Personal Portfolio Website",
      description: "A live, deployed website showcasing your work",
    },
    {
      icon: <FiAward size={32} />,
      title: "Certificate of Completion",
      description: "Official recognition of your new skills",
    },
    {
      icon: <FiLayers size={32} />,
      title: "Resume Template",
      description: "Professional template for resume websites",
    },
    {
      icon: <FiGithub size={32} />,
      title: "GitHub Student Pack",
      description: "$1000+ worth of developer tools and resources",
    },
  ];

  const toggleWeek = (index: number) => {
    setActiveWeek(activeWeek === index ? null : index);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.email) {
      setError('Please fill in all fields');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setIsLoading(true);
      await fetch('https://formsubmit.co/ajax/joshuaolugotun17@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: 'New Bootcamp Signup',
          _template: 'table'
        })
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setError('Submission failed, please try again');
    } finally {
      setIsLoading(false);
    }
  };

  // Update your form JSX
  <form className="enrollment-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <input
        type="text"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
    </div>
    <div className="form-group">
      <input
        type="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
    </div>
    {submitted ? (
      <div className="success-message">
        🎉 Thanks for signing up! We'll be in touch soon.
      </div>
    ) : (
      <button type="submit" className="primary-button">
        Reserve Your Spot <FiArrowRight />
      </button>
    )}
  </form>;
  return (
    <div className="bootcamp-landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-gradient"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>4-Week Web Development Bootcamp</h1>
            <h2>From Zero to Deployed Portfolio - June 2025</h2>
            <p className="lead">
              Learn HTML, CSS, JavaScript and deploy your own website using
              GitHub - no prior experience needed!
            </p>
            <div className="cta-buttons">
              <motion.a
                href="#enroll"
                className="primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enroll Now <FiArrowRight />
              </motion.a>
              <motion.a
                href="#curriculum"
                className="secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Curriculum
              </motion.a>
            </div>
            <div className="badges">
              <motion.span
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                🏆 Certificate Included
              </motion.span>
              <motion.span
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                💻 Hands-on Projects
              </motion.span>
              <motion.span
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                🤖 AI-Powered Learning
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What You'll Achieve in Just 4 Weeks
          </motion.h2>
          <motion.div
            className="benefits-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "🚀 Personal Portfolio Website",
                desc: "Build and deploy your own professional portfolio",
              },
              {
                title: "💡 Core Web Technologies",
                desc: "Master HTML, CSS, and JavaScript fundamentals",
              },
              {
                title: "🤖 AI Coding Assistant Skills",
                desc: "Learn to use ChatGPT, GitHub Copilot effectively",
              },
              {
                title: "🎁 GitHub Student Benefits",
                desc: "$1000+ worth of developer tools access",
              },
            ].map((benefit, index) => (
              <motion.div
                className="benefit-card"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                animate={{
                  background:
                    hoveredCard === index
                      ? "linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0.2) 100%)"
                      : "rgba(255, 255, 255, 1)",
                }}
              >
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <motion.div
                  className="card-highlight"
                  animate={{
                    width: hoveredCard === index ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Curriculum Section */}
      <section className="curriculum" id="curriculum">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Your 4-Week Journey
          </motion.h2>
          <motion.div
            className="weeks-accordion"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {weeks.map((week, index) => (
              <motion.div
                className={`week ${activeWeek === index ? "active" : ""}`}
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <motion.h3
                  onClick={() => toggleWeek(index)}
                  animate={{
                    background:
                      activeWeek === index
                        ? "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)"
                        : "linear-gradient(90deg, #f8fafc 0%, #f1f5f9 100%)",
                    color: activeWeek === index ? "white" : "#1e293b",
                  }}
                >
                  <div className="week-header">
                    {week.icon}
                    <span>
                      Week {index + 1}: {week.title}
                    </span>
                  </div>
                  <span className="toggle-icon">
                    {activeWeek === index ? "−" : "+"}
                  </span>
                </motion.h3>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeWeek === index ? "auto" : 0,
                    opacity: activeWeek === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <ul>
                    {week.topics.map((topic, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{
                          x: activeWeek === index ? 0 : -20,
                          opacity: activeWeek === index ? 1 : 0,
                        }}
                        transition={{ delay: i * 0.1 }}
                      >
                        ✅ {topic}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Deliverables Section */}
      <section className="deliverables">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What You'll Take Home
          </motion.h2>
          <motion.div
            className="deliverables-grid"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {deliverables.map((item, index) => (
              <motion.div
                className="deliverable-card"
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="deliverable-icon"
                  animate={{
                    rotate: hoveredCard === index ? [0, 10, -10, 0] : 0,
                    scale: hoveredCard === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {item.icon}
                </motion.div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
  <section className="enrollment-cta" id="enroll">
        <div className="cta-gradient"></div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Launch Your Web Dev Journey?</h2>
            <p>Limited seats available for June 2025 cohort</p>
            <form className="enrollment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              {submitted ? (
                <div className="success-message">
                  🎉 Thanks for signing up! We'll be in touch soon.
                </div>
              ) : (
                <button 
                  type="submit" 
                  className="primary-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Reserve Your Spot'} <FiArrowRight />
                </button>
              )}
            </form>
            <motion.div 
              className="bootcamp-details"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p><strong>🗓️ Duration:</strong> 4 Weeks (June 2025)</p>
              <p><strong>🕒 Time:</strong> 3 sessions/week (90 mins each)</p>
              <p><strong>📍 Location:</strong> Campus + WhatsApp Group Support</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BootcampLanding;