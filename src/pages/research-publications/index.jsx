import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PublicationCard from './components/PublicationCard';
import FilterPanel from './components/FilterPanel';
import CitationModal from './components/CitationModal';
import CollaborationModal from './components/CollaborationModal';
import NewsletterSection from './components/NewsletterSection';
import StatsOverview from './components/StatsOverview';
import ModelDemo from './components/ModelDemo';
import ModelDemo2 from './components/ModelDemo2';
const ResearchPublications = () => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    publicationType: 'all',
    sortBy: 'date-desc',
    year: 'all',
    focusArea: [],
    openAccessOnly: false,
    featuredOnly: false,
    highImpactOnly: false
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCitation, setSelectedCitation] = useState(null);
  const [selectedCollaboration, setSelectedCollaboration] = useState(null);

  const publications = [
    {
      id: "pub-001",
      type: "peer-reviewed",
      title: "Deep Learning Approaches for Genomic Survival Prediction in Breast Cancer: A Comprehensive Analysis",
      authors: ["Dr. Sarah Chen", "Dr. Michael Rodriguez", "Dr. Emily Watson", "Dr. James Park"],
      journal: "Nature Medicine",
      publishDate: "2025-11-15",
      doi: "https://doi.org/10.1038/nm.2025.001",
      abstract: "This study presents a novel deep learning framework for predicting breast cancer survival outcomes using multi-omics data integration. Our approach combines genomic, transcriptomic, and clinical features to achieve unprecedented accuracy in survival risk stratification. The model was validated across three independent cohorts totaling 5,847 patients, demonstrating superior performance compared to traditional prognostic tools. Key findings include the identification of 127 novel prognostic biomarkers and the development of a clinically actionable risk score that outperforms existing methods by 23% in concordance index.",
      keywords: ["Deep Learning", "Genomic Analysis", "Survival Prediction", "Breast Cancer", "Multi-omics Integration", "Biomarker Discovery"],
      impactFactor: 9.2,
      citations: 847,
      openAccess: true,
      featured: true
    },
    {
      id: "pub-002",
      type: "peer-reviewed",
      title: "Validation of AI-Powered Genomic Risk Assessment in Clinical Practice: A Multi-Center Prospective Study",
      authors: ["Dr. Jennifer Liu", "Dr. Robert Thompson", "Dr. Maria Garcia"],
      journal: "The Lancet Oncology",
      publishDate: "2025-09-22",
      doi: "https://doi.org/10.1016/S1470-2045(25)00234-5",
      abstract: "We conducted a prospective multi-center validation study of the OncoRisk AI platform across 12 major cancer centers in North America and Europe. The study enrolled 3,421 newly diagnosed breast cancer patients and compared AI-generated risk predictions with standard clinical assessments. Results demonstrated that AI-powered predictions achieved 87% accuracy in 5-year survival outcomes, significantly outperforming traditional staging systems. The platform successfully identified high-risk patients who would benefit from aggressive treatment protocols, leading to improved clinical decision-making and patient outcomes.",
      keywords: ["Clinical Validation", "AI in Healthcare", "Risk Assessment", "Prospective Study", "Treatment Planning"],
      impactFactor: 8.7,
      citations: 623,
      openAccess: false,
      featured: true
    },
    {
      id: "pub-003",
      type: "white-paper",
      title: "Methodological Framework for Genomic Survival Analysis: Technical Documentation and Best Practices",
      authors: ["OncoRisk Research Team"],
      journal: "OncoRisk Technical Reports",
      publishDate: "2025-08-10",
      doi: "https://oncorisk.ai/whitepapers/methodology-2025",
      abstract: "This comprehensive white paper details the methodological framework underlying the OncoRisk platform. We describe the data preprocessing pipeline, feature engineering strategies, model architecture, and validation procedures used in our genomic survival analysis system. The document includes detailed technical specifications, algorithm descriptions, and reproducibility guidelines for researchers seeking to implement similar approaches. Special emphasis is placed on addressing common challenges in genomic data analysis, including missing data handling, batch effect correction, and model interpretability.",
      keywords: ["Methodology", "Technical Documentation", "Best Practices", "Reproducibility", "Algorithm Design"],
      impactFactor: 6.1,
      citations: 412,
      openAccess: true,
      featured: false
    },
    {
      id: "pub-004",
      type: "ongoing-study",
      title: "Integration of Liquid Biopsy Data for Real-Time Survival Prediction: The LIQUID-PREDICT Trial",
      authors: ["Dr. David Kim", "Dr. Amanda Foster", "Dr. Carlos Mendez", "Dr. Lisa Zhang"],
      journal: "ClinicalTrials.gov",
      publishDate: "2025-06-01",
      doi: "https://clinicaltrials.gov/study/NCT05234567",
      abstract: "LIQUID-PREDICT is an ongoing prospective trial investigating the integration of circulating tumor DNA (ctDNA) analysis with genomic profiling for dynamic survival prediction in metastatic breast cancer. The study aims to enroll 1,200 patients across 25 international sites and will evaluate whether serial liquid biopsy measurements can improve prediction accuracy and enable real-time treatment adaptation. Preliminary results from the first 300 patients show promising correlation between ctDNA dynamics and survival outcomes, with potential applications in treatment monitoring and early detection of disease progression.",
      keywords: ["Liquid Biopsy", "ctDNA", "Dynamic Prediction", "Clinical Trial", "Treatment Monitoring"],
      impactFactor: 7.3,
      citations: 156,
      openAccess: true,
      featured: true
    },
    {
      id: "pub-005",
      type: "peer-reviewed",
      title: "Explainable AI for Genomic Medicine: Interpreting Deep Learning Models in Cancer Survival Prediction",
      authors: ["Dr. Thomas Anderson", "Dr. Rachel Green", "Dr. Kevin Wu"],
      journal: "Cell Systems",
      publishDate: "2025-04-18",
      doi: "https://doi.org/10.1016/j.cels.2025.04.003",
      abstract: "As AI models become increasingly complex, understanding their decision-making processes is crucial for clinical adoption. This study introduces novel explainability methods specifically designed for genomic survival prediction models. We developed attention-based visualization techniques and SHAP-inspired feature importance metrics that reveal which genomic features drive survival predictions. Our approach was validated on 4,200 breast cancer cases, demonstrating that model explanations align with known biological mechanisms while also highlighting previously unrecognized prognostic patterns. The methods enable clinicians to understand and trust AI-generated predictions.",
      keywords: ["Explainable AI", "Model Interpretability", "Clinical Trust", "Feature Importance", "Attention Mechanisms"],
      impactFactor: 8.1,
      citations: 534,
      openAccess: false,
      featured: false
    },
    {
      id: "pub-006",
      type: "peer-reviewed",
      title: "Comparative Analysis of Machine Learning Algorithms for Breast Cancer Survival Prediction",
      authors: ["Dr. Patricia Martinez", "Dr. John Stevens", "Dr. Yuki Tanaka"],
      journal: "Journal of Clinical Oncology",
      publishDate: "2024-12-05",
      doi: "https://doi.org/10.1200/JCO.2024.42.35.4123",
      abstract: "We conducted a comprehensive comparison of 15 machine learning algorithms for breast cancer survival prediction using a unified dataset of 6,500 patients. Algorithms ranged from traditional Cox proportional hazards models to modern deep learning architectures. Performance was evaluated using concordance index, calibration metrics, and clinical utility measures. Results showed that ensemble methods combining multiple algorithms achieved the best performance, with gradient boosting and neural networks demonstrating superior discrimination. The study provides evidence-based guidance for algorithm selection in clinical genomic applications.",
      keywords: ["Algorithm Comparison", "Machine Learning", "Performance Evaluation", "Clinical Utility", "Ensemble Methods"],
      impactFactor: 7.8,
      citations: 891,
      openAccess: true,
      featured: false
    },
    {
      id: "pub-007",
      type: "white-paper",
      title: "Data Security and Privacy in Genomic AI: Implementation Guidelines for Healthcare Institutions",
      authors: ["OncoRisk Security Team"],
      journal: "OncoRisk Technical Reports",
      publishDate: "2024-10-20",
      doi: "https://oncorisk.ai/whitepapers/security-2024",
      abstract: "This white paper addresses critical data security and privacy considerations for implementing AI-powered genomic analysis in healthcare settings. We provide detailed guidelines for HIPAA compliance, data encryption, secure model deployment, and patient consent management. The document includes technical specifications for secure data transmission, access control mechanisms, and audit logging procedures. Special attention is given to federated learning approaches that enable model training without centralizing sensitive patient data. Implementation checklists and risk assessment frameworks are provided for healthcare administrators.",
      keywords: ["Data Security", "Privacy", "HIPAA Compliance", "Federated Learning", "Healthcare IT"],
      impactFactor: 5.4,
      citations: 278,
      openAccess: true,
      featured: false
    },
    {
      id: "pub-008",
      type: "ongoing-study",
      title: "Pharmacogenomic Integration for Personalized Treatment Selection: The PHARMA-PREDICT Study",
      authors: ["Dr. Elizabeth Moore", "Dr. Hassan Ahmed", "Dr. Sophie Dubois"],
      journal: "ClinicalTrials.gov",
      publishDate: "2024-08-15",
      doi: "https://clinicaltrials.gov/study/NCT05345678",
      abstract: "PHARMA-PREDICT is investigating the integration of pharmacogenomic data with survival prediction models to optimize treatment selection in breast cancer. The study combines germline and somatic genomic profiling with drug response predictions to identify patients most likely to benefit from specific therapeutic regimens. Enrollment target is 800 patients across 15 sites, with primary endpoints including treatment response rates and progression-free survival. Early results suggest that pharmacogenomic-guided treatment selection may improve outcomes by 15-20% compared to standard protocols.",
      keywords: ["Pharmacogenomics", "Treatment Selection", "Personalized Medicine", "Drug Response", "Clinical Trial"],
      impactFactor: 6.9,
      citations: 89,
      openAccess: true,
      featured: false
    }
  ];

  const stats = useMemo(() => ({
    totalPublications: publications?.length,
    peerReviewed: publications?.filter(p => p?.type === 'peer-reviewed')?.length,
    totalCitations: publications?.reduce((sum, p) => sum + p?.citations, 0),
    avgImpactFactor: publications?.reduce((sum, p) => sum + p?.impactFactor, 0) / publications?.length
  }), [publications]);

  const filteredPublications = useMemo(() => {
    let filtered = [...publications];

    if (filters?.searchQuery) {
      const query = filters?.searchQuery?.toLowerCase();
      filtered = filtered?.filter(pub =>
        pub?.title?.toLowerCase()?.includes(query) ||
        pub?.authors?.some(author => author?.toLowerCase()?.includes(query)) ||
        pub?.keywords?.some(keyword => keyword?.toLowerCase()?.includes(query)) ||
        pub?.abstract?.toLowerCase()?.includes(query)
      );
    }

    if (filters?.publicationType !== 'all') {
      filtered = filtered?.filter(pub => pub?.type === filters?.publicationType);
    }

    if (filters?.year !== 'all') {
      filtered = filtered?.filter(pub => {
        const pubYear = new Date(pub.publishDate)?.getFullYear();
        if (filters?.year === 'older') return pubYear < 2022;
        return pubYear?.toString() === filters?.year;
      });
    }

    if (filters?.focusArea?.length > 0) {
      filtered = filtered?.filter(pub =>
        pub?.keywords?.some(keyword =>
          filters?.focusArea?.some(area =>
            keyword?.toLowerCase()?.includes(area?.toLowerCase()?.replace('-', ' '))
          )
        )
      );
    }

    if (filters?.openAccessOnly) {
      filtered = filtered?.filter(pub => pub?.openAccess);
    }

    if (filters?.featuredOnly) {
      filtered = filtered?.filter(pub => pub?.featured);
    }

    if (filters?.highImpactOnly) {
      filtered = filtered?.filter(pub => pub?.impactFactor >= 5.0);
    }

    filtered?.sort((a, b) => {
      switch (filters?.sortBy) {
        case 'date-desc':
          return new Date(b.publishDate) - new Date(a.publishDate);
        case 'date-asc':
          return new Date(a.publishDate) - new Date(b.publishDate);
        case 'citations-desc':
          return b?.citations - a?.citations;
        case 'impact-desc':
          return b?.impactFactor - a?.impactFactor;
        default:
          return 0;
      }
    });

    return filtered;
  }, [publications, filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      publicationType: 'all',
      sortBy: 'date-desc',
      year: 'all',
      focusArea: [],
      openAccessOnly: false,
      featuredOnly: false,
      highImpactOnly: false
    });
  };

  const handleCite = (publication) => {
    setSelectedCitation(publication);
  };

  const handleShare = (publication) => {
    if (navigator.share) {
      navigator.share({
        title: publication?.title,
        text: publication?.abstract?.substring(0, 200) + '...',
        url: publication?.doi
      });
    } else {
      navigator.clipboard?.writeText(publication?.doi);
      alert('Publication link copied to clipboard!');
    }
  };

  const handleCollaborate = (publication) => {
    setSelectedCollaboration(publication);
  };

  const handleCollaborationSubmit = (formData) => {
    console.log('Collaboration request submitted:', formData);
    alert('Thank you for your interest! Our research team will review your request and contact you within 5-7 business days.');
    setSelectedCollaboration(null);
  };

  return (
    <>
      <Helmet>
        <title>Research Publications | OncoRisk - Peer-Reviewed Genomic Studies</title>
        <meta name="description" content="Explore peer-reviewed publications, white papers, and ongoing research studies from OncoRisk. Access comprehensive genomic survival analysis research and collaboration opportunities." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20 lg:pt-24">
          <section className="bg-gradient-to-br from-primary/20 via-accent/10 to-transparent border-b border-border">
            <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16 lg:py-20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-full mb-6">
                  <Icon name="BookOpen" size={32} className="text-accent" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  Research Publications
                </h1>
                <p className="text-base md:text-lg text-muted-foreground mb-8">
                  Peer-reviewed studies, white papers, and ongoing research demonstrating the scientific rigor and clinical impact of genomic survival analysis
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="FileText"
                    iconPosition="left"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    Browse Publications
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Users"
                    iconPosition="left"
                  >
                    Collaboration Opportunities
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-muted/30 border-y border-border">
  <div className="container mx-auto px-4 lg:px-8 py-10 md:py-14">
    {/* <ModelDemo /> */}
     <ModelDemo2 />
  </div>

</section>


          <section className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
            <StatsOverview stats={stats} />
          </section>

          <section className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <aside className="lg:w-80 flex-shrink-0">
                <div className="lg:sticky lg:top-24">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Filter"
                    iconPosition="left"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="lg:hidden mb-4"
                  >
                    {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
                  </Button>
                  <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
                    <FilterPanel
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      onReset={handleResetFilters}
                      isOpen={isFilterOpen}
                      onToggle={() => setIsFilterOpen(!isFilterOpen)}
                    />
                  </div>
                </div>
              </aside>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">
                      {filteredPublications?.length} {filteredPublications?.length === 1 ? 'Publication' : 'Publications'}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {filters?.searchQuery && `Showing results for "${filters?.searchQuery}"`}
                      {!filters?.searchQuery && 'All research publications'}
                    </p>
                  </div>
                </div>

                {filteredPublications?.length === 0 ? (
                  <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No Publications Found
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Try adjusting your filters or search query to find relevant publications
                    </p>
                    <Button
                      variant="outline"
                      iconName="RotateCcw"
                      iconPosition="left"
                      onClick={handleResetFilters}
                    >
                      Reset All Filters
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredPublications?.map((publication) => (
                      <PublicationCard
                        key={publication?.id}
                        publication={publication}
                        onCite={handleCite}
                        onShare={handleShare}
                        onCollaborate={handleCollaborate}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
            <NewsletterSection />
          </section>

          <section className="bg-muted/30 border-y border-border">
            <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Join Our Research Community
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-8">
                  Collaborate with leading researchers, access cutting-edge tools, and contribute to advancing genomic medicine
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Users"
                    iconPosition="left"
                  >
                    Submit Research Proposal
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="MessageSquare"
                    iconPosition="left"
                  >
                    Contact Research Team
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {selectedCitation && (
          <CitationModal
            publication={selectedCitation}
            onClose={() => setSelectedCitation(null)}
          />
        )}

        {selectedCollaboration && (
          <CollaborationModal
            publication={selectedCollaboration}
            onClose={() => setSelectedCollaboration(null)}
            onSubmit={handleCollaborationSubmit}
          />
        )}
      </div>
    </>
  );
};

export default ResearchPublications;