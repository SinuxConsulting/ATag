import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
      <div className="absolute inset-0" style={{ background: 'var(--gradient-glow)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl mb-6">
            Ready to <span className="glow-text">Transform</span> Your Team?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let us plan your next team building event. From small groups to corporate retreats, 
            we'll create an unforgettable experience tailored to your goals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/contact">
              <Button className="btn-cta-primary text-base sm:text-lg px-10 py-5">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn text-base sm:text-lg px-10 py-5"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          {/* Quick Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a
              href="tel:+60123456789"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              +60 12-345 6789
            </a>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Response within 24 hours
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
    </section>
  );
}
