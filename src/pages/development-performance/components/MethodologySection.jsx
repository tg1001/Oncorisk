import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const MethodologySection = ({ methodology }) => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6">
      <div className="flex items-start space-x-3 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon name="BookOpen" size={24} color="var(--color-accent)" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
            {methodology?.title}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            {methodology?.description}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {methodology?.steps?.map((step, index) => (
          <div 
            key={index}
            className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-accent"
          >
            <button
              onClick={() => toggleStep(index)}
              className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-accent-foreground">{index + 1}</span>
                </div>
                <div className="text-left flex-1 min-w-0">
                  <h4 className="text-sm md:text-base font-semibold text-foreground line-clamp-1">
                    {step?.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-1">
                    {step?.subtitle}
                  </p>
                </div>
              </div>
              <Icon 
                name={expandedStep === index ? "ChevronUp" : "ChevronDown"} 
                size={20} 
                color="var(--color-muted-foreground)"
                className="flex-shrink-0 ml-2"
              />
            </button>

            {expandedStep === index && (
              <div className="p-4 bg-card animate-fadeIn">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {step?.description}
                </p>

                {step?.details && (
                  <div className="space-y-3">
                    {step?.details?.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <Icon 
                          name="CheckCircle2" 
                          size={16} 
                          color="var(--color-success)" 
                          className="flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}

                {step?.metrics && (
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {step?.metrics?.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-muted/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">{metric?.label}</p>
                        <p className="text-base font-semibold text-foreground">{metric?.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 bg-primary/10 border border-primary/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-1">Reproducibility</h4>
            <p className="text-sm text-muted-foreground">
              All methodology steps are documented with complete parameter specifications and validation protocols. 
              Full implementation details are available in our technical documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySection;