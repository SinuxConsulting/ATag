import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import activityArtJamming from "@/assets/activity-art-jamming.jpg";
import activitySquidGame from "@/assets/activity-squid-game.jpg";
import activityVirtual from "@/assets/activity-virtual.jpg";
import activityCsr from "@/assets/activity-csr.jpg";
import heroImage from "@/assets/hero-team-building.jpg";

const categories = [
  { id: "all", name: "All Activities" },
  { id: "extreme-fun", name: "Extreme Fun" },
  { id: "creative", name: "Creative" },
  { id: "virtual", name: "Virtual" },
  { id: "csr", name: "CSR" },
];

const allActivities = [
  {
    id: "archery-tag",
    title: "Archery Tag",
    category: "extreme-fun",
    image: heroImage,
    participants: "10-200",
    duration: "2-4 hours",
    description: "The ultimate adrenaline-pumping team sport combining archery, dodgeball, and paintball.",
  },
  {
    id: "squid-game",
    title: "Squid Game Telematch",
    category: "extreme-fun",
    image: activitySquidGame,
    participants: "10-50",
    duration: "3-4 hours",
    description: "Experience the viral sensation with safe, exciting game show challenges.",
  },
  {
    id: "splash-tag",
    title: "Splash Tag",
    category: "extreme-fun",
    image: heroImage,
    participants: "10-100",
    duration: "2-3 hours",
    description: "Cool off with our water-based team building game — perfect for outdoor events.",
  },
  {
    id: "art-jamming",
    title: "Art Jamming Workshop",
    category: "creative",
    image: activityArtJamming,
    participants: "10-50",
    duration: "2-3 hours",
    description: "Unleash creativity with guided painting sessions in a relaxed atmosphere.",
  },
  {
    id: "ukulele",
    title: "Ukulele Making",
    category: "creative",
    image: activityArtJamming,
    participants: "10-40",
    duration: "3-4 hours",
    description: "Build and customize your own ukulele while learning to play.",
  },
  {
    id: "terrarium",
    title: "Terrarium Building",
    category: "creative",
    image: activityArtJamming,
    participants: "10-50",
    duration: "2-3 hours",
    description: "Create miniature gardens and take home a living memento.",
  },
  {
    id: "virtual-games",
    title: "Virtual Office Games",
    category: "virtual",
    image: activityVirtual,
    participants: "10-500",
    duration: "1-3 hours",
    description: "Engage remote teams with interactive online challenges and quizzes.",
  },
  {
    id: "virtual-escape",
    title: "Virtual Escape Room",
    category: "virtual",
    image: activityVirtual,
    participants: "10-100",
    duration: "1-2 hours",
    description: "Solve puzzles together from anywhere in the world.",
  },
  {
    id: "wheelchair",
    title: "Wheelchair Build-athon",
    category: "csr",
    image: activityCsr,
    participants: "15+",
    duration: "3-4 hours",
    description: "Build wheelchairs for those in need while bonding as a team.",
  },
  {
    id: "care-kits",
    title: "Care Kit Assembly",
    category: "csr",
    image: activityCsr,
    participants: "20+",
    duration: "2-3 hours",
    description: "Assemble care packages for underprivileged communities.",
  },
];

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = allActivities.filter((activity) => {
    const matchesCategory = activeCategory === "all" || activity.category === activeCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="category-badge mb-4 inline-block">Our Activities</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6">
              Team Building <span className="glow-text">Activities</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose from our wide range of activities designed to engage, 
              energize, and unite your team.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-secondary border-border"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => (
              <Link
                key={activity.id}
                to={`/activities/${activity.id}`}
                className="activity-card group"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                  <span className="category-badge mb-2 w-fit text-[10px]">
                    {categories.find(c => c.id === activity.category)?.name}
                  </span>
                  <h3 className="font-display text-2xl mb-2">{activity.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3 text-primary" />
                      {activity.participants}
                    </span>
                    <span>{activity.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredActivities.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No activities found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="text-primary mt-4 hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? We customize activities for your needs.
            </p>
            <Link to="/contact">
              <Button className="btn-hero">
                Contact Us for Custom Activities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
};

export default Activities;
