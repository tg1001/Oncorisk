import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCenter = () => {
  const resources = [
    {
      category: "Implementation Guides",
      icon: "BookOpen",
      color: "var(--color-primary)",
      items: [
        {
          title: "Complete Implementation Checklist",
          description: "Step-by-step guide covering all phases from assessment to full deployment",
          format: "PDF",
          size: "2.4 MB",
          downloads: "3,245"
        },
        {
          title: "Technical Integration Manual",
          description: "Detailed API documentation and system integration specifications",
          format: "PDF",
          size: "5.1 MB",
          downloads: "2,891"
        },
        {
          title: "Security & Compliance Guide",
          description: "HIPAA compliance requirements and data security best practices",
          format: "PDF",
          size: "1.8 MB",
          downloads: "4,102"
        }
      ]
    },
    {
      category: "Training Materials",
      icon: "GraduationCap",
      color: "var(--color-accent)",
      items: [
        {
          title: "Clinical Staff Training Program",
          description: "Comprehensive training curriculum for healthcare professionals",
          format: "Video Series",
          size: "4 hours",
          downloads: "1,567"
        },
        {
          title: "Administrator Onboarding Guide",
          description: "Quick-start guide for system administrators and IT teams",
          format: "PDF",
          size: "3.2 MB",
          downloads: "2,234"
        },
        {
          title: "Best Practices Webinar Recording",
          description: "Expert insights on maximizing OncoRisk effectiveness",
          format: "Video",
          size: "90 min",
          downloads: "3,456"
        }
      ]
    },
    {
      category: "Case Studies",
      icon: "FileText",
      color: "var(--color-success)",
      items: [
        {
          title: "Memorial Healthcare Implementation",
          description: "How a 850-bed system achieved 98% satisfaction in 6 weeks",
          format: "PDF",
          size: "1.5 MB",
          downloads: "5,678"
        },
        {
          title: "Pacific Regional ROI Analysis",
          description: "Detailed financial impact study showing 35% cost reduction",
          format: "PDF",
          size: "2.1 MB",
          downloads: "4,890"
        },
        {
          title: "Multi-Site Deployment Strategy",
          description: "Enterprise-scale implementation across 12 facilities",
          format: "PDF",
          size: "3.4 MB",
          downloads: "2,345"
        }
      ]
    },
    {
      category: "Technical Documentation",
      icon: "Code2",
      color: "var(--color-warning)",
      items: [
        {
          title: "API Reference Documentation",
          description: "Complete REST API endpoint specifications and examples",
          format: "HTML",
          size: "Online",
          downloads: "8,901"
        },
        {
          title: "SDK Integration Libraries",
          description: "Pre-built libraries for Python, Java, and JavaScript",
          format: "ZIP",
          size: "12.5 MB",
          downloads: "1,234"
        },
        {
          title: "Troubleshooting Guide",
          description: "Common issues and solutions for technical teams",
          format: "PDF",
          size: "2.8 MB",
          downloads: "3,567"
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: "MessageCircle",
      title: "Live Chat Support",
      description: "Connect with our technical team instantly",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: "Phone",
      title: "Clinical Consultation",
      description: "Schedule a call with our medical experts",
      availability: "Business Hours",
      action: "Schedule Call"
    },
    {
      icon: "Mail",
      title: "Email Support",
      description: "Get detailed responses to complex queries",
      availability: "Response within 4 hours",
      action: "Send Email"
    },
    {
      icon: "Video",
      title: "Video Training",
      description: "Join live training sessions and webinars",
      availability: "Weekly Sessions",
      action: "View Schedule"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <Icon name="Library" size={18} color="var(--color-accent)" />
              <span className="text-sm md:text-base text-accent font-medium">Knowledge Base</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Implementation Resources
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive documentation, training materials, and support to ensure successful deployment
            </p>
          </div>

          <div className="space-y-8 mb-12 lg:mb-16">
            {resources?.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-secondary border-b border-border px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${category?.color}15` }}>
                      <Icon name={category?.icon} size={20} color={category?.color} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">{category?.category}</h3>
                  </div>
                </div>

                <div className="divide-y divide-border">
                  {category?.items?.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-6 hover:bg-muted/50 transition-colors duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div className="flex-1 space-y-2">
                          <h4 className="text-base md:text-lg font-semibold text-foreground">{item?.title}</h4>
                          <p className="text-sm text-muted-foreground">{item?.description}</p>
                          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="inline-flex items-center space-x-1">
                              <Icon name="FileType" size={14} />
                              <span>{item?.format}</span>
                            </span>
                            <span className="inline-flex items-center space-x-1">
                              <Icon name="HardDrive" size={14} />
                              <span>{item?.size}</span>
                            </span>
                            <span className="inline-flex items-center space-x-1">
                              <Icon name="Download" size={14} />
                              <span>{item?.downloads} downloads</span>
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="Download"
                          iconPosition="left"
                        >
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-lg p-8 md:p-10">
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Need Additional Support?
              </h3>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Our dedicated support team is here to help you every step of the way
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions?.map((option, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={option?.icon} size={24} color="var(--color-accent)" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{option?.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{option?.description}</p>
                  <p className="text-xs text-success mb-4">{option?.availability}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                  >
                    {option?.action}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;