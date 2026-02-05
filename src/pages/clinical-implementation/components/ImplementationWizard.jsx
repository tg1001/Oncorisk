import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ImplementationWizard = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Compact clinical + genomic inputs",
      description: "Evaluate your current infrastructure and define implementation goals",
      icon: "ClipboardList",
      duration: "1-2 weeks",
      tasks: [
        "Pt 1",
        "Pt 2"
        // "Security and compliance review (HIPAA, GDPR)",
        // "Resource allocation and timeline planning"
      ]
    },
    {
      id: 2,
      title: "Dual survival modeling ",
      description: "Model uses (Cox + Random Survival Forests)",
      icon: "Settings",
      duration: "2-3 weeks",
      tasks: [
        "Cox is primary Database",
        "Radndom forest is additional model"
        // "Network configuration and firewall rules",
        // "Testing environment deployment"
      ]
    },
    {
      id: 3,
      title: "Agreement vs divergence as uncertainty signal",
      description: "Train clinical staff and validate system accuracy",
      icon: "GraduationCap",
      duration: "1-2 weeks",
      tasks: [
        "pt1",
        "pt2",
        
        "pt3"
      ]
    },
    {
      id: 4,
      title: "Interpretable survival structure, not black-box scores",
      description: "model has a survial structure",
      icon: "Rocket",
      duration: "2-4 weeks",
      tasks: [
        "P1",
        "p2",
        "P3"
      ]
    },
    {
      id: 5,
      title: "Interpretable survival structure, not black-box scores",
      description: "Scale implementation across entire healthcare system",
      icon: "Building2",
      duration: "Ongoing",
      tasks: [
        "ab",
        "abch",
        
        "p3"
      ]
    }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleNext = () => {
    if (activeStep < steps?.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="Route" size={18} color="var(--color-primary)" />
              <span className="text-sm md:text-base text-primary font-medium">Step-by-Step Guide</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              MAP
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              A step by step explanation of model training from input to result
            </p>
          </div>

          <div className="mb-8 lg:mb-12">
            <div className="flex items-center justify-between overflow-x-auto pb-4">
              {steps?.map((step, index) => (
                <React.Fragment key={step?.id}>
                  <button
                    onClick={() => handleStepClick(index)}
                    className={`flex flex-col items-center min-w-[80px] md:min-w-[120px] transition-all duration-300 ${
                      index === activeStep ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                        index === activeStep
                          ? 'bg-accent text-accent-foreground'
                          : index < activeStep
                          ? 'bg-success text-success-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {index < activeStep ? (
                        <Icon name="Check" size={24} />
                      ) : (
                        <Icon name={step?.icon} size={24} />
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-center">{step?.title}</span>
                  </button>
                  {index < steps?.length - 1 && (
                    <div className="flex-1 h-0.5 bg-border mx-2 md:mx-4 min-w-[20px]">
                      <div
                        className={`h-full transition-all duration-300 ${
                          index < activeStep ? 'bg-success' : 'bg-transparent'
                        }`}
                      ></div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 md:p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              <div className="flex-shrink-0 mb-6 lg:mb-0">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name={steps?.[activeStep]?.icon} size={40} color="var(--color-accent)" />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 sm:mb-0">
                      {steps?.[activeStep]?.title}
                    </h3>
                    <span className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
                      <Icon name="Clock" size={16} />
                      <span>{steps?.[activeStep]?.duration}</span>
                    </span>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground">
                    {steps?.[activeStep]?.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-4">Key Tasks:</h4>
                  <ul className="space-y-3">
                    {steps?.[activeStep]?.tasks?.map((task, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-success/10 rounded-full flex items-center justify-center mt-0.5">
                          <Icon name="Check" size={14} color="var(--color-success)" />
                        </div>
                        <span className="text-sm md:text-base text-muted-foreground">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-border">
                  <Button
                    variant="outline"
                    size="default"
                    iconName="ChevronLeft"
                    iconPosition="left"
                    disabled={activeStep === 0}
                    onClick={handlePrevious}
                    fullWidth
                  >
                    Previous Step
                  </Button>
                  <Button
                    variant="default"
                    size="default"
                    iconName="ChevronRight"
                    iconPosition="right"
                    disabled={activeStep === steps?.length - 1}
                    onClick={handleNext}
                    fullWidth
                  >
                    Next Step
                  </Button>
                  {/* <Button
                    variant="secondary"
                    size="default"
                    iconName="Download"
                    iconPosition="left"
                    fullWidth
                  >
                    Download Checklist
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationWizard;