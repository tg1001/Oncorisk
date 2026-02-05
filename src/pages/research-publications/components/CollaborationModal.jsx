import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const CollaborationModal = ({ publication, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    role: '',
    expertise: [],
    message: ''
  });

  const [errors, setErrors] = useState({});

  const roleOptions = [
    { value: 'principal-investigator', label: 'Principal Investigator' },
    { value: 'research-scientist', label: 'Research Scientist' },
    { value: 'clinical-researcher', label: 'Clinical Researcher' },
    { value: 'data-scientist', label: 'Data Scientist' },
    { value: 'graduate-student', label: 'Graduate Student' },
    { value: 'other', label: 'Other' }
  ];

  const expertiseOptions = [
    { value: 'genomics', label: 'Genomics' },
    { value: 'oncology', label: 'Oncology' },
    { value: 'bioinformatics', label: 'Bioinformatics' },
    { value: 'machine-learning', label: 'Machine Learning' },
    { value: 'clinical-trials', label: 'Clinical Trials' },
    { value: 'biostatistics', label: 'Biostatistics' }
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) newErrors.email = 'Invalid email format';
    if (!formData?.institution?.trim()) newErrors.institution = 'Institution is required';
    if (!formData?.role) newErrors.role = 'Role is required';
    if (formData?.expertise?.length === 0) newErrors.expertise = 'Select at least one area of expertise';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    if (formData?.message?.trim()?.length < 50) newErrors.message = 'Message must be at least 50 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-card border border-border rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card border-b border-border p-4 md:p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center">
              <Icon name="Users" size={24} className="mr-2 text-accent" />
              Collaboration Request
            </h2>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
              {publication?.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
            aria-label="Close modal"
          >
            <Icon name="X" size={20} color="var(--color-foreground)" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-6">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={20} className="text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium mb-1">Collaboration Opportunity</p>
                <p className="text-sm text-muted-foreground">
                  Express your interest in collaborating on this research. Our team will review your request and contact you within 5-7 business days.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="text"
              label="Full Name"
              placeholder="Dr. Jane Smith"
              value={formData?.name}
              onChange={(e) => handleChange('name', e?.target?.value)}
              error={errors?.name}
              required
            />
            <Input
              type="email"
              label="Email Address"
              placeholder="jane.smith@university.edu"
              value={formData?.email}
              onChange={(e) => handleChange('email', e?.target?.value)}
              error={errors?.email}
              required
            />
          </div>

          <Input
            type="text"
            label="Institution/Organization"
            placeholder="Stanford University Medical Center"
            value={formData?.institution}
            onChange={(e) => handleChange('institution', e?.target?.value)}
            error={errors?.institution}
            required
          />

          <Select
            label="Your Role"
            options={roleOptions}
            value={formData?.role}
            onChange={(value) => handleChange('role', value)}
            error={errors?.role}
            required
          />

          <Select
            label="Areas of Expertise"
            description="Select all that apply"
            options={expertiseOptions}
            value={formData?.expertise}
            onChange={(value) => handleChange('expertise', value)}
            error={errors?.expertise}
            multiple
            searchable
            required
          />

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              value={formData?.message}
              onChange={(e) => handleChange('message', e?.target?.value)}
              placeholder="Describe your interest in this research and how you would like to collaborate (minimum 50 characters)..."
              rows={6}
              className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            />
            {errors?.message && (
              <p className="mt-1 text-sm text-destructive">{errors?.message}</p>
            )}
            <p className="mt-1 text-xs text-muted-foreground">
              {formData?.message?.length} / 50 characters minimum
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            <Button
              type="button"
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              fullWidth
              iconName="Send"
              iconPosition="right"
            >
              Submit Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollaborationModal;