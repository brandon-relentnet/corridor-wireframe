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
            <a href="#approach">Approach</a>
            <a href="#programs">Programs</a>
            <a href="#principles">Principles</a>
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
            We guide the complexity of your development with calm, confidence, and creativity.
          </p>
          <button className="cta-button">Start Your Project <span className="arrow">→</span></button>
        </div>
      </section>

      <section className="why-corridor">
        <div className="container">
          <h2>Why Corridor</h2>
          <p className="why-intro">
            Our principals bring over 50 years of combined experience leading commercial and mixed-use development — from master planning and entitlement to delivery and operational readiness. We act as translators of vision, protectors of capital, and facilitators of forward motion.
          </p>
          <p className="why-detailed">
            Every real estate development is unique and requires that we articulate the vision for the project within the physical, municipal and market constraints that must be navigated. Through decades of successful implementation of projects we have learned to listen through the eyes of our stakeholders, solve problems creatively and lead teams confidently through the complexity of high-stakes real estate projects.
          </p>
          <div className="quote-banner">
            <blockquote>
              "Out of clutter, find simplicity. From discord, find harmony. In the middle of difficulty lies opportunity."
              <cite>— Albert Einstein</cite>
            </blockquote>
          </div>
        </div>
      </section>


      <section id="programs" className="program-studies">
        <div className="container">
          <h2>Program Studies</h2>
          <p className="section-subtitle">Demonstrating our complementary expertise and proven process through transformative developments</p>
          <div className="program-grid">
            <div className="program-card">
              <div className="program-header">
                <h3>Hyperscale Program Delivery</h3>
                <span className="program-location">Quanta Manufacturing Nashville</span>
              </div>
              <div className="program-metrics">
                <div className="metric">
                  <span className="metric-value">4 Years</span>
                  <span className="metric-label">Duration</span>
                </div>
                <div className="metric">
                  <span className="metric-value">7 Facilities</span>
                  <span className="metric-label">Delivered</span>
                </div>
                <div className="metric">
                  <span className="metric-value">$130M+</span>
                  <span className="metric-label">Investment</span>
                </div>
                <div className="metric">
                  <span className="metric-value">55MW</span>
                  <span className="metric-label">Added Capacity</span>
                </div>
              </div>
              <p className="program-description">
                Over a four-year period, Corridor Group leadership directed seven major facility conversions, expansions, and retrofits for the world's largest server manufacturer, serving hyperscale clients such as Google, AWS, and Microsoft. This multi-phase program transformed more than 600,000 SF of logistics and manufacturing space into high-density, AI-ready testing environments, all while maintaining full production.
              </p>
              <div className="program-highlights">
                <h4>Key Achievements</h4>
                <ul>
                  <li>12,248 tons of installed cooling capacity</li>
                  <li>74 PODs delivered or upgraded</li>
                  <li>Zero operational downtime during construction</li>
                  <li>8-10 month average NTP-to-handoff schedule</li>
                </ul>
              </div>
              <div className="program-quote">
                <p>"We leverage the collective intelligence of our trusted design consultant, vendor and subcontractor networks to compress schedules and solve integration challenges in real time."</p>
              </div>
              <a href="#hyperscale" className="program-link">Read Full Case Study →</a>
            </div>
            
            <div className="program-card">
              <div className="program-header">
                <h3>Mixed-Use Development Program</h3>
                <span className="program-location">Urban Infill & Institutional Partnerships</span>
              </div>
              <div className="program-metrics">
                <div className="metric">
                  <span className="metric-value">10+ Years</span>
                  <span className="metric-label">Experience</span>
                </div>
                <div className="metric">
                  <span className="metric-value">3M+ SF</span>
                  <span className="metric-label">Delivered</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Multiple</span>
                  <span className="metric-label">P3 Structures</span>
                </div>
                <div className="metric">
                  <span className="metric-value">3 Cities</span>
                  <span className="metric-label">Southeast</span>
                </div>
              </div>
              <p className="program-description">
                Over more than a decade, Corridor Group leadership has directed the delivery of multiple high-profile urban infill and mixed-use development programs involving municipalities, universities, healthcare institutions, corporate headquarters, and private investment partners. These multi-phase, multi-stakeholder initiatives transformed underutilized urban sites into vibrant, high-impact destinations.
              </p>
              <div className="program-highlights">
                <h4>Representative Projects</h4>
                <ul>
                  <li><strong>120 West Trinity (Decatur, GA):</strong> 330 apartments, 33,000 SF office, 19,000 SF retail</li>
                  <li><strong>Carolina Square (Chapel Hill, NC):</strong> 246 apartments, 160,000 SF office, 43,000 SF retail</li>
                  <li><strong>Emory Point (Atlanta, GA):</strong> 750 units, 125,000 SF retail</li>
                </ul>
              </div>
              <div className="program-quote">
                <p>"We maintain calm, confident leadership with focused urgency — protecting investment, preserving vision, and delivering assets that endure."</p>
              </div>
              <a href="#mixed-use" className="program-link">Read Full Case Study →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="principles" className="guiding-principles">
        <div className="container">
          <h2>Guiding Principles</h2>
          <p className="section-subtitle">Our approach is built on three core pillars that guide every decision and action we take.</p>
          <div className="principles-grid">
            <div className="principle-card" data-principle="client-centered">
              <div className="principle-icon">[ICON: People/Client]</div>
              <h3>Client Centered</h3>
              <p className="principle-summary">We place our clients' vision, goals, and investment protection at the heart of every decision. By listening differently and understanding deeply, we ensure that every project milestone aligns with your strategic objectives.</p>
              <a href="#client-centered" className="principle-link">Learn More →</a>
            </div>
            <div className="principle-card" data-principle="solutions-focused">
              <div className="principle-icon">[ICON: Lightbulb/Solution]</div>
              <h3>Solutions Focused</h3>
              <p className="principle-summary">We approach challenges with creativity and precision, drawing from collective intelligence to solve problems. Our team transforms complex puzzles into clear pathways forward.</p>
              <a href="#solutions-focused" className="principle-link">Learn More →</a>
            </div>
            <div className="principle-card" data-principle="results-driven">
              <div className="principle-icon">[ICON: Target/Results]</div>
              <h3>Results Driven</h3>
              <p className="principle-summary">We move with focused urgency and disciplined execution, ensuring projects are delivered on time, on budget, and aligned with your vision. Leadership and accountability drive our commitment to exceptional outcomes.</p>
              <a href="#results-driven" className="principle-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="approach">
        <div className="container">
          <h2>Our Approach</h2>
          <p className="approach-intro">
            Our Services are designed to support a gated investment review process, equipping ownership with the decision-making tools needed to confidently advance projects through each stage of Development.
          </p>
          <p className="approach-tagline">We guide the complexity of your development with calm, confidence, and creativity.</p>
          
          <div className="approach-phases">
            <div className="phase-section">
              <div className="phase-header">
                <span className="phase-number">01</span>
                <h3>Discovery & Due Diligence</h3>
              </div>
              <div className="phase-content">
                <div className="phase-methodology">
                  <h4>How We Listen</h4>
                  <p>We begin by deeply understanding your vision and translating it into actionable strategies. Listening differently to identify opportunities and constraints early in the process.</p>
                </div>
                <div className="phase-deliverables">
                  <h4>What We Deliver</h4>
                  <ul>
                    <li>Market analysis and site evaluation</li>
                    <li>Feasibility studies and financial modeling</li>
                    <li>Zoning and entitlement assessment</li>
                    <li>Risk identification and mitigation planning</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="phase-section">
              <div className="phase-header">
                <span className="phase-number">02</span>
                <h3>Structure & Pre-Development</h3>
              </div>
              <div className="phase-content">
                <div className="phase-methodology">
                  <h4>How We Organize</h4>
                  <p>Creating frameworks that align stakeholders, optimize resources, and establish clear pathways from concept to completion.</p>
                </div>
                <div className="phase-deliverables">
                  <h4>What We Deliver</h4>
                  <ul>
                    <li>Design team selection and management</li>
                    <li>Budgeting and cost control systems</li>
                    <li>Permit strategy and municipal coordination</li>
                    <li>Preconstruction planning and value engineering</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="phase-section">
              <div className="phase-header">
                <span className="phase-number">03</span>
                <h3>Execute & Oversee</h3>
              </div>
              <div className="phase-content">
                <div className="phase-methodology">
                  <h4>How We Lead</h4>
                  <p>Implementing with precision while maintaining flexibility to adapt as projects evolve, always protecting your investment with confident leadership.</p>
                </div>
                <div className="phase-deliverables">
                  <h4>What We Deliver</h4>
                  <ul>
                    <li>Construction administration and quality control</li>
                    <li>Schedule management and milestone tracking</li>
                    <li>Stakeholder communication and reporting</li>
                    <li>Design optimization and change management</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="phase-section">
              <div className="phase-header">
                <span className="phase-number">04</span>
                <h3>Deliver & Transition</h3>
              </div>
              <div className="phase-content">
                <div className="phase-methodology">
                  <h4>How We Complete</h4>
                  <p>Ensuring seamless handoff and operational readiness, with assets built to endure and perform for long-term success.</p>
                </div>
                <div className="phase-deliverables">
                  <h4>What We Deliver</h4>
                  <ul>
                    <li>Project close-out and warranty coordination</li>
                    <li>Operations transition planning</li>
                    <li>Asset management setup and documentation</li>
                    <li>Performance monitoring and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <h2>Leadership Team</h2>
          <div className="team-intro">
            <p>
              Our leadership team brings a combined 50+ years of experience across institutional, 
              commercial, and mixed-use real estate development. We lead confidently through complexity, 
              solving creatively and listening differently to deliver exceptional outcomes.
            </p>
            <blockquote className="team-quote">
              "Strive not to be a success, but rather to be of value."
              <cite>— Albert Einstein</cite>
            </blockquote>
          </div>
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
                <h4>Our Approach</h4>
                <a href="#">Discovery & Due Diligence</a>
                <a href="#">Structure & Pre-Development</a>
                <a href="#">Execute & Oversee</a>
                <a href="#">Deliver & Transition</a>
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