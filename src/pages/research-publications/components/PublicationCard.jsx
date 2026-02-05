import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PublicationCard = ({ publication, onCite, onShare, onCollaborate }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getImpactColor = (impact) => {
    if (impact >= 8) return 'text-emerald-400';
    if (impact >= 5) return 'text-blue-400';
    return 'text-slate-400';
  };

  return (
    <article className="bg-card border border-border rounded-lg p-4 md:p-6 hover:border-accent/50 transition-all duration-300">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
              publication?.type === 'peer-reviewed' ?'bg-accent/10 text-accent' 
                : publication?.type === 'white-paper' ?'bg-blue-500/10 text-blue-400' :'bg-emerald-500/10 text-emerald-400'
            }`}>
              <Icon 
                name={publication?.type === 'peer-reviewed' ? 'Award' : publication?.type === 'white-paper' ? 'FileText' : 'FlaskConical'} 
                size={12} 
                className="mr-1" 
              />
              {publication?.type === 'peer-reviewed' ? 'Peer-Reviewed' : publication?.type === 'white-paper' ? 'White Paper' : 'Ongoing Study'}
            </span>
            {publication?.featured && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-pink-500/10 text-pink-400">
                <Icon name="Star" size={12} className="mr-1" />
                Featured
              </span>
            )}
          </div>
          
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 line-clamp-2">
            {publication?.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
            <span className="flex items-center">
              <Icon name="Users" size={14} className="mr-1" />
              {publication?.authors?.slice(0, 2)?.join(', ')}
              {publication?.authors?.length > 2 && ` +${publication?.authors?.length - 2} more`}
            </span>
            <span className="flex items-center">
              <Icon name="Calendar" size={14} className="mr-1" />
              {formatDate(publication?.publishDate)}
            </span>
            <span className="flex items-center">
              <Icon name="BookOpen" size={14} className="mr-1" />
              {publication?.journal}
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {publication?.abstract}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={16} className={getImpactColor(publication?.impactFactor)} />
              <span className="text-sm">
                <span className="text-muted-foreground">Impact:</span>{' '}
                <span className={`font-semibold ${getImpactColor(publication?.impactFactor)}`}>
                  {publication?.impactFactor?.toFixed(1)}
                </span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Quote" size={16} className="text-blue-400" />
              <span className="text-sm">
                <span className="text-muted-foreground">Citations:</span>{' '}
                <span className="font-semibold text-blue-400">{publication?.citations}</span>
              </span>
            </div>
            {publication?.openAccess && (
              <span className="inline-flex items-center text-xs text-emerald-400">
                <Icon name="Unlock" size={14} className="mr-1" />
                Open Access
              </span>
            )}
          </div>
        </div>
        
        <div className="flex lg:flex-col gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => window.open(publication?.doi, '_blank')}
            className="flex-1 lg:flex-none"
          >
            View Full Text
          </Button>
          <Button
            variant="ghost"
            size="sm"
            iconName="Quote"
            onClick={() => onCite(publication)}
            className="flex-1 lg:flex-none"
          >
            Cite
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {publication?.keywords?.map((keyword, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md hover:bg-muted transition-colors duration-200"
          >
            {keyword}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
        <Button
          variant="ghost"
          size="xs"
          iconName="Share2"
          iconPosition="left"
          onClick={() => onShare(publication)}
        >
          Share
        </Button>
        <Button
          variant="ghost"
          size="xs"
          iconName="Download"
          iconPosition="left"
        >
          Export Citation
        </Button>
        {publication?.type === 'ongoing-study' && (
          <Button
            variant="ghost"
            size="xs"
            iconName="Users"
            iconPosition="left"
            onClick={() => onCollaborate(publication)}
          >
            Collaborate
          </Button>
        )}
      </div>
    </article>
  );
};

export default PublicationCard;