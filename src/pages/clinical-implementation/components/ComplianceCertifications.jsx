import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ComplianceCertifications = () => {
  const certifications = [
  {
    icon: "Shield",
    title: "HIPAA Compliant",
    description: "Full compliance with Health Insurance Portability and Accountability Act",
    verified: "2026-01-15",
    authority: "U.S. Department of Health & Human Services"
  },
  {
    icon: "Lock",
    title: "SOC 2 Type II",
    description: "System and Organization Controls certification for security and availability",
    verified: "2025-12-20",
    authority: "American Institute of CPAs"
  },
  {
    icon: "FileCheck",
    title: "ISO 27001",
    description: "International standard for information security management systems",
    verified: "2025-11-10",
    authority: "International Organization for Standardization"
  },
  {
    icon: "Award",
    title: "FDA 510(k) Cleared",
    description: "Medical device clearance for clinical decision support software",
    verified: "2025-09-05",
    authority: "U.S. Food and Drug Administration"
  },
  {
    icon: "Globe",
    title: "GDPR Compliant",
    description: "General Data Protection Regulation compliance for EU data handling",
    verified: "2026-01-01",
    authority: "European Commission"
  },
  {
    icon: "CheckCircle2",
    title: "CAP Accredited",
    description: "College of American Pathologists laboratory accreditation",
    verified: "2025-10-18",
    authority: "College of American Pathologists"
  }];


  const securityFeatures = [
  {
    category: "Data Protection",
    features: [
    "End-to-end AES-256 encryption for data at rest and in transit",
    "Multi-factor authentication (MFA) for all user accounts",
    "Role-based access control (RBAC) with granular permissions",
    "Automated data backup with 99.99% durability guarantee"]

  },
  {
    category: "Network Security",
    features: [
    "TLS 1.3 encryption for all API communications",
    "DDoS protection and rate limiting on all endpoints",
    "Intrusion detection and prevention systems (IDS/IPS)",
    "Regular penetration testing by third-party security firms"]

  },
  {
    category: "Compliance Monitoring",
    features: [
    "Real-time audit logging of all system activities",
    "Automated compliance reporting and documentation",
    "Regular security assessments and vulnerability scanning",
    "24/7 security operations center (SOC) monitoring"]

  },
  {
    category: "Data Privacy",
    features: [
    "Patient data anonymization and de-identification",
    "Configurable data retention policies per jurisdiction",
    "Right to erasure (GDPR Article 17) implementation",
    "Data processing agreements (DPA) with all partners"]

  }];


  const auditReports = [
  {
    title: "2025 Annual Security Audit",
    date: "2025-12-15",
    auditor: "Deloitte Cyber Risk Services",
    result: "No Critical Findings",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_165029560-1764799559276.png",
    imageAlt: "Professional business document with security audit report showing compliance checkmarks and official stamps on white paper with blue accents"
  },
  {
    title: "HIPAA Compliance Assessment",
    date: "2026-01-10",
    auditor: "Healthcare Compliance Pros",
    result: "Fully Compliant",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_187c32f31-1764673548953.png",
    imageAlt: "Healthcare compliance documentation with HIPAA certification seal and medical symbols on official letterhead with blue and white color scheme"
  },
  {
    title: "Penetration Testing Report",
    date: "2025-11-28",
    auditor: "CyberSec Solutions",
    result: "All Vulnerabilities Resolved",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e7b6b6fd-1767656198072.png",
    imageAlt: "Cybersecurity testing report with network diagrams and vulnerability assessment charts showing green checkmarks and security metrics on dark background"
  }];


  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
              <Icon name="ShieldCheck" size={18} color="var(--color-success)" />
              <span className="text-sm md:text-base text-success font-medium">Security & Compliance</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Certifications & Security Standards
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading security protocols and regulatory compliance to protect your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 lg:mb-16">
            {certifications?.map((cert, index) =>
            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:border-success/50 transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={cert?.icon} size={24} color="var(--color-success)" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{cert?.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert?.description}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Verified:</span>
                    <span className="text-foreground font-medium">{new Date(cert.verified)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{cert?.authority}</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-card border border-border rounded-lg p-8 md:p-10 mb-12 lg:mb-16">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Comprehensive Security Framework
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityFeatures?.map((section, index) =>
              <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Lock" size={18} color="var(--color-primary)" />
                    </div>
                    <h4 className="text-base md:text-lg font-semibold text-foreground">{section?.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {section?.features?.map((feature, featureIndex) =>
                  <li key={featureIndex} className="flex items-start space-x-3">
                        <Icon name="CheckCircle2" size={16} color="var(--color-success)" className="flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                  )}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
              Recent Audit Reports
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {auditReports?.map((report, index) =>
              <div key={index} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300">
                  <div className="aspect-video w-full overflow-hidden bg-muted">
                    <Image
                    src={report?.image}
                    alt={report?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{report?.title}</h4>
                      <p className="text-sm text-muted-foreground">{report?.auditor}</p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {new Date(report.date)?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2 py-1 bg-success/10 border border-success/20 rounded-full text-xs text-success">
                        <Icon name="CheckCircle2" size={12} />
                        <span>{report?.result}</span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ComplianceCertifications;