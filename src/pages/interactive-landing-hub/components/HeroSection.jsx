import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [activeVisualization, setActiveVisualization] = useState(0);

  const visualizations = [
    {
      id: 1,
      title: "TGCA Test-KM by Cox Median Hazard Split",
      description: "Mechanistic hazard estimation with transparent modeling",
      accuracy: "_ _",
      dataPoints: 8000,
      color: "var(--color-accent)"
    },
    {
      id: 2,
      title: "Metabaric-KM by Cox Median Hazard Split",
      description: "Nonlinear ensemble risk pattern capture",
      accuracy: "_ _",
      dataPoints: 350,
      color: "var(--color-primary)"
    },
    {
      id: 3,
      title: "Cox vs RSF Agreement-TCGA Test",
      description: "Combined Cox + RSF for robust survival prediction",
      accuracy: "_ _",
      dataPoints: 30,
      color: "var(--color-success)"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVisualization((prev) => (prev + 1) % visualizations?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentViz = visualizations?.[activeVisualization];

  return (
    <section className="relative bg-background pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-subtle animation-delay-200"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <Icon name="Award" size={16} color="var(--color-accent)" />
              <span className="text-xs md:text-sm font-medium text-accent">Research Project by Nandini</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              OncoRisk
              <span className="block text-accent mt-2">Clinicogenomic Survival Intelligence</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Explore survival analysis, individual risk profiles, and biological drivers across breast cancer cohorts. Integrates clinical, pathological, and molecular data using a dual-model system designed for transparent hazard modeling and cohort-level profiling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="FlaskConical"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                Explore the Model
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="BookOpen"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                View Documentation
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-border">
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">0.791</div>
                <div className="text-xs md:text-sm text-muted-foreground">Cox Test C-index</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">31</div>
                <div className="text-xs md:text-sm text-muted-foreground">Gene Panel</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-success">2,962</div>
                <div className="text-xs md:text-sm text-muted-foreground">Total Patients</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{currentViz?.title}</h3>
                <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-success">Live</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6">{currentViz?.description}</p>

              <div className="relative h-48 md:h-64 bg-secondary/50 rounded-xl overflow-hidden mb-6">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: currentViz?.color, stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: currentViz?.color, stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M 0 150 Q 50 120, 100 130 T 200 110 T 300 90 T 400 70"
                    fill="none"
                    stroke={currentViz?.color}
                    strokeWidth="3"
                    className="animate-pulse-subtle"
                  />
                  
                  <path
                    d="M 0 150 Q 50 120, 100 130 T 200 110 T 300 90 T 400 70 L 400 200 L 0 200 Z"
                    fill="url(#gradient)"
                  />

                  {[50, 150, 250, 350]?.map((x, i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={150 - i * 20}
                      r="4"
                      fill={currentViz?.color}
                      className="animate-pulse-subtle"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">Accuracy Rate</div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">{currentViz?.accuracy}</div>
                </div>
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="text-xs text-muted-foreground mb-1">Data Points</div>
                  <div className="text-xl md:text-2xl font-bold text-foreground">{currentViz?.dataPoints?.toLocaleString()}</div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-2 mt-6">
                {visualizations?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveVisualization(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeVisualization ? 'bg-accent w-8' : 'bg-muted'
                    }`}
                    aria-label={`View visualization ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 