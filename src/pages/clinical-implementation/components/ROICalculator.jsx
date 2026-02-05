import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    systemSize: 'medium',
    annualCases: '5000',
    currentCostPerCase: '850',
    implementationCost: '75000'
  });

  const [results, setResults] = useState(null);

  const systemSizeOptions = [
    { value: 'small', label: 'Small (< 200 beds)', description: 'Community hospitals' },
    { value: 'medium', label: 'Medium (200-500 beds)', description: 'Regional medical centers' },
    { value: 'large', label: 'Large (500-1000 beds)', description: 'Major healthcare systems' },
    { value: 'enterprise', label: 'Enterprise (1000+ beds)', description: 'Multi-facility networks' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateROI = () => {
    const cases = parseInt(formData?.annualCases) || 0;
    const currentCost = parseFloat(formData?.currentCostPerCase) || 0;
    const implementationCost = parseFloat(formData?.implementationCost) || 0;

    const efficiencyGain = 0.35;
    const costReduction = currentCost * efficiencyGain;
    const annualSavings = cases * costReduction;
    const threeYearSavings = annualSavings * 3;
    const netROI = threeYearSavings - implementationCost;
    const roiPercentage = ((netROI / implementationCost) * 100)?.toFixed(1);
    const paybackMonths = Math.ceil((implementationCost / annualSavings) * 12);

    const improvedOutcomes = Math.floor(cases * 0.18);
    const reducedReadmissions = Math.floor(cases * 0.12);

    setResults({
      annualSavings: annualSavings?.toFixed(0),
      threeYearSavings: threeYearSavings?.toFixed(0),
      netROI: netROI?.toFixed(0),
      roiPercentage,
      paybackMonths,
      improvedOutcomes,
      reducedReadmissions
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 border border-success/20 rounded-full mb-6">
              <Icon name="TrendingUp" size={18} color="var(--color-success)" />
              <span className="text-sm md:text-base text-success font-medium">Financial Impact</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Interactive ROI Calculator
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Calculate potential cost savings and patient outcome improvements for your healthcare system
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Your Healthcare System</h3>
              
              <div className="space-y-6">
                <Select
                  label="System Size"
                  description="Select your healthcare system size"
                  options={systemSizeOptions}
                  value={formData?.systemSize}
                  onChange={(value) => handleInputChange('systemSize', value)}
                />

                <Input
                  label="Annual Breast Cancer Cases"
                  type="number"
                  placeholder="5000"
                  description="Estimated annual cases requiring genomic analysis"
                  value={formData?.annualCases}
                  onChange={(e) => handleInputChange('annualCases', e?.target?.value)}
                />

                <Input
                  label="Current Cost Per Case ($)"
                  type="number"
                  placeholder="850"
                  description="Current average cost for genomic analysis per case"
                  value={formData?.currentCostPerCase}
                  onChange={(e) => handleInputChange('currentCostPerCase', e?.target?.value)}
                />

                <Input
                  label="Implementation Investment ($)"
                  type="number"
                  placeholder="75000"
                  description="One-time setup and integration costs"
                  value={formData?.implementationCost}
                  onChange={(e) => handleInputChange('implementationCost', e?.target?.value)}
                />

                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  iconName="Calculator"
                  iconPosition="left"
                  onClick={calculateROI}
                >
                  Calculate ROI
                </Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Projected Results</h3>
              
              {results ? (
                <div className="space-y-6">
                  <div className="bg-success/10 border border-success/20 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">3-Year ROI</span>
                      <Icon name="TrendingUp" size={20} color="var(--color-success)" />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-success">{results?.roiPercentage}%</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      ${parseInt(results?.netROI)?.toLocaleString()} net return
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="DollarSign" size={18} color="var(--color-accent)" />
                        <span className="text-sm text-muted-foreground">Annual Savings</span>
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-foreground">
                        ${parseInt(results?.annualSavings)?.toLocaleString()}
                      </p>
                    </div>

                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Clock" size={18} color="var(--color-accent)" />
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                      </div>
                      <p className="text-xl md:text-2xl font-bold text-foreground">
                        {results?.paybackMonths} months
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <h4 className="text-base md:text-lg font-semibold text-foreground">Patient Outcomes</h4>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name="Heart" size={20} color="var(--color-primary)" />
                        </div>
                        <span className="text-sm text-muted-foreground">Improved Treatment Plans</span>
                      </div>
                      <span className="text-lg font-bold text-foreground">
                        {results?.improvedOutcomes?.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                          <Icon name="Activity" size={20} color="var(--color-success)" />
                        </div>
                        <span className="text-sm text-muted-foreground">Reduced Readmissions</span>
                      </div>
                      <span className="text-lg font-bold text-foreground">
                        {results?.reducedReadmissions?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      size="default"
                      fullWidth
                      iconName="Download"
                      iconPosition="left"
                    >
                      Download Full Report
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                    <Icon name="Calculator" size={40} color="var(--color-muted-foreground)" />
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground mb-2">
                    Enter your system details
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fill in the form and click Calculate ROI to see your projected results
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;