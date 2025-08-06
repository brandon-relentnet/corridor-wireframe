import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <img src="/cgc_logo.png" alt="Corridor Group Consulting" className="logo-img" />
          </div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-background">
          <div className="hero-image-placeholder">
            [HERO IMAGE: Modern commercial building or construction site]
          </div>
        </div>
        <div className="hero-content">
          <h1>Building Tomorrow's Landmarks Today</h1>
          <h2>CLIENT-CENTERED | SOLUTIONS FOCUSED | RESULTS DRIVEN</h2>
          <p className="hero-description">
            At Corridor Group Consulting, we guide real estate development projects through our 
            commitment to protecting our clients' investments and aligning every decision with their vision.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <h3>3M+</h3>
              <p>Square Feet Delivered</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Years Combined Experience</p>
            </div>
            <div className="stat">
              <h3>$XXM</h3>
              <p>[PLACEHOLDER: Total Project Value]</p>
            </div>
          </div>
          <button className="cta-button">Start Your Project <span className="arrow">→</span></button>
        </div>
      </section>

      <section className="trust-indicators">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">[ICON: Building]</div>
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">[ICON: Award]</div>
              <h3>15+</h3>
              <p>Industry Awards</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">[ICON: Handshake]</div>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">[ICON: Clock]</div>
              <h3>100%</h3>
              <p>On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">[PLACEHOLDER: Add 3-4 signature projects that showcase your expertise]</p>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                [PROJECT IMAGE: Mixed-use development]
              </div>
              <div className="project-content">
                <h3>[PROJECT NAME: Midtown Mixed-Use Complex]</h3>
                <p className="project-type">Mixed-Use Development</p>
                <p className="project-details">[PLACEHOLDER: 250,000 SF mixed-use development featuring retail, office, and residential components]</p>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                [PROJECT IMAGE: Corporate headquarters]
              </div>
              <div className="project-content">
                <h3>[PROJECT NAME: Corporate Headquarters]</h3>
                <p className="project-type">Commercial Office</p>
                <p className="project-details">[PLACEHOLDER: 500,000 SF Class A office building with LEED Gold certification]</p>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                [PROJECT IMAGE: Retail center]
              </div>
              <div className="project-content">
                <h3>[PROJECT NAME: Regional Retail Center]</h3>
                <p className="project-type">Retail Development</p>
                <p className="project-details">[PLACEHOLDER: 180,000 SF lifestyle center with national and local tenants]</p>
                <a href="#" className="project-link">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2>The Corridor Difference</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">[ICON: Ear/Listen]</div>
              <h4>We Listen Differently</h4>
              <p>Projects are evolving puzzles. We pursue questions with a deep sense of curiosity, turning insight into clarity and clarity into action.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">[ICON: People/Team]</div>
              <h4>Stakeholder Focused</h4>
              <p>Every choice reflects the interests of all project stakeholders.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">[ICON: Chat/Communication]</div>
              <h4>Transparent Communication</h4>
              <p>We build trust through honesty, clear direction, and collaboration.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">[ICON: Brain/Intelligence]</div>
              <h4>Collective Intelligence</h4>
              <p>We draw from the strengths of our teams to solve problems with precision.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">[ICON: Shield/Protection]</div>
              <h4>Risk Management</h4>
              <p>We identify, assess, and mitigate risk at every step.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">[ICON: Target/Focus]</div>
              <h4>Focused Urgency</h4>
              <p>We move with purpose and discipline, not pressure.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>OUR SERVICES</h2>
          <p className="services-intro">
            We support a gated investment process, equipping ownership with thorough risk assessments 
            to confidently advance projects from one phase of the development process to the next.
          </p>
          <div className="services-timeline">
            <div className="service-item">
              <div className="service-number">01</div>
              <div className="service-content">
                <h3>Due Diligence</h3>
                <p>Feasibility, entitlement, underwriting</p>
                <ul className="service-details">
                  <li>[PLACEHOLDER: Market analysis and site evaluation]</li>
                  <li>[PLACEHOLDER: Zoning and entitlement assessment]</li>
                  <li>[PLACEHOLDER: Financial modeling and ROI projections]</li>
                </ul>
              </div>
              <div className="service-image">
                [SERVICE IMAGE: Team reviewing documents]
              </div>
            </div>
            <div className="service-item reverse">
              <div className="service-number">02</div>
              <div className="service-content">
                <h3>Pre-Development</h3>
                <p>Design team management, budgeting, permitting & preconstruction</p>
                <ul className="service-details">
                  <li>[PLACEHOLDER: Architect and consultant selection]</li>
                  <li>[PLACEHOLDER: Conceptual design and value engineering]</li>
                  <li>[PLACEHOLDER: Permit strategy and municipal coordination]</li>
                </ul>
              </div>
              <div className="service-image">
                [SERVICE IMAGE: Architectural plans]
              </div>
            </div>
            <div className="service-item">
              <div className="service-number">03</div>
              <div className="service-content">
                <h3>Execution</h3>
                <p>Construction oversight, stakeholder alignment</p>
                <ul className="service-details">
                  <li>[PLACEHOLDER: Construction administration]</li>
                  <li>[PLACEHOLDER: Quality control and schedule management]</li>
                  <li>[PLACEHOLDER: Stakeholder communication and reporting]</li>
                </ul>
              </div>
              <div className="service-image">
                [SERVICE IMAGE: Construction site]
              </div>
            </div>
            <div className="service-item reverse">
              <div className="service-number">04</div>
              <div className="service-content">
                <h3>Stabilization</h3>
                <p>Close-out & operational readiness</p>
                <ul className="service-details">
                  <li>[PLACEHOLDER: Punch list and warranty coordination]</li>
                  <li>[PLACEHOLDER: Operations transition planning]</li>
                  <li>[PLACEHOLDER: Asset management setup]</li>
                </ul>
              </div>
              <div className="service-image">
                [SERVICE IMAGE: Completed building]
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2>Our Process</h2>
          <p className="section-subtitle">[PLACEHOLDER: Describe your unique approach to project management]</p>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery</h3>
              <p>[PLACEHOLDER: Initial consultation and project assessment]</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Strategy</h3>
              <p>[PLACEHOLDER: Develop comprehensive project roadmap]</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execute</h3>
              <p>[PLACEHOLDER: Implement plan with precision and accountability]</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Deliver</h3>
              <p>[PLACEHOLDER: Complete project on time and within budget]</p>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <h2>Leadership Team</h2>
          <p className="team-intro">
            Our leadership team brings a combined 50+ years of experience across institutional, 
            commercial, and mixed-use real estate development.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                [TEAM IMAGE: Joshua Hall professional headshot]
              </div>
              <div className="member-content">
                <h3>Joshua Hall</h3>
                <h4>Co-Founder</h4>
                <p className="member-tagline">Strategic. Steady. Stakeholder-focused.</p>
                <p className="member-bio">
                  Joshua brings 25 years of experience leading the development of high-impact real estate 
                  across a wide range of product types. With over 3 million square feet delivered across 
                  the Southeast and beyond, he's not just a developer—he's a builder of trust, consensus, 
                  and momentum.
                </p>
                <p className="member-credentials">
                  <strong>Education:</strong> B.S. & M.S. Structural Engineering, Vanderbilt University<br/>
                  <strong>Background:</strong> 14 years at Cousins Properties<br/>
                  <strong>Community:</strong> Lions Club International
                </p>
              </div>
            </div>
            <div className="team-member">
              <div className="member-image">
                [TEAM IMAGE: Jason Hall professional headshot]
              </div>
              <div className="member-content">
                <h3>Jason Hall</h3>
                <h4>Founder & President</h4>
                <p className="member-tagline">Builder. Listener. Field-tested and family-first.</p>
                <p className="member-bio">
                  Jason has spent nearly 30 years building—teams, trust, and projects that span the 
                  spectrum from historic renovations to cutting-edge data centers. His experience runs 
                  deep in Middle Tennessee and across the U.S., including Georgia, DC, Florida, Texas, 
                  Oregon, and beyond.
                </p>
                <p className="member-credentials">
                  <strong>Education:</strong> B.S. Engineering & MBA, Vanderbilt University<br/>
                  <strong>Expertise:</strong> Preconstruction planning and operations<br/>
                  <strong>Portfolio:</strong> Historic renovations to data centers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications">
        <div className="container">
          <h2>Certifications & Memberships</h2>
          <div className="cert-grid">
            <div className="cert-item">
              [LOGO: LEED AP]<br/>
              <span>[PLACEHOLDER: LEED Accredited Professional]</span>
            </div>
            <div className="cert-item">
              [LOGO: ABC]<br/>
              <span>[PLACEHOLDER: Associated Builders and Contractors]</span>
            </div>
            <div className="cert-item">
              [LOGO: NAIOP]<br/>
              <span>[PLACEHOLDER: Commercial Real Estate Development Association]</span>
            </div>
            <div className="cert-item">
              [LOGO: ULI]<br/>
              <span>[PLACEHOLDER: Urban Land Institute]</span>
            </div>
            <div className="cert-item">
              [LOGO: Chamber]<br/>
              <span>[PLACEHOLDER: Nashville Chamber of Commerce]</span>
            </div>
          </div>
        </div>
      </section>

      <section className="insights">
        <div className="container">
          <h2>Latest Insights</h2>
          <p className="section-subtitle">[PLACEHOLDER: Stay informed with our latest thoughts on real estate development trends]</p>
          <div className="insights-grid">
            <article className="insight-card">
              <div className="insight-image">[ARTICLE IMAGE: Development Trends]</div>
              <div className="insight-content">
                <span className="insight-date">[DATE: March 15, 2024]</span>
                <h3>[TITLE: Navigating 2024 Development Challenges]</h3>
                <p>[PREVIEW: Understanding market shifts and adapting strategies for successful project delivery in today's environment...]</p>
                <a href="#" className="insight-link">Read More →</a>
              </div>
            </article>
            <article className="insight-card">
              <div className="insight-image">[ARTICLE IMAGE: Sustainable Building]</div>
              <div className="insight-content">
                <span className="insight-date">[DATE: March 10, 2024]</span>
                <h3>[TITLE: The ROI of Sustainable Development]</h3>
                <p>[PREVIEW: How green building practices are driving value and attracting premium tenants in commercial real estate...]</p>
                <a href="#" className="insight-link">Read More →</a>
              </div>
            </article>
            <article className="insight-card">
              <div className="insight-image">[ARTICLE IMAGE: Mixed-Use Planning]</div>
              <div className="insight-content">
                <span className="insight-date">[DATE: March 5, 2024]</span>
                <h3>[TITLE: Mixed-Use Development Best Practices]</h3>
                <p>[PREVIEW: Creating vibrant communities through thoughtful integration of residential, retail, and office spaces...]</p>
                <a href="#" className="insight-link">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>Client Success Stories</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <div className="quote">"[PLACEHOLDER: Corridor Group's attention to detail and proactive communication made our $50M development project seamless from start to finish.]"</div>
              <div className="testimonial-author">
                <div className="author-image">[CLIENT IMAGE]</div>
                <div>
                  <p className="author-name">[CLIENT NAME]</p>
                  <p className="author-title">[CEO, Development Company]</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="quote">"[PLACEHOLDER: Their risk management approach saved us significant time and money during the entitlement process.]"</div>
              <div className="testimonial-author">
                <div className="author-image">[CLIENT IMAGE]</div>
                <div>
                  <p className="author-name">[CLIENT NAME]</p>
                  <p className="author-title">[Principal, Investment Firm]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Ready to Navigate Complexity?</h2>
              <p>Let us help you deliver successful outcomes—on time, on budget, and aligned with your vision.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <h4>Office</h4>
                  <p>[PLACEHOLDER: 123 Main Street, Suite 100]<br/>
                  [Nashville, TN 37201]</p>
                </div>
                <div className="contact-item">
                  <h4>Contact</h4>
                  <p>Phone: [PLACEHOLDER: (615) 555-0100]<br/>
                  Email: [PLACEHOLDER: info@corridorgroup.com]</p>
                </div>
              </div>
              <div className="map-placeholder">
                [MAP: Interactive Google Map showing office location in Nashville]<br/>
                <small>[PLACEHOLDER: Embed interactive map with office pin]</small>
              </div>
            </div>
            <div className="contact-form">
              <h3>Get Started</h3>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
                <select>
                  <option>Project Type</option>
                  <option>Mixed-Use Development</option>
                  <option>Commercial Office</option>
                  <option>Retail</option>
                  <option>Multifamily</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Tell us about your project" rows="4"></textarea>
                <button type="submit" className="cta-button">Send Message <span className="arrow">→</span></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/cgc_logo.png" alt="Corridor Group Consulting" className="footer-logo" />
              <p>Development & Program Management Leadership</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#">Due Diligence</a>
                <a href="#">Pre-Development</a>
                <a href="#">Execution</a>
                <a href="#">Stabilization</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Leadership</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <a href="#">LinkedIn</a>
                <a href="#">[PLACEHOLDER: Twitter]</a>
                <a href="#">[PLACEHOLDER: Instagram]</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Corridor Group Consulting. All rights reserved.</p>
            <p>[PLACEHOLDER: Privacy Policy | Terms of Service]</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App