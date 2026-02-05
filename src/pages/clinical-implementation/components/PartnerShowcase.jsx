import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnerShowcase = () => {
  const partners = [
  {
    id: 1,
    name: "Memorial Healthcare System",
    location: "Boston, MA",
    size: "850 beds",
    logo: "https://images.unsplash.com/photo-1712068493343-f92f5f4f804d",
    logoAlt: "Modern hospital building with glass facade and blue sky background representing Memorial Healthcare System in Boston Massachusetts",
    implementation: "2024-03",
    cases: "12,500",
    satisfaction: "98%",
    testimonial: "OncoRisk has transformed our oncology department\'s ability to provide personalized treatment plans. The integration was seamless and the clinical impact has been remarkable.",
    contact: "Dr. Sarah Mitchell",
    contactRole: "Chief of Oncology",
    contactImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ed76a677-1763293873868.png",
    contactImageAlt: "Professional headshot of Dr Sarah Mitchell, female oncologist with shoulder-length brown hair wearing white medical coat and stethoscope"
  },
  {
    id: 2,
    name: "Pacific Regional Medical Center",
    location: "San Francisco, CA",
    size: "1,200 beds",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7d20916-1764699659527.png",
    logoAlt: "Large modern medical center complex with multiple buildings and landscaped grounds representing Pacific Regional Medical Center in San Francisco California",
    implementation: "2023-11",
    cases: "18,300",
    satisfaction: "96%",
    testimonial: "The predictive accuracy and ease of use have made OncoRisk an indispensable tool in our precision medicine program. Our patients are receiving better-informed care.",
    contact: "Dr. James Chen",
    contactRole: "Director of Precision Medicine",
    contactImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1cb933d20-1763293416126.png",
    contactImageAlt: "Professional headshot of Dr James Chen, Asian male physician with short black hair wearing navy blue suit and glasses"
  },
  {
    id: 3,
    name: "Midwest University Hospital",
    location: "Chicago, IL",
    size: "650 beds",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3a6cef3-1764673548623.png",
    logoAlt: "Academic medical center building with university campus architecture and green lawn representing Midwest University Hospital in Chicago Illinois",
    implementation: "2024-06",
    cases: "8,900",
    satisfaction: "97%",
    testimonial: "As a teaching hospital, OncoRisk has become an essential educational tool while simultaneously improving patient outcomes. The support team has been exceptional.",
    contact: "Dr. Emily Rodriguez",
    contactRole: "Associate Professor of Oncology",
    contactImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1970132df-1763297742760.png",
    contactImageAlt: "Professional headshot of Dr Emily Rodriguez, Hispanic female professor with long dark hair wearing professional blazer and warm smile"
  },
  {
    id: 4,
    name: "Southern Regional Cancer Institute",
    location: "Atlanta, GA",
    size: "400 beds",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f40fa45e-1769248656445.png",
    logoAlt: "Specialized cancer treatment facility with modern architecture and healing garden representing Southern Regional Cancer Institute in Atlanta Georgia",
    implementation: "2024-01",
    cases: "6,700",
    satisfaction: "99%",
    testimonial: "The genomic insights provided by OncoRisk have elevated our cancer care to a new level. Implementation was smooth and the ROI has exceeded our expectations.",
    contact: "Dr. Michael Thompson",
    contactRole: "Medical Director",
    contactImage: "https://img.rocket.new/generatedImages/rocket_gen_img_134637553-1763294729320.png",
    contactImageAlt: "Professional headshot of Dr Michael Thompson, African American male medical director with short gray hair wearing white coat and confident expression"
  }];


  const stats = [
  {
    icon: "Building2",
    value: "200+",
    label: "Healthcare Systems",
    color: "var(--color-primary)"
  },
  {
    icon: "Users",
    value: "50,000+",
    label: "Annual Cases Processed",
    color: "var(--color-accent)"
  },
  {
    icon: "Award",
    value: "97%",
    label: "Average Satisfaction",
    color: "var(--color-success)"
  },
  {
    icon: "TrendingUp",
    value: "35%",
    label: "Cost Reduction",
    color: "var(--color-warning)"
  }];


  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Icon name="Handshake" size={18} color="var(--color-primary)" />
              <span className="text-sm md:text-base text-primary font-medium">Trusted Partners</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Healthcare System Partnerships
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Leading healthcare institutions trust OncoRisk for precision oncology
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 lg:mb-16">
            {stats?.map((stat, index) =>
            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stat?.color}15` }}>
                  <Icon name={stat?.icon} size={24} color={stat?.color} />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat?.value}</p>
                <p className="text-sm text-muted-foreground">{stat?.label}</p>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {partners?.map((partner) =>
            <div key={partner?.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 md:p-8">
                  <div className="lg:col-span-1 space-y-4">
                    <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                      <Image
                      src={partner?.logo}
                      alt={partner?.logoAlt}
                      className="w-full h-full object-cover" />

                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{partner?.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="MapPin" size={16} />
                          <span>{partner?.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Building" size={16} />
                          <span>{partner?.size}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Calendar" size={16} />
                          <span>Since {new Date(partner.implementation)?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-background border border-border rounded-lg p-4">
                        <p className="text-xs text-muted-foreground mb-1">Cases Processed</p>
                        <p className="text-xl md:text-2xl font-bold text-foreground">{parseInt(partner?.cases)?.toLocaleString()}</p>
                      </div>
                      <div className="bg-background border border-border rounded-lg p-4">
                        <p className="text-xs text-muted-foreground mb-1">Satisfaction</p>
                        <p className="text-xl md:text-2xl font-bold text-success">{partner?.satisfaction}</p>
                      </div>
                      <div className="bg-background border border-border rounded-lg p-4">
                        <p className="text-xs text-muted-foreground mb-1">Status</p>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-success rounded-full"></div>
                          <p className="text-sm font-medium text-success">Active</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background border border-border rounded-lg p-6">
                      <div className="flex items-start space-x-3 mb-4">
                        <Icon name="Quote" size={24} color="var(--color-accent)" className="flex-shrink-0 mt-1" />
                        <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed">
                          "{partner?.testimonial}"
                        </p>
                      </div>
                      <div className="flex items-center space-x-3 pt-4 border-t border-border">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                          <Image
                          src={partner?.contactImage}
                          alt={partner?.contactImageAlt}
                          className="w-full h-full object-cover" />

                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{partner?.contact}</p>
                          <p className="text-xs text-muted-foreground">{partner?.contactRole}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default PartnerShowcase;