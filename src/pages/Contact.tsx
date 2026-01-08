import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Enquiry Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <span className="category-badge mb-4 inline-block">Get in Touch</span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
                Let's Plan Your <span className="glow-text">Event</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-10">
                Ready to transform your team? Get in touch and we'll create 
                an unforgettable experience tailored to your goals.
              </p>

              {/* Quick Contact */}
              <div className="space-y-6 mb-10">
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-success/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp Us</h3>
                    <p className="text-muted-foreground text-sm">
                      Fastest response • Usually within 30 minutes
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+60123456789"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">+60 12-345 6789</h3>
                    <p className="text-muted-foreground text-sm">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:hello@myatag.com"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">hello@myatag.com</h3>
                    <p className="text-muted-foreground text-sm">
                      We respond within 24 hours
                    </p>
                  </div>
                </a>
              </div>

              {/* Location */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Location</h3>
                    <p className="text-muted-foreground text-sm">
                      PJ Palms Sports Center No.1, Lorong Sultan,<br />
                      Seksyen 52, Petaling Jaya,<br />
                      Selangor, Malaysia
                    </p>
                  </div>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8372477654647!2d101.64176!3d3.1129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bd3dc5659a5%3A0xf68e18820bb98f91!2sATAG%20Team%20Building!5e0!3m2!1sen!2smy!4v1699999999999!5m2!1sen!2smy"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ATAG Team Building Location"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 md:p-10 h-fit">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="font-display text-3xl mb-4">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your enquiry has been received. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline-hero"
                  >
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl mb-2">Request a Quote</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form and we'll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Your name"
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Company name"
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+60 12-345 6789"
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="pax">Group Size *</Label>
                        <Input
                          id="pax"
                          name="pax"
                          type="number"
                          required
                          placeholder="Number of participants"
                          className="bg-secondary border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          className="bg-secondary border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Tell us about your event — goals, preferences, any specific activities you're interested in..."
                        rows={5}
                        className="bg-secondary border-border resize-none"
                      />
                    </div>

                    {/* Honeypot */}
                    <input
                      type="text"
                      name="website"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-hero w-full"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to be contacted regarding your enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Contact;
