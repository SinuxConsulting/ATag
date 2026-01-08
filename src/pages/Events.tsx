import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team-building.jpg";
import activitySquidGame from "@/assets/activity-squid-game.jpg";
import activityArtJamming from "@/assets/activity-art-jamming.jpg";

const eventTypes = [
  {
    title: "Corporate Team Building",
    description: "Strengthen bonds and boost morale with customized team building programs for your company.",
    image: heroImage,
    features: ["Customized activities", "All group sizes", "HRDC claimable options"],
  },
  {
    title: "Company Retreats",
    description: "Plan the perfect getaway with team activities, workshops, and memorable experiences.",
    image: activityArtJamming,
    features: ["Multi-day programs", "Venue coordination", "Full event management"],
  },
  {
    title: "Annual Dinners & Awards",
    description: "Add excitement to your annual dinner with interactive games and entertainment.",
    image: activitySquidGame,
    features: ["Game shows", "Entertainment", "Emcee services"],
  },
  {
    title: "Family & Sports Day",
    description: "Bring families together with fun activities suitable for all ages.",
    image: heroImage,
    features: ["Family-friendly activities", "Outdoor games", "Competition management"],
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl">
            <span className="category-badge mb-4 inline-block">Events</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Corporate <span className="glow-text">Events</span> & Experiences
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl">
              From intimate team sessions to large-scale corporate events, 
              we handle everything so you can focus on what matters — your team.
            </p>
            <Link to="/contact">
              <Button className="btn-hero">
                Plan Your Event
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Event Types */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((event, index) => (
              <div key={index} className="premium-card overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl mb-3">{event.title}</h3>
                  <p className="text-muted-foreground mb-6">{event.description}</p>
                  <ul className="space-y-2 mb-6">
                    {event.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="text-primary font-medium flex items-center gap-2 hover:underline"
                  >
                    Enquire Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="section-dark section-glow py-16 mb-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-4xl md:text-5xl mb-6">
                How It <span className="glow-text">Works</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Calendar, title: "Tell Us Your Date", description: "Share your preferred dates and we'll check availability" },
                { icon: Users, title: "Share Your Goals", description: "Tell us about your team, objectives, and preferences" },
                { icon: Building, title: "Get a Proposal", description: "We'll create a customized program just for you" },
                { icon: MapPin, title: "Show Up & Enjoy", description: "We handle everything — you just have fun!" },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="glass-card p-12 text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Tell us about your upcoming event and we'll create a proposal tailored to your needs.
            </p>
            <Link to="/contact">
              <Button className="btn-hero">
                Start Planning
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Events;
