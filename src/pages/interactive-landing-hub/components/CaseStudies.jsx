import React from 'react';
import Icon from '../../../components/AppIcon';

const CaseStudies = () => {
  const architectureDetails = [
    {
      id: 1,
      title: "Cox Proportional Hazards",
      subtitle: "Mechanistic Hazard Estimation",
      icon: "TrendingUp",
      color: "var(--color-accent)",
      features: [
        "Transparent hazard modeling with interpretable coefficients",
        "Linear relationship between covariates and log-hazard",
        "Test C-index: 0.791 on TCGA cohort",
        "External validation: 0.634 on METABRIC"
      ]
    },
    {
      id: 2,
      title: "Random Survival Forest",
      subtitle: "Nonlinear Ensemble Risk",
      icon: "GitBranch",
      color: "var(--color-primary)",
      features: [
        "Captures complex nonlinear patterns in survival data",
        "Ensemble method for robust risk stratification",
        "Test C-index: 0.736 on TCGA cohort",
        "External validation: 0.632 on METABRIC"
      ]
    }
  ];

  const systemDesign = [
    {
      id: 1,
      icon: "Target",
      title: "Transparent Hazard Modeling",
      description: "Cox model provides interpretable hazard ratios for clinical decision support",
      color: "var(--color-accent)"
    },
    {
      id: 2,
      icon: "Activity",
      title: "Nonlinear Pattern Capture",
      description: "RSF captures complex interactions between clinical and molecular features",
      color: "var(--color-primary)"
    },
    {
      id: 3,
      icon: "Users",
      title: "Cohort-Level Profiling",
      description: "Kaplan-Meier curves and risk distributions for population analysis",
      color: "var(--color-success)"
    },
    {
      id: 4,
      icon: "User",
      title: "Patient-Level Twin Inference",
      description: "Dual predictions with survival-time estimation and consensus reporting",
      color: "var(--color-warning)"
    }
  ];

  const survivalCalculation = [
    {
      step: 1,
      title: "Generate Survival Curves",
      description: "For each model: S(t) computed over a time grid",
      icon: "Activity"
    },
    {
      step: 2,
      title: "Calculate Median Survival",
      description: "First time point t where S(t) ≤ 0.5",
      icon: "Target"
    },
    {
      step: 3,
      title: "Compute RMST",
      description: "Restricted Mean Survival Time as area under S(t)",
      icon: "BarChart3"
    },
    {
      step: 4,
      title: "Consensus Survival",
      description: "Simple average of Cox and RSF medians when both exist",
      icon: "GitMerge"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-4">
            <Icon name="Layers" size={16} color="var(--color-accent)" />
            <span className="text-xs md:text-sm font-medium text-accent">System Architecture</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dual-Model System Design
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            OncoRisk combines two complementary approaches for robust survival prediction: Cox proportional hazards for transparent modeling and Random Survival Forest for nonlinear pattern capture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {architectureDetails?.map((model) => (
            <div
              key={model?.id}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${model?.color}20` }}
                >
                  <Icon name={model?.icon} size={28} color={model?.color} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{model?.title}</h3>
                  <p className="text-sm text-muted-foreground">{model?.subtitle}</p>
                </div>
              </div>
              <div className="space-y-3">
                {model?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon
                      name="CheckCircle2"
                      size={18}
                      color={model?.color}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-secondary/30 rounded-2xl p-6 md:p-8 mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 text-center">
            System Design Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {systemDesign?.map((objective) => (
              <div
                key={objective?.id}
                className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent/50 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${objective?.color}20` }}
                >
                  <Icon name={objective?.icon} size={24} color={objective?.color} />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-2">{objective?.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{objective?.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Survival Time Calculation Methodology
            </h3>
            <p className="text-sm text-muted-foreground">
              Survival times are derived from full survival curves with median and RMST calculations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {survivalCalculation?.map((step) => (
              <div key={step?.step} className="relative">
                <div className="bg-secondary/30 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-accent">{step?.step}</span>
                    </div>
                    <Icon name={step?.icon} size={20} color="var(--color-accent)" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">{step?.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step?.description}</p>
                </div>
                {step?.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <Icon name="ArrowRight" size={20} color="var(--color-muted)" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} color="var(--color-warning)" className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Special Case Handling</p>
                <p className="text-xs text-muted-foreground">
                  If neither Cox nor RSF survival curve crosses the 0.5 threshold, median survival is reported as "not reached". This indicates that more than 50% of similar patients are expected to survive beyond the observation period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;