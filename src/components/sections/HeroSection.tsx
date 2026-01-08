import { Link } from "react-router-dom";
import { ArrowRight, Play, Star, Users, Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team-building.jpg";

// TODO: If ATag's current site uses a hero video, paste the direct .mp4 URL here
// (or place a file into /public/hero.mp4 and set this to "/hero.mp4").
// Tip: On the current site, right-click the hero video (or view page source) to find the .mp4 URL.
const HERO_VIDEO_URL = "";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-texture">
      {/* Background Media (video if available, otherwise image) */}
      <div className="absolute inset-0">
        {HERO_VIDEO_URL ? (
          <video
            className="w-full h-full object-cover"
            src={HERO_VIDEO_URL}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={heroImage}
            alt="ATAG Team Building - Corporate team building activities in action"
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: 'var(--gradient-glow)' }} />

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-up mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              Malaysia's #1 Team Building Provider
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
            <span className="text-foreground">ENGAGE.</span>
            <br />
            <span className="glow-text">EXPERIENCE.</span>
            <br />
            <span className="text-foreground">EXCITE.</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            The leading corporate physical and virtual team building provider. 
            From established corporations to birthday parties — we deliver 
            unforgettable experiences for groups of any size.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/activities">
              <Button className="btn-hero group">
                Explore Activities
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-outline-hero">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-delay-3 grid grid-cols-3 gap-6 max-w-lg">
            <div className="text-center sm:text-left">
              <div className="stat-value">4.8</div>
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-1">4,163 Reviews</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="stat-value">500+</div>
              <p className="text-xs text-muted-foreground mt-1">Events Organized</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="stat-value">45+</div>
              <p className="text-xs text-muted-foreground mt-1">Corporate Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
