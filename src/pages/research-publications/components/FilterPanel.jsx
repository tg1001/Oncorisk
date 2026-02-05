import React from 'react';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FilterPanel = ({ filters, onFilterChange, onReset, isOpen, onToggle }) => {
  const publicationTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'peer-reviewed', label: 'Peer-Reviewed' },
    { value: 'white-paper', label: 'White Papers' },
    { value: 'ongoing-study', label: 'Ongoing Studies' }
  ];

  const sortOptions = [
    { value: 'date-desc', label: 'Newest First' },
    { value: 'date-asc', label: 'Oldest First' },
    { value: 'citations-desc', label: 'Most Cited' },
    { value: 'impact-desc', label: 'Highest Impact' }
  ];

  const researchFocusAreas = [
    { value: 'genomic-analysis', label: 'Genomic Analysis' },
    { value: 'survival-prediction', label: 'Survival Prediction' },
    { value: 'biomarker-discovery', label: 'Biomarker Discovery' },
    { value: 'clinical-validation', label: 'Clinical Validation' },
    { value: 'ai-methodology', label: 'AI Methodology' }
  ];

  const yearOptions = [
    { value: 'all', label: 'All Years' },
    { value: '2026', label: '2026' },
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: 'older', label: 'Before 2022' }
  ];

  return (
    <div className={`bg-card border border-border rounded-lg transition-all duration-300 ${isOpen ? 'p-4 md:p-6' : 'p-0 h-0 overflow-hidden border-0'}`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground flex items-center">
          <Icon name="Filter" size={20} className="mr-2 text-accent" />
          Filter Publications
        </h3>
        <Button
          variant="ghost"
          size="sm"
          iconName="X"
          onClick={onToggle}
          className="lg:hidden"
        >
          Close
        </Button>
      </div>
      <div className="space-y-6">
        <div>
          <Input
            type="search"
            label="Search"
            placeholder="Search by title, author, or keyword..."
            value={filters?.searchQuery}
            onChange={(e) => onFilterChange('searchQuery', e?.target?.value)}
            className="mb-4"
          />
        </div>

        <div>
          <Select
            label="Publication Type"
            options={publicationTypes}
            value={filters?.publicationType}
            onChange={(value) => onFilterChange('publicationType', value)}
          />
        </div>

        <div>
          <Select
            label="Sort By"
            options={sortOptions}
            value={filters?.sortBy}
            onChange={(value) => onFilterChange('sortBy', value)}
          />
        </div>

        <div>
          <Select
            label="Publication Year"
            options={yearOptions}
            value={filters?.year}
            onChange={(value) => onFilterChange('year', value)}
          />
        </div>

        <div>
          <Select
            label="Research Focus"
            options={researchFocusAreas}
            value={filters?.focusArea}
            onChange={(value) => onFilterChange('focusArea', value)}
            multiple
            searchable
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-foreground">Additional Filters</label>
          <Checkbox
            label="Open Access Only"
            checked={filters?.openAccessOnly}
            onChange={(e) => onFilterChange('openAccessOnly', e?.target?.checked)}
          />
          <Checkbox
            label="Featured Publications"
            checked={filters?.featuredOnly}
            onChange={(e) => onFilterChange('featuredOnly', e?.target?.checked)}
          />
          <Checkbox
            label="High Impact (≥5.0)"
            checked={filters?.highImpactOnly}
            onChange={(e) => onFilterChange('highImpactOnly', e?.target?.checked)}
          />
        </div>

        <div className="flex gap-2 pt-4 border-t border-border">
          <Button
            variant="outline"
            fullWidth
            iconName="RotateCcw"
            iconPosition="left"
            onClick={onReset}
          >
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel; 