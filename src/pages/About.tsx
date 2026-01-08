import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Award, Heart, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team-building.jpg";

const milestones = [
  { year: "2015", title: "Founded", description: "ATAG was born from a passion for bringing teams together" },
  { year: "2017", title: "100 Events", description: "Reached our first milestone of 100 successful events" },
  { year: "2019", title: "HRDC Certified", description: "Became an approved HRDC training provider" },
  { year: "2021", title: "Virtual Pivot", description: "Launched virtual team building during the pandemic" },
  { year: "2024", title: "500+ Events", description: "Celebrated over 500 events and counting" },
];

const values = [
  { icon: Target, title: "Excellence", description: "We deliver nothing but the best experiences" },
  { icon: Heart, title: "Passion", description: "We genuinely love what we do and it shows" },
  { icon: Users, title: "Connection", description: "Building real bonds that last beyond events" },
  { icon: Sparkles, title: "Innovation", description: "Always creating fresh, engaging activities" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="category-badge mb-4 inline-block">About Us</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
                We Make Teams <span className="glow-text">Stronger</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                ATAG is Malaysia's leading corporate team building and events provider. 
                With a mission to deliver the best employee engagement offerings, we've 
                transformed how companies build culture and connections.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From established corporations to birthday parties to casual outings — 
                virtual or physical, big or small — we create experiences that 
                <strong className="text-foreground"> engage, excite, and unite</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/activities">
                  <Button className="btn-hero">
                    Explore Activities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="btn-outline-hero">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="ATAG Team Building in action"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-6">
                <div className="flex items-center gap-4">
                  <div className="stat-value text-4xl">4.8★</div>
                  <div>
                    <p className="font-semibold text-foreground">4,163 Reviews</p>
                    <p className="text-sm text-muted-foreground">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-dark section-glow py-16 mb-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="stat-value">500+</div>
                <p className="text-muted-foreground mt-2">Events Organized</p>
              </div>
              <div className="text-center">
                <div className="stat-value">45+</div>
                <p className="text-muted-foreground mt-2">Corporate Clients</p>
              </div>
              <div className="text-center">
                <div className="stat-value">4,500+</div>
                <p className="text-muted-foreground mt-2">Happy Participants</p>
              </div>
              <div className="text-center">
                <div className="stat-value">10+</div>
                <p className="text-muted-foreground mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Our <span className="glow-text">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="premium-card p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Our <span className="glow-text">Journey</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-primary">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-px h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-2xl mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="glass-card p-12 text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of companies who trust ATAG for their team building needs.
            </p>
            <Link to="/contact">
              <Button className="btn-hero">
                Get Started
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

export default About;
