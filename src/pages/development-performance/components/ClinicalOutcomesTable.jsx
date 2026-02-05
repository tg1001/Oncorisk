import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ClinicalOutcomesTable = ({ outcomes }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterType, setFilterType] = useState('all');

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig?.key === key && sortConfig?.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedData = () => {
    let filteredData = outcomes;
    
    if (filterType !== 'all') {
      filteredData = outcomes?.filter(outcome => outcome?.type === filterType);
    }

    if (!sortConfig?.key) return filteredData;

    return [...filteredData]?.sort((a, b) => {
      if (a?.[sortConfig?.key] < b?.[sortConfig?.key]) {
        return sortConfig?.direction === 'asc' ? -1 : 1;
      }
      if (a?.[sortConfig?.key] > b?.[sortConfig?.key]) {
        return sortConfig?.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const sortedData = getSortedData();
  const outcomeTypes = ['all', ...new Set(outcomes.map(o => o.type))];

  const getSortIcon = (key) => {
    if (sortConfig?.key !== key) return 'ChevronsUpDown';
    return sortConfig?.direction === 'asc' ? 'ChevronUp' : 'ChevronDown';
  };

  const getOutcomeColor = (improvement) => {
    if (improvement >= 20) return 'text-success';
    if (improvement >= 10) return 'text-warning';
    return 'text-muted-foreground';
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
              Clinical Outcomes Data
            </h3>
            <p className="text-sm text-muted-foreground">
              Real-world implementation results across healthcare institutions
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {outcomeTypes?.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  filterType === type
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {type?.charAt(0)?.toUpperCase() + type?.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('institution')}
                  className="flex items-center space-x-2 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>Institution</span>
                  <Icon name={getSortIcon('institution')} size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('type')}
                  className="flex items-center space-x-2 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>Type</span>
                  <Icon name={getSortIcon('type')} size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('patients')}
                  className="flex items-center space-x-2 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>Patients</span>
                  <Icon name={getSortIcon('patients')} size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button
                  onClick={() => handleSort('improvement')}
                  className="flex items-center space-x-2 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                >
                  <span>Improvement</span>
                  <Icon name={getSortIcon('improvement')} size={14} />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-semibold text-foreground">Status</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sortedData?.map((outcome, index) => (
              <tr key={index} className="hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Building2" size={16} color="var(--color-accent)" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground line-clamp-1">
                        {outcome?.institution}
                      </p>
                      <p className="text-xs text-muted-foreground">{outcome?.location}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {outcome?.type}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {outcome?.patients?.toLocaleString()}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-semibold ${getOutcomeColor(outcome?.improvement)}`}>
                      +{outcome?.improvement}%
                    </span>
                    <Icon 
                      name="TrendingUp" 
                      size={14} 
                      color={outcome?.improvement >= 20 ? 'var(--color-success)' : 'var(--color-warning)'} 
                    />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center space-x-1 px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                    <Icon name="CheckCircle2" size={12} />
                    <span>{outcome?.status}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Showing {sortedData?.length} of {outcomes?.length} outcomes
        </p>
        <Button
          variant="outline"
          size="sm"
          iconName="Download"
          iconPosition="left"
        >
          Export Data
        </Button>
      </div>
    </div>
  );
};

export default ClinicalOutcomesTable;