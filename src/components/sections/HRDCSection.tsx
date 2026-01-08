import { CheckCircle2, Award, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const benefits = [
  "HRDC Claimable training programs",
  "Professional certified trainers",
  "Customized learning modules",
  "Post-training assessment & reporting",
  "Interactive experiential learning",
  "Leadership & soft skills development",
];

export function HRDCSection() {
  return (
    <section className="py-24 section-dark section-glow">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="hrdc-badge mb-6 inline-block">
              <Award className="w-4 h-4 inline mr-2" />
              HRDC Claimable
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              Say Goodbye to <span className="glow-text">Boring Training</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Transform your corporate training with our HRDC-claimable team building programs. 
              Our engaging, hands-on approach ensures your team learns while having fun — 
              maximizing retention and team cohesion.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/hrdc">
                <Button className="btn-hero">
                  Learn More About HRDC
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-outline-hero">
                  Request Training Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="glass-card p-8 md:p-12">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="stat-value">100%</div>
                  <p className="text-muted-foreground text-sm mt-2">HRDC Claimable</p>
                </div>
                <div className="text-center">
                  <div className="stat-value">500+</div>
                  <p className="text-muted-foreground text-sm mt-2">Training Sessions</p>
                </div>
                <div className="text-center">
                  <div className="stat-value">98%</div>
                  <p className="text-muted-foreground text-sm mt-2">Satisfaction Rate</p>
                </div>
                <div className="text-center">
                  <div className="stat-value">50+</div>
                  <p className="text-muted-foreground text-sm mt-2">Program Modules</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-10 h-10 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Training That Works
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Experiential learning with measurable outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-success/20 via-primary/10 to-transparent rounded-3xl blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
