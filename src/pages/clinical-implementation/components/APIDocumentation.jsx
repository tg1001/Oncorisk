import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const APIDocumentation = () => {
  const [activeEndpoint, setActiveEndpoint] = useState(0);

  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/predict",
      description: "Submit genomic data for survival risk prediction",
      authentication: "Bearer Token Required",
      requestBody: `{
  "patient_id": "P123456",
  "genomic_data": {
    "gene_expression": [...],
    "mutations": [...],
    "clinical_features": {...}
  },
  "model_version": "2.1.0"
}`,
      responseBody: `{
  "prediction_id": "PRED789012",
  "risk_score": 0.73,
  "confidence": 0.89,
  "survival_probability": {
    "1_year": 0.92,
    "3_year": 0.78,
    "5_year": 0.65
  },
  "risk_factors": [...],
  "timestamp": "2026-01-24T09:50:32Z"
}`,
      rateLimit: "100 requests/minute"
    },
    {
      method: "GET",
      path: "/api/v1/genes/{gene_id}",
      description: "Retrieve detailed information about specific genes",
      authentication: "API Key Required",
      requestBody: "No request body required",
      responseBody: `{
  "gene_id": "BRCA1",
  "name": "Breast Cancer 1",
  "chromosome": "17",
  "location": "17q21.31",
  "function": "DNA repair and tumor suppression",
  "clinical_significance": "High",
  "associated_cancers": [...],
  "mutation_frequency": 0.023
}`,
      rateLimit: "1000 requests/hour"
    },
    {
      method: "POST",
      path: "/api/v1/batch-predict",
      description: "Process multiple predictions in a single request",
      authentication: "Bearer Token Required",
      requestBody: `{
  "batch_id": "BATCH456",
  "predictions": [
    {
      "patient_id": "P123456",
      "genomic_data": {...}
    },
    {
      "patient_id": "P123457",
      "genomic_data": {...}
    }
  ]
}`,
      responseBody: `{
  "batch_id": "BATCH456",
  "status": "processing",
  "total_predictions": 2,
  "completed": 0,
  "estimated_completion": "2026-01-24T10:00:00Z",
  "results_url": "/api/v1/batch-results/BATCH456"
}`,
      rateLimit: "10 requests/minute"
    }
  ];

  const securityFeatures = [
    {
      icon: "Shield",
      title: "HIPAA Compliant",
      description: "Full compliance with healthcare data protection regulations"
    },
    {
      icon: "Lock",
      title: "End-to-End Encryption",
      description: "TLS 1.3 encryption for all data transmission"
    },
    {
      icon: "Key",
      title: "OAuth 2.0 Authentication",
      description: "Industry-standard secure authentication protocol"
    },
    {
      icon: "FileCheck",
      title: "Audit Logging",
      description: "Complete audit trail for all API interactions"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <Icon name="Code2" size={18} color="var(--color-accent)" />
              <span className="text-sm md:text-base text-accent font-medium">Developer Resources</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              API Documentation
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive REST API for seamless integration with your healthcare systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {securityFeatures?.map((feature, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon name={feature?.icon} size={24} color="var(--color-success)" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">{feature?.title}</h3>
                <p className="text-sm text-muted-foreground">{feature?.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="border-b border-border">
              <div className="flex overflow-x-auto">
                {endpoints?.map((endpoint, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveEndpoint(index)}
                    className={`flex-shrink-0 px-6 py-4 text-sm font-medium transition-all duration-300 border-b-2 ${
                      activeEndpoint === index
                        ? 'border-accent text-accent bg-accent/5' :'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <span className={`inline-block px-2 py-1 rounded text-xs font-mono mr-2 ${
                      endpoint?.method === 'POST' ? 'bg-success/10 text-success' : 'bg-primary/10 text-primary'
                    }`}>
                      {endpoint?.method}
                    </span>
                    {endpoint?.path}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {endpoints?.[activeEndpoint]?.path}
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    {endpoints?.[activeEndpoint]?.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center space-x-2 px-3 py-1 bg-warning/10 border border-warning/20 rounded-full text-sm text-warning">
                      <Icon name="Lock" size={14} />
                      <span>{endpoints?.[activeEndpoint]?.authentication}</span>
                    </span>
                    <span className="inline-flex items-center space-x-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary">
                      <Icon name="Zap" size={14} />
                      <span>{endpoints?.[activeEndpoint]?.rateLimit}</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Icon name="ArrowUp" size={18} color="var(--color-accent)" />
                      <span>Request</span>
                    </h4>
                    <div className="bg-secondary border border-border rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground font-mono whitespace-pre-wrap break-words">
                        {endpoints?.[activeEndpoint]?.requestBody}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                      <Icon name="ArrowDown" size={18} color="var(--color-success)" />
                      <span>Response</span>
                    </h4>
                    <div className="bg-secondary border border-border rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-foreground font-mono whitespace-pre-wrap break-words">
                        {endpoints?.[activeEndpoint]?.responseBody}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                  <Button
                    variant="default"
                    size="default"
                    iconName="Play"
                    iconPosition="left"
                  >
                    Try in Sandbox
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    iconName="Copy"
                    iconPosition="left"
                  >
                    Copy Code
                  </Button>
                  <Button
                    variant="secondary"
                    size="default"
                    iconName="BookOpen"
                    iconPosition="left"
                  >
                    Full Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIDocumentation;