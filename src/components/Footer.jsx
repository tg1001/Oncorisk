import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const navigationLinks = [
    { path: '/interactive-landing-hub', label: 'Home' },
    { path: '/development-performance', label: 'Model Performance' },
    { path: '/clinical-implementation', label: 'Clinical Implementation' },
    { path: '/research-publications', label: 'Research Publications' },
  ];

  const resourceLinks = [
    { path: '/documentation', label: 'Documentation' },
    { path: '/methodology', label: 'Methodology' },
    { path: '/gene-database', label: 'Gene Database' },
    { path: '/api-access', label: 'API Access' },
  ];

  const companyLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/team', label: 'Research Team' },
    { path: '/partnerships', label: 'Partnerships' },
    { path: '/careers', label: 'Careers' },
  ];

  const legalLinks = [
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/data-security', label: 'Data Security' },
  ];

  const socialLinks = [
    { name: 'Github', icon: 'Github', url: 'https://github.com' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
    { name: 'Linkedin', icon: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Mail', icon: 'Mail', url: 'mailto:research@oncorisk.ai' },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/interactive-landing-hub" className="footer-logo-link">
              <div className="footer-logo-icon">
                <Icon name="Dna" size={24} color="var(--color-accent)" />
              </div>
              <span className="footer-logo-text">OncoRisk</span>
            </Link>
            <p className="footer-description">
              Advanced AI-powered genomic analysis platform for precision oncology research. 
              Transforming complex genetic data into actionable clinical insights.
            </p>
            <div className="footer-social">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
            <div className="footer-trust-badges">
              <div className="footer-trust-badge">
                <Icon name="Shield" size={16} color="var(--color-success)" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="footer-trust-badge">
                <Icon name="Award" size={16} color="var(--color-success)" />
                <span>Peer Reviewed</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Platform</h3>
            <nav className="footer-links">
              {navigationLinks?.map((link) => (
                <Link key={link?.path} to={link?.path} className="footer-link">
                  {link?.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Resources</h3>
            <nav className="footer-links">
              {resourceLinks?.map((link) => (
                <Link key={link?.path} to={link?.path} className="footer-link">
                  {link?.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <nav className="footer-links">
              {companyLinks?.map((link) => (
                <Link key={link?.path} to={link?.path} className="footer-link">
                  {link?.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © {currentYear} OncoRisk. All rights reserved. Trusted by 200+ research institutions worldwide.
          </p>
          <nav className="footer-bottom-links">
            {legalLinks?.map((link) => (
              <Link key={link?.path} to={link?.path} className="footer-bottom-link">
                {link?.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;