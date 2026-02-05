import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ValidationStudyCard = ({ study }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-success/10 text-success border-success/20';
      case 'Ongoing':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Planned':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div className="bg-card rounded-lg border border-border hover:border-accent transition-all duration-300">
      <div className="p-4 md:p-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon name="FileText" size={20} color="var(--color-accent)" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 line-clamp-2">
                  {study?.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                  {study?.institution}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 flex-shrink-0">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(study?.status)}`}>
              {study?.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Users" size={14} color="var(--color-accent)" />
              <span className="text-xs text-muted-foreground">Patients</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-foreground whitespace-nowrap">
              {study?.patients?.toLocaleString()}
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Calendar" size={14} color="var(--color-accent)" />
              <span className="text-xs text-muted-foreground">Duration</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-foreground whitespace-nowrap">
              {study?.duration}
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Target" size={14} color="var(--color-accent)" />
              <span className="text-xs text-muted-foreground">Accuracy</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-success whitespace-nowrap">
              {(study?.accuracy * 100)?.toFixed(1)}%
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <Icon name="Award" size={14} color="var(--color-accent)" />
              <span className="text-xs text-muted-foreground">C-Index</span>
            </div>
            <p className="text-base md:text-lg font-semibold text-success whitespace-nowrap">
              {study?.cIndex?.toFixed(3)}
            </p>
          </div>
        </div>

        {isExpanded && (
          <div className="space-y-4 mb-4 animate-fadeIn">
            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center space-x-2">
                <Icon name="FileText" size={16} color="var(--color-accent)" />
                <span>Study Overview</span>
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {study?.overview}
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center space-x-2">
                <Icon name="CheckCircle2" size={16} color="var(--color-accent)" />
                <span>Key Findings</span>
              </h4>
              <ul className="space-y-2">
                {study?.findings?.map((finding, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-muted-foreground">
                    <Icon name="ChevronRight" size={16} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {study?.tags?.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'View Details'}
          </Button>
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="Download"
            iconPosition="left"
          >
            Download Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValidationStudyCard;