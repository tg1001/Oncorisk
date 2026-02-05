import React from 'react';
import Icon from '../../../components/AppIcon';

const PerformanceMetrics = () => {
  const metrics = [
    {
      id: 1,
      icon: "Target",
      label: "Cox Test C-index",
      value: "0.791",
      cohort: "TCGA",
      description: "Mechanistic hazard estimation performance",
      color: "var(--color-accent)"
    },
    {
      id: 2,
      icon: "Activity",
      label: "RSF Test C-index",
      value: "0.736",
      cohort: "TCGA",
      description: "Nonlinear ensemble risk performance",
      color: "var(--color-primary)"
    },
    {
      id: 3,
      icon: "Shield",
      label: "External Cox",
      value: "0.634",
      cohort: "METABRIC",
      description: "External validation on independent cohort",
      color: "var(--color-success)"
    },
    {
      id: 4,
      icon: "TrendingUp",
      label: "External RSF",
      value: "0.632",
      cohort: "METABRIC",
      description: "RSF external validation performance",
      color: "var(--color-warning)"
    }
  ];

  const cohortDetails = [
    {
      id: 1,
      name: "TCGA-BRCA",
      description: "Training and Internal Evaluation",
      patients: "1,059",
      features: "Clinical: AGE, NODE_POS | Molecular: 31-gene panel",
      purpose: "Model development and internal testing"
    },
    {
      id: 2,
      name: "METABRIC",
      description: "External Validation",
      patients: "1,903",
      features: "Same feature set applied to independent cohort",
      purpose: "External generalization assessment"
    }
  ];

  const architectureFeatures = [
    {
      id: 1,
      icon: "GitBranch",
      title: "Dual-Model System",
      description: "Cox proportional hazards for transparent hazard modeling combined with Random Survival Forest for nonlinear pattern capture",
      color: "var(--color-accent)"
    },
    {
      id: 2,
      icon: "Database",
      title: "Feature Set",
      description: "Clinical inputs (AGE, lymph node status) integrated with curated 31-gene molecular panel for comprehensive risk assessment",
      color: "var(--color-primary)"
    },
    {
      id: 3,
      icon: "Activity",
      title: "Survival Time Estimation",
      description: "Full survival curves S(t) over time grid, median survival at S(t) ≤ 0.5, RMST calculated as area under curve",
      color: "var(--color-success)"
    },
    {
      id: 4,
      icon: "Users",
      title: "Patient-Level Inference",
      description: "Twin inference system providing both Cox and RSF predictions with consensus survival as simple average of medians",
      color: "var(--color-warning)"
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Icon name="BarChart3" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">Model Architecture & Performance</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dual-Model System for Robust Survival Prediction
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            This platform combines Cox proportional hazards with Random Survival Forest for transparent hazard modeling and nonlinear pattern capture across breast cancer cohorts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {metrics?.map((metric) => (
            <div
              key={metric?.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${metric?.color}20` }}>
                  <Icon name={metric?.icon} size={24} color={metric?.color} />
                </div>
                <div className="px-2 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                  {metric?.cohort}
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{metric?.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{metric?.label}</div>
              <div className="text-xs text-muted-foreground">{metric?.description}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {architectureFeatures?.map((feature) => (
            <div
              key={feature?.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${feature?.color}20` }}>
                  <Icon name={feature?.icon} size={24} color={feature?.color} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature?.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Data and Cohorts</h3>
            <div className="flex items-center space-x-2 px-3 py-1 bg-accent/10 rounded-full">
              <Icon name="Database" size={16} color="var(--color-accent)" />
              <span className="text-xs md:text-sm font-medium text-accent">2,962 Patients</span>
            </div>
          </div>

          <div className="space-y-6">
            {cohortDetails?.map((cohort) => (
              <div key={cohort?.id} className="bg-secondary/30 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{cohort?.name}</h4>
                    <p className="text-sm text-accent font-medium">{cohort?.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">{cohort?.patients}</div>
                    <div className="text-xs text-muted-foreground">patients</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Icon name="CheckCircle2" size={16} color="var(--color-success)" className="mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{cohort?.features}</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="Target" size={16} color="var(--color-primary)" className="mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{cohort?.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="AlertCircle" size={20} color="var(--color-warning)" className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Research Platform Notice</p>
                <p className="text-xs text-muted-foreground">
                  This platform is designed for research and stratification purposes. It is not a regulated clinical decision system. When neither curve crosses 0.5, median survival is reported as "not reached".
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceMetrics;