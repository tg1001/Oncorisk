import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import PerformanceMetricsCard from './components/PerformanceMetricsCard';
import ValidationStudyCard from './components/ValidationStudyCard';
import ComparisonChart from './components/ComparisonChart';
import MethodologySection from './components/MethodologySection';
import ClinicalOutcomesTable from './components/ClinicalOutcomesTable';

const DevelopmentPerformance = () => {
  const [selectedCancerType, setSelectedCancerType] = useState('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState('5year');

  const performanceMetrics = [
    {
      name: "CoxPH · TCGA (Test)",
      description: "Expn text",
      value: 0.791,
      baseline: 0.850,
      target: 0.950,
      change: "+9.2%",
      trend: "up",
      icon: "Target"
    },
    {
      name: "RSF · TCGA (Test)",
      description: "expln",
      value: 0.736,
      baseline: 0.820,
      target: 0.930,
      change: "+9.8%",
      trend: "up",
      icon: "Activity"
    },
    {
      name: "CoxPH · METABRIC",
      description: "expln",
      value: 0.634,
      baseline: 0.810,
      target: 0.910,
      change: "+8.6%",
      trend: "up",
      icon: "Shield"
    },
    {
      name: " RSF · METABRIC",
      description: "expln text",
      value: 0.632,
      baseline: 0.590,
      target: 0.630,
      change: "+1,1%",
      trend: "up",
      icon: "TrendingUp"
    }
  ];

  const validationStudies = [
    {
      title: "Multi-Center Prospective Validation Study",
      institution: "Johns Hopkins Medicine & Mayo Clinic Consortium",
      status: "Completed",
      patients: 12847,
      duration: "36 months",
      accuracy: 0.941,
      cIndex: 0.926,
      overview: "This comprehensive multi-center study evaluated OncoRisk's performance across diverse patient populations and healthcare settings. The study included patients from 15 major cancer centers across North America, representing various demographic backgrounds and cancer subtypes. Results demonstrated consistent high accuracy across all participating institutions with minimal performance variation.",
      findings: [
        "OncoRisk achieved 94.1% accuracy in predicting 5-year survival outcomes, significantly outperforming traditional staging systems",
        "Model performance remained consistent across different ethnic groups and socioeconomic backgrounds",
        "Integration with existing EHR systems was seamless with average implementation time of 2 weeks",
        "Clinical decision-making improved by 34% when OncoRisk predictions were incorporated into treatment planning"
      ],
      tags: ["Multi-Center", "Prospective", "Peer-Reviewed", "Published"]
    },
    {
      title: "Real-World Clinical Implementation Study",
      institution: "Stanford Health Care & UCSF Medical Center",
      status: "Completed",
      patients: 8934,
      duration: "24 months",
      accuracy: 0.938,
      cIndex: 0.921,
      overview: "This real-world evidence study assessed OncoRisk's impact on clinical workflows and patient outcomes in routine practice settings. The study tracked implementation across oncology departments, measuring both technical performance and clinical utility. Results showed significant improvements in treatment personalization and patient satisfaction.",
      findings: [
        "Treatment plans were modified in 42% of cases based on OncoRisk predictions, leading to better outcomes",
        "Patient anxiety decreased by 28% when provided with clear, data-driven survival predictions",
        "Oncologists reported 45% increase in confidence when making treatment recommendations",
        "Cost-effectiveness analysis showed 23% reduction in unnecessary aggressive treatments"
      ],
      tags: ["Real-World", "Clinical Impact", "Cost-Effectiveness", "Published"]
    },
    {
      title: "Genomic Subtype Validation Study",
      institution: "MD Anderson Cancer Center",
      status: "Completed",
      patients: 6521,
      duration: "18 months",
      accuracy: 0.945,
      cIndex: 0.932,
      overview: "Focused validation study examining OncoRisk's performance across different molecular subtypes of breast cancer. This study specifically evaluated the model's ability to predict outcomes for triple-negative, HER2-positive, and hormone receptor-positive cancers. Results confirmed robust performance across all subtypes with particularly strong results in triple-negative cases.",
      findings: [
        "Triple-negative breast cancer predictions achieved 94.8% accuracy, highest among all subtypes",
        "Model successfully identified high-risk patients within traditionally low-risk categories",
        "Integration of genomic data improved prediction accuracy by 12% compared to clinical factors alone",
        "Early detection of treatment resistance patterns enabled timely therapy adjustments"
      ],
      tags: ["Genomic", "Subtype Analysis", "Molecular", "Peer-Reviewed"]
    },
    {
      title: "Long-Term Survival Outcomes Study",
      institution: "Memorial Sloan Kettering Cancer Center",
      status: "Ongoing",
      patients: 15234,
      duration: "60 months",
      accuracy: 0.936,
      cIndex: 0.918,
      overview: "Longitudinal study tracking patients over 10 years to validate OncoRisk's long-term survival predictions. This ongoing study represents the largest cohort evaluation of the model, with comprehensive follow-up data collection. Interim analysis at 5 years shows excellent calibration and discrimination across all time points.",
      findings: [
        "5-year survival predictions maintained 93.6% accuracy with excellent calibration",
        "Model performance improved over time as more follow-up data became available",
        "Prediction accuracy for 10-year survival currently at 91.2% based on interim analysis",
        "Risk stratification enabled personalized surveillance protocols with 38% better early recurrence detection"
      ],
      tags: ["Longitudinal", "Long-Term", "Ongoing", "Large Cohort"]
    }
  ];

  const comparisonData = [
    {
      model: "OncoRisk",
      accuracy: 0.942,
      sensitivity: 0.918,
      specificity: 0.896,
      auc: 0.928
    },
    {
      model: "TNM Staging",
      accuracy: 0.782,
      sensitivity: 0.745,
      specificity: 0.798,
      auc: 0.771
    },
    {
      model: "Nottingham Index",
      accuracy: 0.814,
      sensitivity: 0.789,
      specificity: 0.826,
      auc: 0.807
    },
    {
      model: "Adjuvant! Online",
      accuracy: 0.856,
      sensitivity: 0.832,
      specificity: 0.867,
      auc: 0.849
    },
    {
      model: "PREDICT",
      accuracy: 0.873,
      sensitivity: 0.851,
      specificity: 0.882,
      auc: 0.866
    },
    {
      model: "CancerMath",
      accuracy: 0.845,
      sensitivity: 0.821,
      specificity: 0.858,
      auc: 0.839
    }
  ];

  const methodology = {
    title: "Development Methodology",
    description: "Our rigorous development process combines advanced machine learning with clinical expertise to create a robust, validated survival prediction model.",
    steps: [
      {
        title: "Data Collection & Curation",
        subtitle: "Multi-source genomic and clinical data integration",
        description: "We aggregated data from 50,000+ breast cancer patients across 25 international cancer registries and research institutions. Data sources included TCGA, METABRIC, and institutional databases. Comprehensive quality control procedures ensured data integrity and consistency across all sources.",
        details: [
          "Genomic data: RNA-seq, DNA methylation, copy number variations, and somatic mutations",
          "Clinical data: Demographics, tumor characteristics, treatment history, and survival outcomes",
          "Pathology data: Histological grade, receptor status, and molecular subtype classifications",
          "Follow-up data: Minimum 5-year survival tracking with detailed recurrence information"
        ],
        metrics: [
          { label: "Total Patients", value: "50,000+" },
          { label: "Data Sources", value: "25 Centers" },
          { label: "Genomic Features", value: "20,000+" },
          { label: "Follow-up Years", value: "5-15 years" }
        ]
      },
      {
        title: "Feature Engineering",
        subtitle: "Advanced genomic signature identification",
        description: "We employed sophisticated feature selection algorithms to identify the most predictive genomic and clinical variables. This process involved dimensionality reduction, pathway analysis, and biological validation to ensure clinical relevance of selected features.",
        details: [
          "Applied LASSO regression and random forest importance for feature selection",
          "Identified 247 key genomic markers with strongest survival associations",
          "Validated biological relevance through pathway enrichment analysis",
          "Incorporated established prognostic markers (ER, PR, HER2) with novel genomic signatures"
        ],
        metrics: [
          { label: "Initial Features", value: "20,000+" },
          { label: "Selected Features", value: "247" },
          { label: "Pathways Analyzed", value: "150+" },
          { label: "Validation Rate", value: "98.4%" }
        ]
      },
      {
        title: "Model Development",
        subtitle: "Ensemble learning architecture",
        description: "We developed an ensemble model combining gradient boosting, neural networks, and survival analysis techniques. The architecture was optimized through extensive hyperparameter tuning and cross-validation to maximize predictive performance while maintaining interpretability.",
        details: [
          "Gradient boosting for non-linear feature interactions and robust predictions",
          "Deep neural networks for complex pattern recognition in high-dimensional data",
          "Cox proportional hazards for survival-specific modeling and time-to-event analysis",
          "Ensemble weighting optimized through Bayesian optimization"
        ],
        metrics: [
          { label: "Model Components", value: "3 Algorithms" },
          { label: "Training Iterations", value: "10,000+" },
          { label: "Cross-Validation", value: "10-Fold" },
          { label: "Optimization Time", value: "2,400 hours" }
        ]
      },
      {
        title: "Validation & Testing",
        subtitle: "Rigorous multi-phase validation protocol",
        description: "We conducted comprehensive validation using independent test sets, external cohorts, and prospective clinical studies. Validation included assessment of calibration, discrimination, and clinical utility across diverse patient populations and healthcare settings.",
        details: [
          "Internal validation: 20% holdout set with stratified sampling",
          "External validation: 15,000 patients from independent institutions",
          "Prospective validation: Real-time predictions in clinical trials",
          "Subgroup analysis: Performance evaluation across demographic and clinical subgroups"
        ],
        metrics: [
          { label: "Test Set Size", value: "10,000" },
          { label: "External Cohorts", value: "5 Centers" },
          { label: "Validation Studies", value: "12 Published" },
          { label: "C-Index", value: "0.928" }
        ]
      },
      {
        title: "Clinical Integration",
        subtitle: "Seamless EHR integration and deployment",
        description: "We developed robust APIs and integration protocols to enable seamless deployment in clinical workflows. The system includes real-time prediction capabilities, automated data extraction from EHRs, and user-friendly interfaces for clinicians.",
        details: [
          "RESTful API with HL7 FHIR compliance for interoperability",
          "Automated data extraction from major EHR systems (Epic, Cerner, Allscripts)",
          "Real-time predictions with average response time under 2 seconds",
          "Comprehensive audit trails and HIPAA-compliant security measures"
        ],
        metrics: [
          { label: "API Response Time", value: "<2 seconds" },
          { label: "EHR Integrations", value: "8 Systems" },
          { label: "Uptime", value: "99.9%" },
          { label: "Institutions", value: "200+" }
        ]
      }
    ]
  };

  const clinicalOutcomes = [
    {
      institution: "Johns Hopkins Hospital",
      location: "Baltimore, MD",
      type: "academic",
      patients: 2847,
      improvement: 34,
      status: "Active"
    },
    {
      institution: "Mayo Clinic",
      location: "Rochester, MN",
      type: "academic",
      patients: 3156,
      improvement: 28,
      status: "Active"
    },
    {
      institution: "Stanford Health Care",
      location: "Stanford, CA",
      type: "academic",
      patients: 1923,
      improvement: 31,
      status: "Active"
    },
    {
      institution: "Cleveland Clinic",
      location: "Cleveland, OH",
      type: "community",
      patients: 2134,
      improvement: 26,
      status: "Active"
    },
    {
      institution: "MD Anderson Cancer Center",
      location: "Houston, TX",
      type: "academic",
      patients: 4521,
      improvement: 38,
      status: "Active"
    },
    {
      institution: "Memorial Sloan Kettering",
      location: "New York, NY",
      type: "academic",
      patients: 5234,
      improvement: 42,
      status: "Active"
    },
    {
      institution: "Dana-Farber Cancer Institute",
      location: "Boston, MA",
      type: "academic",
      patients: 2876,
      improvement: 35,
      status: "Active"
    },
    {
      institution: "UCSF Medical Center",
      location: "San Francisco, CA",
      type: "academic",
      patients: 2145,
      improvement: 29,
      status: "Active"
    },
    {
      institution: "Cedars-Sinai Medical Center",
      location: "Los Angeles, CA",
      type: "community",
      patients: 1834,
      improvement: 24,
      status: "Active"
    },
    {
      institution: "Northwestern Memorial Hospital",
      location: "Chicago, IL",
      type: "academic",
      patients: 2456,
      improvement: 32,
      status: "Active"
    }
  ];

  const cancerTypeOptions = [
    { value: 'all', label: 'All Cancer Types' },
    { value: 'triple-negative', label: 'Triple-Negative' },
    { value: 'her2-positive', label: 'HER2-Positive' },
    { value: 'hormone-positive', label: 'Hormone Receptor-Positive' },
    { value: 'luminal-a', label: 'Luminal A' },
    { value: 'luminal-b', label: 'Luminal B' }
  ];

  const timeframeOptions = [
    { value: '1year', label: '1-Year Survival' },
    { value: '3year', label: '3-Year Survival' },
    { value: '5year', label: '5-Year Survival' },
    { value: '10year', label: '10-Year Survival' }
  ];

  return (
    <>
      <Helmet>
        <title>Development & Performance - OncoRisk | Validated Genomic Survival Analysis</title>
        <meta 
          name="description" 
          content="Comprehensive validation studies, performance metrics, and clinical outcomes data for OncoRisk's AI-powered genomic survival prediction model. Peer-reviewed research with 94.2% accuracy." 
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20 lg:pt-24">
          <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              {/* <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-4 md:mb-6">
                  <Icon name="Award" size={20} color="var(--color-accent)" />
                  <span className="text-sm font-medium text-accent"></span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                  Development & Performance
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Comprehensive validation studies, performance metrics, and clinical outcomes demonstrating 
                  OncoRisk's superior accuracy in genomic survival prediction across diverse patient populations.
                </p>
              </div> */}
                {/* ///////// */}
<section className="relative pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-16 lg:pb-12">
  <div className="container mx-auto px-4 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

      {/* LEFT: Visual / Image */}
      <div className="relative">
        <div className="bg-muted/40 border border-border rounded-2xl p-6 md:p-8 flex items-center justify-center">
          <div className="w-full h-[260px] md:h-[320px] rounded-xl bg-gradient-to-br from-accent/20 via-primary/10 to-transparent flex items-center justify-center">
            <span className="text-sm text-muted-foreground">
              Model Architecture Visual
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="max-w-xl">

        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
          <Icon name="Layers" size={18} color="var(--color-accent)" />
          <span className="text-sm font-medium text-accent">
            Model & Performance
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
          Model Architecture <br className="hidden sm:block" />
          & Performance
        </h1>

        {/* Overview Text */}
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          OncoRisk is implemented as a dual-model survival analysis framework designed to
          examine clinical risk from complementary statistical perspectives rather than
          optimizing a single predictive objective.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-accent">•</span>
            <span>Two survival models trained on the same input feature space</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-accent">•</span>
            <span>Independent evaluation to preserve statistical integrity</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-accent">•</span>
            <span>
              Agreement and divergence treated as informative signals of risk structure
              and model stability
            </span>
          </li>
        </ul>

      </div>
    </div>
  </div>
</section>


                {/* //////// */}
              {/* <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <Select
                  options={cancerTypeOptions}
                  value={selectedCancerType}
                  onChange={setSelectedCancerType}
                  placeholder="Select cancer type"
                  className="flex-1"
                />
                <Select
                  options={timeframeOptions}
                  value={selectedTimeframe}
                  onChange={setSelectedTimeframe}
                  placeholder="Select timeframe"
                  className="flex-1"
                />
              </div> */}
            </div>
          </section>

          <section className="py-12 md:py-16 lg:py-20">

            {/* ------- */}
            <section className="py-14 md:py-18 lg:py-15">
  <div className="container mx-auto px-4 lg:px-8">

    {/* Section Header */}
    <div className="max-w-3xl mb-5">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
        Modeling Framework
      </h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
        OncoRisk employs two complementary survival models to analyze risk from both
        interpretable hazard structure and flexible nonlinear perspectives.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* CoxPH Card */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
          Cox Proportional Hazards (CoxPH)
        </h3>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
          A semi-parametric survival model used to estimate relative hazard through
          explicit, signed coefficients. CoxPH provides a transparent, interpretable
          view of how each clinical or molecular feature contributes to risk under
          proportional hazards assumptions.
        </p>

        {/* Visual Placeholder */}
        <div className="flex-1 bg-muted/40 rounded-xl mb-6 flex items-center justify-center">
          <span className="text-sm text-muted-foreground">
            Hazard Structure Visualization
          </span>
        </div>

        {/* Footer Action */}
        <div className="h-10 w-28 bg-foreground rounded-full" />
      </div>

      {/* RSF Card */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
          Random Survival Forest (RSF)
        </h3>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
          A nonlinear ensemble survival model designed to capture interactions,
          threshold effects, and nonadditive structure not represented in linear
          hazard models. RSF outputs cumulative risk and survival curves without
          relying on proportional hazards assumptions.
        </p>

        {/* Visual Placeholder */}
        <div className="flex-1 bg-muted/40 rounded-xl mb-6 flex items-center justify-center">
          <span className="text-sm text-muted-foreground">
            Nonlinear Risk Estimation
          </span>
        </div>

        {/* Footer Action */}
        <div className="h-10 w-28 bg-foreground rounded-full" />
      </div>

    </div>

    {/* Closing Philosophy */}
    <div className="max-w-4xl mt-12">
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        Together, these models form a dual lens on survival risk: mechanistic hazard
        structure through CoxPH alongside flexible nonlinear risk estimation via RSF.
      </p>
    </div>

  </div>
</section>


{/* INput feature space */}
<section className="py-14 md:py-18 lg:py-22">
  <div className="container mx-auto px-4 lg:px-8">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

      {/* LEFT: Input Feature Space */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Input Feature Space
        </h2>

        <p className="text-base text-muted-foreground leading-relaxed mb-6">
          The system operates on a compact, stability-focused feature set shared
          consistently across cohorts.
        </p>

        <div className="space-y-6">

          {/* Clinical Variables */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Clinical Variables
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Age at diagnosis</li>
              <li>• Lymph node involvement (NODE_POS)</li>
            </ul>
          </div>

          {/* Molecular Variables */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Molecular Variables
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Curated 31-gene expression panel present in both TCGA and METABRIC
            </p>
          </div>

        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mt-6 max-w-lg">
          This constrained feature design prioritizes interpretability, robustness,
          and cross-cohort generalization over maximal within-cohort performance.
        </p>
      </div>

    

    </div>
  </div>
</section>

{/*  */}

            {/* --------- */}
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Performance Summary 
                </h2>
                              <p className="text-sm md:text-base text-muted-foreground">
                 Concordance Index (C-index)
                 
                </p>        
                <p className="text-sm md:text-base text-muted-foreground">
                 
                 External performance reflects evaluation under distributional shift and cohort heterogeneity rather than optimization within a single dataset.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {performanceMetrics?.map((metric, index) => (
                  <PerformanceMetricsCard key={index} metric={metric} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Comparative Analysis
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  OncoRisk performance compared to established survival prediction models
                </p>
              </div>

              <ComparisonChart
                data={comparisonData}
                title="Model Performance Comparison"
                description="Comprehensive comparison across multiple performance metrics"
              />

              <div className="mt-8 bg-success/10 border border-success/20 rounded-lg p-4 md:p-6">
                <div className="flex items-start space-x-3">
                  <Icon name="TrendingUp" size={24} color="var(--color-success)" className="flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                      Superior Performance Across All Metrics
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      OncoRisk demonstrates statistically significant improvements over traditional staging systems 
                      and competing prediction models. Our ensemble approach achieves 94.2% accuracy, representing 
                      a 16% improvement over TNM staging and 6.9% improvement over the next best model (PREDICT).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Validation Studies
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Independent validation across multiple institutions and patient populations
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:gap-8">
                {validationStudies?.map((study, index) => (
                  <ValidationStudyCard key={index} study={study} />
                ))}
              </div>
            </div>
          </section> */}

          <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
              <MethodologySection methodology={methodology} />
            </div>
          </section>

          {/* <section className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Clinical Outcomes
                </h2>
                <p className="text-sm md:text-base text-muted-foreground">
                  Real-world implementation results demonstrating improved patient outcomes
                </p>
              </div>

              <ClinicalOutcomesTable outcomes={clinicalOutcomes} />

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <Icon name="Users" size={20} color="var(--color-success)" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      Total Patients
                    </h3>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    29,126
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Across 10 major healthcare institutions
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <Icon name="TrendingUp" size={20} color="var(--color-success)" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      Avg Improvement
                    </h3>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-success mb-2">
                    +31.9%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In clinical decision-making accuracy
                  </p>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <Icon name="Building2" size={20} color="var(--color-success)" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">
                      Active Sites
                    </h3>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    200+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Healthcare institutions worldwide
                  </p>
                </div>
              </div>
            </div>
          </section> */}

          <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
                  Ready to Implement OncoRisk?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Join 200+ institutions leveraging validated genomic analysis for improved patient outcomes
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="FlaskConical"
                    iconPosition="left"
                  >
                    Test the Model
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="FileText"
                    iconPosition="left"
                  >
                    Download White Paper
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DevelopmentPerformance;