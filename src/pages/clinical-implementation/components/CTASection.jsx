import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-accent/20 via-primary/20 to-accent/20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8 md:p-10 lg:p-12 text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Icon name="Rocket" size={40} color="var(--color-accent)" />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Healthcare System?
            </h2>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 200+ leading healthcare institutions using OncoRisk to deliver precision oncology care. 
              Start your implementation journey today with our expert support team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Talk to Expert
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Icon name="Clock" size={24} color="var(--color-success)" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">Fast Implementation</p>
                <p className="text-xs text-muted-foreground">Deploy in 4-6 weeks</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Icon name="Users" size={24} color="var(--color-primary)" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">Dedicated Support</p>
                <p className="text-xs text-muted-foreground">24/7 expert assistance</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-3 mx-auto">
                  <Icon name="TrendingUp" size={24} color="var(--color-accent)" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">Proven ROI</p>
                <p className="text-xs text-muted-foreground">35% average cost reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;