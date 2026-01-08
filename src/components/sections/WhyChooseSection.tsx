import { Target, Users, Zap, Heart, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Tailored Programs",
    description: "Every event is customized to match your team's goals, size, and preferences.",
  },
  {
    icon: Users,
    title: "All Group Sizes",
    description: "From intimate teams of 10 to corporate gatherings of 500+, we scale seamlessly.",
  },
  {
    icon: Zap,
    title: "High-Energy Fun",
    description: "Professionally designed activities that engage, excite, and energize your team.",
  },
  {
    icon: Heart,
    title: "Lasting Bonds",
    description: "Our programs are designed to build genuine connections that last beyond the event.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "All equipment and activities meet strict safety standards with trained marshals.",
  },
  {
    icon: Clock,
    title: "Hassle-Free",
    description: "We handle everything from planning to execution — you just show up and enjoy.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 section-dark section-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="category-badge mb-4 inline-block">Why ATAG</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Malaysia's Most <span className="glow-text">Trusted</span> Team Building Provider
          </h2>
          <p className="text-muted-foreground text-lg">
            With over 500 successful events and thousands of happy teams, 
            here's why corporations choose ATAG.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="premium-card p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
