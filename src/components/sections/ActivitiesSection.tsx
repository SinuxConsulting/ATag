import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import activityArtJamming from "@/assets/activity-art-jamming.jpg";
import activitySquidGame from "@/assets/activity-squid-game.jpg";
import activityVirtual from "@/assets/activity-virtual.jpg";
import activityCsr from "@/assets/activity-csr.jpg";
import heroImage from "@/assets/hero-team-building.jpg";

const activities = [
  {
    id: "extreme-fun",
    title: "Extreme Fun",
    subtitle: "Archery Tag, Splash Tag & More",
    description: "High-energy activities that get hearts racing and teams bonding through thrilling competition.",
    image: heroImage,
    participants: "10-200",
    href: "/activities?category=extreme-fun",
  },
  {
    id: "squid-game",
    title: "Squid Game Telematch",
    subtitle: "Trending Challenge",
    description: "Recreate the viral sensation with safe, exciting game show-style challenges for your team.",
    image: activitySquidGame,
    participants: "10-50",
    href: "/activities/squid-game",
  },
  {
    id: "creative",
    title: "Creative Workshops",
    subtitle: "Art Jamming, Ukulele & More",
    description: "Unleash creativity with hands-on workshops that inspire collaboration and self-expression.",
    image: activityArtJamming,
    participants: "10-50",
    href: "/activities?category=creative",
  },
  {
    id: "virtual",
    title: "Virtual Team Building",
    subtitle: "Remote-Friendly",
    description: "Engage remote teams with interactive online games and challenges from anywhere in the world.",
    image: activityVirtual,
    participants: "10-500",
    href: "/activities?category=virtual",
  },
  {
    id: "csr",
    title: "CSR Programs",
    subtitle: "Wheelchair Build-athon",
    description: "Make a meaningful impact while building team spirit through purpose-driven activities.",
    image: activityCsr,
    participants: "15+",
    href: "/activities?category=csr",
  },
];

export function ActivitiesSection() {
  return (
    <section className="py-24 section-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="category-badge mb-4 inline-block">Activities</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Discover Team Building <span className="glow-text">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From adrenaline-pumping competitions to creative workshops, 
            we offer activities tailored for every team size and preference.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Large Card */}
          <Link 
            to={activities[0].href}
            className="activity-card md:col-span-2 md:row-span-2"
          >
            <img
              src={activities[0].image}
              alt={activities[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-10 p-6 md:p-10 flex flex-col justify-end">
              <span className="category-badge mb-3 w-fit">{activities[0].subtitle}</span>
              <h3 className="font-display text-3xl md:text-5xl mb-3">{activities[0].title}</h3>
              <p className="text-muted-foreground mb-4 max-w-md">{activities[0].description}</p>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  {activities[0].participants} participants
                </span>
                <span className="flex items-center gap-2 text-primary font-medium text-sm group-hover:underline">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Smaller Cards */}
          {activities.slice(1).map((activity) => (
            <Link
              key={activity.id}
              to={activity.href}
              className="activity-card"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                <span className="category-badge mb-2 w-fit text-[10px]">{activity.subtitle}</span>
                <h3 className="font-display text-2xl mb-2">{activity.title}</h3>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-3 h-3 text-primary" />
                    {activity.participants}
                  </span>
                  <span className="text-primary font-medium text-xs group-hover:underline flex items-center gap-1">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Activities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
