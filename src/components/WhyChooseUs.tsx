import { Shield, Clock, Award, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Best Price Guarantee",
    description: "Find a lower price? We'll match it and give you an extra 10% off your booking.",
  },
  {
    icon: Clock,
    title: "Free Cancellation",
    description: "Plans changed? No worries. Cancel up to 48 hours before check-in at no cost.",
  },
  {
    icon: Award,
    title: "Verified Properties",
    description: "Every hotel is personally inspected to ensure the highest quality standards.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our concierge team is available around the clock to assist with any needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium uppercase tracking-wide text-sm">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Experience Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We go above and beyond to make your travel experience seamless and memorable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 gradient-gold rounded-2xl flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
