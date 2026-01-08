import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { HRDCSection } from "@/components/sections/HRDCSection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, BookOpen, Award, Users, Target, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Leadership Development",
    description: "Build strong leaders through experiential learning and team challenges.",
    duration: "1-2 Days",
    pax: "15-50",
  },
  {
    title: "Communication Skills",
    description: "Enhance interpersonal communication through collaborative activities.",
    duration: "Half Day - Full Day",
    pax: "10-100",
  },
  {
    title: "Problem Solving & Innovation",
    description: "Develop creative thinking and analytical skills through engaging challenges.",
    duration: "Half Day - Full Day",
    pax: "10-100",
  },
  {
    title: "Team Synergy",
    description: "Build trust, cooperation, and unity within your team.",
    duration: "Full Day",
    pax: "20-200",
  },
];

const process = [
  { step: "1", title: "Consultation", description: "We understand your training goals and team dynamics" },
  { step: "2", title: "Customization", description: "We design a program tailored to your specific needs" },
  { step: "3", title: "Execution", description: "Our certified trainers deliver an engaging experience" },
  { step: "4", title: "Assessment", description: "Post-training reports and recommendations provided" },
];

const HRDC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <span className="hrdc-badge mb-6 inline-block">
              <Award className="w-4 h-4 inline mr-2" />
              100% HRDC Claimable
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Corporate Training <span className="glow-text">That Works</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Say goodbye to boring classroom-style training. Our HRDC-claimable programs 
              combine experiential learning with proven team building methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero">
                  Request Training Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* What is HRDC */}
        <section className="section-dark section-glow py-16 mb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl mb-6">
                What is HRDC?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Human Resources Development Corporation (HRDC) is a government agency 
                that manages the Human Resources Development Fund. Registered employers 
                contribute a levy and can claim training costs for approved programs. 
                <strong className="text-foreground"> Our programs are 100% HRDC claimable</strong>, 
                making quality team training accessible for your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Training <span className="glow-text">Programs</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose from our range of HRDC-certified training modules.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="premium-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl mb-2">{program.title}</h3>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <div className="flex gap-4 text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Target className="w-4 h-4 text-primary" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4 text-primary" />
                        {program.pax} pax
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="container mx-auto px-4 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Our <span className="glow-text">Process</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-3xl glow-text">{item.step}</span>
                </div>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="section-dark section-glow py-16 mb-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-5xl mb-6">
                  Why Choose ATAG <span className="glow-text">Training</span>?
                </h2>
                <ul className="space-y-4">
                  {[
                    "100% HRDC claimable programs",
                    "Certified professional trainers",
                    "Customized learning modules",
                    "Interactive experiential approach",
                    "Post-training assessment reports",
                    "Flexible scheduling options",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-8">
                <div className="text-center">
                  <div className="stat-value text-6xl mb-4">98%</div>
                  <p className="text-xl font-semibold text-foreground mb-2">Satisfaction Rate</p>
                  <p className="text-muted-foreground">
                    Based on post-training feedback from participants
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="glass-card p-12 text-center">
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Ready to Transform Your Team?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get in touch for a customized training proposal tailored to your organization's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-hero">
                  Request Training Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default HRDC;
