import { useState, useEffect } from 'react'
import { 
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  BoltIcon,
  UserGroupIcon,
  LightBulbIcon,
  ChartPieIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  PlayIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'
import './App.css'

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('')
  const heroImages = ['/hero_bg_0.png', '/hero_bg_1.png']
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds
    
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Determine active section
      const sections = ['hero', 'why-corridor', 'programs', 'principles', 'approach', 'statistics', 'team', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className="app">
      <header className={`header ${scrollY > 50 ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <img src="/cgc_logo.png" alt="Corridor Group Consulting" className="logo-img" />
          </div>
          <nav className="nav">
            <a href="#why-corridor" className={activeSection === 'why-corridor' ? 'active' : ''}>Why Corridor</a>
            <a href="#programs" className={activeSection === 'programs' ? 'active' : ''}>Programs</a>
            <a href="#principles" className={activeSection === 'principles' ? 'active' : ''}>Principles</a>
            <a href="#approach" className={activeSection === 'approach' ? 'active' : ''}>Approach</a>
            <a href="#statistics" className={activeSection === 'statistics' ? 'active' : ''}>Results</a>
            <a href="#team" className={activeSection === 'team' ? 'active' : ''}>Team</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="hero-background">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="hero-overlay" />
        </div>
        <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <h1 className="hero-title">Building Tomorrow's Landmarks Today</h1>
          <h2>CLIENT-CENTERED | SOLUTIONS FOCUSED | RESULTS DRIVEN</h2>
          <p className="hero-description">
            We guide the complexity of your development with calm, confidence, and creativity.
          </p>
          <button className="cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Start Your Project <span className="arrow">→</span></button>
        </div>
      </section>

      <section id="why-corridor" className="why-corridor">
        <div className="container">
          <h2 className="section-heading">Why Corridor</h2>
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
          <h2 className="section-heading">Program Studies</h2>
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
          <h2 className="section-heading">Guiding Principles</h2>
          <p className="section-subtitle">Our approach is built on three core pillars that guide every decision and action we take.</p>
          <div className="principles-grid">
            <div className="principle-card" data-principle="client-centered">
              <div className="principle-icon">
                <UserGroupIcon className="icon" />
              </div>
              <h3>Client Centered</h3>
              <p className="principle-summary">We place our clients' vision, goals, and investment protection at the heart of every decision. By listening differently and understanding deeply, we ensure that every project milestone aligns with your strategic objectives.</p>
              <a href="#client-centered" className="principle-link">Learn More →</a>
            </div>
            <div className="principle-card" data-principle="solutions-focused">
              <div className="principle-icon">
                <LightBulbIcon className="icon" />
              </div>
              <h3>Solutions Focused</h3>
              <p className="principle-summary">We approach challenges with creativity and precision, drawing from collective intelligence to solve problems. Our team transforms complex puzzles into clear pathways forward.</p>
              <a href="#solutions-focused" className="principle-link">Learn More →</a>
            </div>
            <div className="principle-card" data-principle="results-driven">
              <div className="principle-icon">
                <ChartPieIcon className="icon" />
              </div>
              <h3>Results Driven</h3>
              <p className="principle-summary">We move with focused urgency and disciplined execution, ensuring projects are delivered on time, on budget, and aligned with your vision. Leadership and accountability drive our commitment to exceptional outcomes.</p>
              <a href="#results-driven" className="principle-link">Learn More →</a>
            </div>
          </div>
        </div>
      </section>

      <section id="approach" className="approach">
        <div className="container">
          <h2 className="section-heading">Our Approach</h2>
          <blockquote className="einstein-quote glass-quote">
            "We cannot solve our problems with the same thinking we used when we created them."
            <cite>— Albert Einstein</cite>
          </blockquote>
          <p className="approach-intro">
            Our Services are designed to support a gated investment review process, equipping ownership with the decision-making tools needed to confidently advance projects through each stage of Development.
          </p>
          <p className="approach-tagline">We guide the complexity of your development with calm, confidence, and creativity.</p>
          
          <div className="approach-showcase">
            <div className="phase-card glass-card">
              <div className="phase-left">
                <div className="phase-number">01</div>
                <div className="phase-icon">
                  <MagnifyingGlassIcon className="icon" />
                </div>
              </div>
              <div className="phase-right">
                <div className="phase-header">
                  <h3>Feasibility & Due Diligence</h3>
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
                <div className="phase-progress"></div>
              </div>
            </div>
            
            <div className="phase-card glass-card featured">
              <div className="phase-left">
                <div className="phase-number">02</div>
                <div className="phase-icon">
                  <DocumentTextIcon className="icon" />
                </div>
              </div>
              <div className="phase-right">
                <div className="phase-header">
                  <h3>Document & Develop</h3>
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
                <div className="phase-progress"></div>
              </div>
            </div>
            
            <div className="phase-card glass-card">
              <div className="phase-left">
                <div className="phase-number">03</div>
                <div className="phase-icon">
                  <PlayIcon className="icon" />
                </div>
              </div>
              <div className="phase-right">
                <div className="phase-header">
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
                <div className="phase-progress"></div>
              </div>
            </div>
            
            <div className="phase-card glass-card">
              <div className="phase-left">
                <div className="phase-number">04</div>
                <div className="phase-icon">
                  <TrophyIcon className="icon" />
                </div>
              </div>
              <div className="phase-right">
                <div className="phase-header">
                  <h3>Deliver & Transition</h3>
                </div>
                <div className="phase-content">
                  <div className="phase-methodology">
                    <h4>How We Finish</h4>
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
                <div className="phase-progress"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="statistics" className="statistics">
        <div className="container">
          <h2 className="stats-heading">Decades of Complex Real Estate Development</h2>
          <div className="stats-showcase">
            <div className="stat-card glass-card">
              <div className="stat-icon">
                <BuildingOffice2Icon className="icon" />
              </div>
              <div className="stat-content">
                <span className="stat-value">3M SF</span>
                <span className="stat-label">Square Feet Delivered</span>
                <div className="stat-bar"></div>
              </div>
            </div>
            <div className="stat-card glass-card featured">
              <div className="stat-icon">
                <CurrencyDollarIcon className="icon" />
              </div>
              <div className="stat-content">
                <span className="stat-value">$750M</span>
                <span className="stat-label">Developed Value</span>
                <div className="stat-bar"></div>
              </div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">
                <CurrencyDollarIcon className="icon" />
              </div>
              <div className="stat-content">
                <span className="stat-value">$130M</span>
                <span className="stat-label">Revenue Generated</span>
                <div className="stat-bar"></div>
              </div>
            </div>
            <div className="stat-card glass-card">
              <div className="stat-icon">
                <BoltIcon className="icon" />
              </div>
              <div className="stat-content">
                <span className="stat-value">55 MW</span>
                <span className="stat-label">Power Capacity Added</span>
                <div className="stat-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <div className="container">
          <h2 className="section-heading">Leadership Team</h2>
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
              <div className="member-left">
                <div className="member-image">
                  <img src="/joshua-hall.png" alt="Joshua Hall" />
                </div>
                <div className="member-credentials">
                  <div><strong>Education:</strong> B.S. & M.S. Structural Engineering, Vanderbilt University</div>
                  <div><strong>Expertise:</strong> Leadership & Delivery - 14 years at Cousins Properties</div>
                  <div><strong>Community:</strong> Lions Club International</div>
                </div>
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
              </div>
            </div>
            <div className="team-member">
              <div className="member-left">
                <div className="member-image">
                  <img src="/jason-hall.png" alt="Jason Hall" />
                </div>
                <div className="member-credentials">
                  <div><strong>Education:</strong> B.S. Engineering & MBA, Vanderbilt University</div>
                  <div><strong>Expertise:</strong> Preconstruction planning and operations</div>
                  <div><strong>Portfolio:</strong> Historic renovations to data centers</div>
                </div>
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
                  <p>701 Newhall<br/>
                  Nashville, TN 37206</p>
                </div>
                <div className="contact-item">
                  <h4>Contact</h4>
                  <p>Phone: (404) 293-6330<br/>
                  Email: joshua@corridorgroupconsulting.com</p>
                </div>
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
          <div className="footer-content glass-card">
            <div className="footer-brand">
              <img src="/cgc_logo.png" alt="Corridor Group Consulting" className="footer-logo" />
              <p>Development & Program Management Leadership</p>
              <p className="footer-tagline">Guiding complexity with calm, confidence, and creativity.</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Navigation</h4>
                <a href="#why-corridor">Why Corridor</a>
                <a href="#programs">Programs</a>
                <a href="#principles">Principles</a>
                <a href="#approach">Approach</a>
                <a href="#statistics">Results</a>
                <a href="#team">Team</a>
              </div>
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#approach">Feasibility & Due Diligence</a>
                <a href="#approach">Document & Develop</a>
                <a href="#approach">Execute & Oversee</a>
                <a href="#approach">Deliver & Transition</a>
              </div>
              <div className="footer-column">
                <h4>Contact Info</h4>
                <div className="contact-info-footer">
                  <p><strong>Office:</strong><br/>701 Newhall<br/>Nashville, TN 37206</p>
                  <p><strong>Phone:</strong><br/>(404) 293-6330</p>
                  <p><strong>Email:</strong><br/>joshua@corridorgroupconsulting.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Corridor Group Consulting. All rights reserved.</p>
            <p className="footer-note">Building Tomorrow's Landmarks Today</p>
          </div>
        </div>
        <div className="powered-by">
          <p>Powered by <a href="https://relentnet.com" target="_blank" rel="noopener noreferrer">RelentNet™</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App