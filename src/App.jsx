import { useState } from 'react'
import './App.css'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We have received your message.");
  };

  return (
    <div className="container">
      
      <nav className="navbar">
        <div className="logo">Nexus AI</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Solutions</a></li>
          <li><a href="#about">Company</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="hero-section">
        <div className="hero-content">
          <h1>Intelligent Data Solutions for Tomorrow</h1>
          <p>We help businesses unlock the power of Artificial Intelligence and Machine Learning to drive growth and efficiency.</p>
          <div className="button-group">
            <button className="btn primary" onClick={() => window.location.href='#contact'}>Start a Project</button>
            <button className="btn secondary" onClick={() => window.location.href='#services'}>View Services</button>
          </div>
        </div>
      </header>

      <section id="services" className="section">
        <h2 className="section-title">Our Expertise</h2>
        <div className="grid-3">
          <div className="card">
            <h3>AI Consulting</h3>
            <p>Custom artificial intelligence strategies tailored to automate your workflows and increase productivity.</p>
          </div>
          <div className="card">
            <h3>Data Analytics</h3>
            <p>Transform raw data into actionable insights with our advanced predictive modeling and visualization tools.</p>
          </div>
          <div className="card">
            <h3>Web Development</h3>
            <p>Building robust, scalable, and responsive web applications that integrate seamlessly with your data infrastructure.</p>
          </div>
        </div>
      </section>

      <section id="about" className="section bg-light">
        <div className="flex-row">
          <div className="text-col">
            <h2>Why Choose Nexus AI?</h2>
            <p>Founded in 2024, Nexus AI bridges the gap between complex data science and practical business applications. We believe technology should solve real-world problems.</p>
            <p>Our team consists of industry veterans in Machine Learning, Full-Stack Development, and Cloud Architecture.</p>
            <br />
            <strong>Trusted by over 50+ enterprise clients.</strong>
          </div>
          <div className="image-col">
            <img src="https://placehold.co/600x400/213547/FFF?text=Data+Strategy+Meeting" alt="Team meeting" />
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2 className="section-title">Let's Collaborate</h2>
        <p style={{textAlign: 'center', marginBottom: '20px'}}>Ready to transform your business? Send us a message below.</p>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Business Email" required />
          <select style={{padding: '12px', border: '1px solid #ddd', borderRadius: '4px'}}>
            <option>General Inquiry</option>
            <option>Request a Quote</option>
            <option>Career Opportunities</option>
          </select>
          <textarea placeholder="Tell us about your project needs..." rows="5" required></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Nexus AI Solutions. </p>
        <p style={{fontSize: '0.8rem', opacity: 0.7}}>Developed by Tanushree</p>
      </footer>

    </div>
  )
}

export default App