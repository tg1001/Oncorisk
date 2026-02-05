import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const CitationModal = ({ publication, onClose }) => {
  const [citationFormat, setCitationFormat] = useState('apa');
  const [copied, setCopied] = useState(false);

  const formatOptions = [
    { value: 'apa', label: 'APA 7th Edition' },
    { value: 'mla', label: 'MLA 9th Edition' },
    { value: 'chicago', label: 'Chicago 17th Edition' },
    { value: 'harvard', label: 'Harvard' },
    { value: 'vancouver', label: 'Vancouver' },
    { value: 'bibtex', label: 'BibTeX' }
  ];

  const generateCitation = () => {
    const authors = publication?.authors?.join(', ');
    const year = new Date(publication.publishDate)?.getFullYear();
    
    const citations = {
      apa: `${authors} (${year}). ${publication?.title}. ${publication?.journal}. https://doi.org/${publication?.doi?.split('/')?.pop()}`,
      mla: `${authors}. "${publication?.title}." ${publication?.journal}, ${year}, ${publication?.doi}.`,
      chicago: `${authors}. "${publication?.title}." ${publication?.journal} (${year}). ${publication?.doi}.`,
      harvard: `${authors}, ${year}. ${publication?.title}. ${publication?.journal}. Available at: ${publication?.doi}`,
      vancouver: `${authors}. ${publication?.title}. ${publication?.journal}. ${year}. doi: ${publication?.doi?.split('/')?.pop()}`,
      bibtex: `@article{${publication?.id},\n  author = {${authors}},\n  title = {${publication?.title}},\n  journal = {${publication?.journal}},\n  year = {${year}},\n  doi = {${publication?.doi?.split('/')?.pop()}}\n}`
    };

    return citations?.[citationFormat];
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard?.writeText(generateCitation());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy citation:', err);
    }
  };

  const handleDownload = () => {
    const citation = generateCitation();
    const blob = new Blob([citation], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `citation-${publication?.id}.txt`;
    document.body?.appendChild(a);
    a?.click();
    document.body?.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-card border border-border rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center">
            <Icon name="Quote" size={24} className="mr-2 text-accent" />
            Cite This Publication
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} color="var(--color-foreground)" />
          </button>
        </div>

        <div className="p-4 md:p-6 space-y-6">
          <div className="bg-muted/30 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-foreground mb-2 line-clamp-2">
              {publication?.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center">
                <Icon name="Users" size={12} className="mr-1" />
                {publication?.authors?.slice(0, 3)?.join(', ')}
                {publication?.authors?.length > 3 && ` +${publication?.authors?.length - 3} more`}
              </span>
              <span className="flex items-center">
                <Icon name="BookOpen" size={12} className="mr-1" />
                {publication?.journal}
              </span>
              <span className="flex items-center">
                <Icon name="Calendar" size={12} className="mr-1" />
                {new Date(publication.publishDate)?.getFullYear()}
              </span>
            </div>
          </div>

          <Select
            label="Citation Format"
            description="Select your preferred citation style"
            options={formatOptions}
            value={citationFormat}
            onChange={setCitationFormat}
          />
          
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Formatted Citation
            </label>
            <div className="relative">
              <div className="bg-input border border-border rounded-lg p-4 font-mono text-sm text-foreground whitespace-pre-wrap break-words min-h-[120px]">
                {generateCitation()}
              </div>
              {copied && (
                <div className="absolute top-2 right-2 bg-success text-success-foreground px-3 py-1 rounded-md text-xs font-medium flex items-center animate-fadeIn">
                  <Icon name="Check" size={14} className="mr-1" />
                  Copied!
                </div>
              )}
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium mb-1">Citation Guidelines</p>
                <p className="text-sm text-muted-foreground">
                  Please verify the citation format with your institution's style guide. DOI links provide permanent access to the publication.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              fullWidth
              iconName="Copy"
              iconPosition="left"
              onClick={handleCopy}
            >
              {copied ? 'Copied!' : 'Copy Citation'}
            </Button>
            <Button
              variant="outline"
              fullWidth
              iconName="Download"
              iconPosition="left"
              onClick={handleDownload}
            >
              Download
            </Button>
            <Button
              variant="default"
              fullWidth
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open(publication?.doi, '_blank')}
            >
              View Publication
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitationModal;