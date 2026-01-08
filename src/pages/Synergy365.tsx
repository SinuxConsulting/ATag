import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Link } from "react-router-dom";
import { ArrowRight, LayoutDashboard, Trophy, CalendarClock, Sparkles, Dumbbell, HeartPulse, Swords, Gamepad2, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team-building.jpg";

const features = [
  {
    title: "Custom Built Microsite",
    description:
      "Create a unique digital hub for your event. Branded, tailored, and organized so participants can find everything in seconds.",
    icon: LayoutDashboard,
  },
  {
    title: "Real Time Leaderboard",
    description:
      "Live rankings and achievements that keep teams engaged and competitive throughout your program.",
    icon: Trophy,
  },
  {
    title: "Activities, Schedule & Tournament Management",
    description:
      "Plan sessions, manage brackets, and run tournaments smoothly — without spreadsheets and last-minute chaos.",
    icon: CalendarClock,
  },
];

const supported = [
  { label: "Team Building", icon: Sparkles },
  { label: "Workshop", icon: LayoutDashboard },
  { label: "Wellness Program", icon: HeartPulse },
  { label: "Fitness Tracker", icon: Dumbbell },
  { label: "Customizable Challenges", icon: Swords },
  { label: "Sports Tournament", icon: Trophy },
  { label: "e-Sports Tournament", icon: Gamepad2 },
  { label: "Always On", icon: Infinity },
];

export default function Synergy365() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative pt-28 md:pt-32 pb-16 overflow-hidden noise-texture">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="ATAG Synergy 365 - employee engagement and team building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold tracking-wide uppercase text-sm">Synergy 365</p>
              <h1 className="font-display text-5xl md:text-7xl leading-[0.92] mt-4">
                Creating the best possible
                <span className="glow-text"> employee engagement</span> offerings.
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mt-5 max-w-2xl leading-relaxed">
                Empower organizations with innovative solutions that inspire, connect, and energize teams — turning every corporate event into an opportunity for meaningful engagement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link to="/contact">
                  <Button className="btn-hero group">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/activities">
                  <Button className="btn-outline-hero">Explore Activities</Button>
                </Link>
              </div>

              <p className="text-xs text-muted-foreground mt-6">
                Note you asked to reuse Synergy 365 imagery from the current site. This environment can’t automatically scrape external media into the codebase.
                Once you provide direct asset URLs/files, we’ll drop them in and replace the placeholders instantly.
              </p>
            </div>
          </div>
        </section>

        {/* Feature cards */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="card-premium group">
                  <div className="card-premium-inner">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/20">
                        <f.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="arrow-accent" aria-hidden="true" />
                    </div>
                    <h2 className="text-xl font-semibold mt-5">{f.title}</h2>
                    <p className="text-muted-foreground mt-3 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported events */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl md:text-4xl">Supported events</h2>
                <p className="text-muted-foreground mt-3 max-w-2xl">
                  Team building, workshops, wellness, tournaments — and always-on engagement programs that keep teams connected all year.
                </p>
              </div>
              <Link to="/contact">
                <Button className="btn-cta-primary">Request a Quote</Button>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {supported.map((s) => (
                <div key={s.label} className="support-chip">
                  <s.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileCTA />
    </div>
  );
}
