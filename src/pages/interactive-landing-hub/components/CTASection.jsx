import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const benefits = [
    {
      id: 1,
      icon: "Target",
      title: "94.2% Accuracy",
      description: "Validated across 15,000+ patient cases"
    },
    {
      id: 2,
      icon: "Zap",
      title: "Real-Time Results",
      description: "Analysis completed in under 3 seconds"
    },
    {
      id: 3,
      icon: "Shield",
      title: "HIPAA Compliant",
      description: "Enterprise-grade data security"
    },
    {
      id: 4,
      icon: "Users",
      title: "200+ Institutions",
      description: "Trusted by leading research centers"
    }
  ];

  const steps = [
    {
      id: 1,
      icon: "UserPlus",
      title: "Create Account",
      description: "Sign up for institutional access"
    },
    {
      id: 2,
      icon: "Upload",
      title: "Upload Data",
      description: "Securely submit genomic profiles"
    },
    {
      id: 3,
      icon: "Activity",
      title: "Get Analysis",
      description: "Receive precision predictions"
    },
    {
      id: 4,
      icon: "TrendingUp",
      title: "Optimize Care",
      description: "Implement personalized protocols"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-6">
            <Icon name="Rocket" size={16} color="var(--color-accent)" />
            <span className="text-xs md:text-sm font-medium text-accent">Start Your Journey</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Transform Cancer Care with
            <span className="block text-accent mt-2">Precision Genomic Analysis?</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join 200+ leading research institutions using OncoRisk to deliver personalized treatment strategies and improve patient outcomes through AI-powered genomic insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="FlaskConical"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="w-full sm:w-auto"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} color="var(--color-success)" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} color="var(--color-success)" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle2" size={16} color="var(--color-success)" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {benefits?.map((benefit) => (
            <div
              key={benefit?.id}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Icon name={benefit?.icon} size={24} color="var(--color-accent)" />
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">{benefit?.title}</div>
              <div className="text-sm text-muted-foreground">{benefit?.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get Started in 4 Simple Steps
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Begin your journey to precision oncology with our streamlined onboarding process designed for research institutions and clinical teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps?.map((step, index) => (
              <div key={step?.id} className="relative">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={step?.icon} size={28} color="var(--color-primary)" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                      {step?.id}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{step?.title}</h4>
                  <p className="text-sm text-muted-foreground">{step?.description}</p>
                </div>
                
                {index < steps?.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                      <Icon name="ChevronRight" size={16} color="var(--color-border)" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Need help getting started? Our team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="default"
                iconName="Mail"
                iconPosition="left"
              >
                Contact Sales
              </Button>
              <Button
                variant="ghost"
                size="default"
                iconName="BookOpen"
                iconPosition="left"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-secondary/50 border border-border rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Award" size={24} color="var(--color-success)" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Trusted by Leading Institutions
                </h4>
                <p className="text-sm text-muted-foreground">
                  Join Johns Hopkins, Mayo Clinic, MD Anderson, and 200+ other research centers using OncoRisk for precision oncology.
                </p>
              </div>
            </div>
            <Button
              variant="default"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
              className="w-full md:w-auto flex-shrink-0"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;  