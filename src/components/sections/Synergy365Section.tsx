import { Link } from "react-router-dom";
import { ArrowRight, LayoutDashboard, Trophy, CalendarClock, Sparkles, Dumbbell, HeartPulse, Swords, Gamepad2, Infinity } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Custom Built Microsite",
    description:
      "A dedicated digital hub for your event — branded, structured, and built for participants to find what they need fast.",
    icon: LayoutDashboard,
  },
  {
    title: "Real Time Leaderboard",
    description:
      "Drive engagement with live rankings, team points, and instant updates that keep energy high.",
    icon: Trophy,
  },
  {
    title: "Activities & Tournament Management",
    description:
      "Schedule sessions, manage brackets, and run tournaments smoothly — less admin, more momentum.",
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

export function Synergy365Section() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="absolute inset-0 noise-texture opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">Synergy 365</p>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mt-3">
              Year-round engagement,
              <span className="glow-text"> built for momentum</span>.
            </h2>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              Synergy 365 turns events into dynamic, interactive experiences — and keeps teams engaged beyond a single day.
              <span className="text-muted-foreground"> (We’ll swap in the official Synergy 365 imagery once we have direct asset access.)</span>
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/synergy-365">
              <Button className="btn-cta-primary group">
                Explore Synergy 365
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature cards */}
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
                <h3 className="text-xl font-semibold mt-5">{f.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Supported events */}
        <div className="mt-14">
          <h3 className="text-xl md:text-2xl font-semibold">Supported events</h3>
          <p className="text-muted-foreground mt-2">Flexible enough for one-off events — structured enough for ongoing programs.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {supported.map((s) => (
              <div key={s.label} className="support-chip">
                <s.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
