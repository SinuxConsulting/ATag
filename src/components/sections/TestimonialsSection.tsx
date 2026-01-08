import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Halim",
    date: "2 weeks ago",
    rating: 5,
    text: "So much fun! ATAG team has been very helpful! They deliver the messages clearly, the activities really helps to create the bond. Not too exhausting but still challenging enough.",
    source: "Google",
  },
  {
    name: "Andrew Tan",
    date: "1 month ago",
    rating: 5,
    text: "Tia was a great host! Energetic, detailed, and clear, we had no issue even though it was everyone's first time with archery tag. Highly recommended for corporate events!",
    source: "Google",
  },
  {
    name: "Azdreen Azmi",
    date: "4 months ago",
    rating: 5,
    text: "I really enjoyed the team building session – it was fun, engaging, and created a positive atmosphere. I also appreciated that there was no pressure, making it easy for everyone to participate.",
    source: "Google",
  },
  {
    name: "Jess E Lyn",
    date: "Returning Client",
    rating: 5,
    text: "This is my second time joining a team building from ATAG and I can only say both experiences was AMAZING! The marshals were friendly and helpful, the events were creative and fun.",
    source: "Facebook",
  },
  {
    name: "Patience Chen",
    date: "Verified",
    rating: 5,
    text: "Just the right amount of challenging tasks, mixed with a lot of fun. Great energy. Very smooth and professional. Had so much fun with my team members!",
    source: "Facebook",
  },
  {
    name: "Zaid Harith",
    date: "3 weeks ago",
    rating: 5,
    text: "Amazing experience with the ATAG team. Professional handling and fun events. We enjoyed the team building sessions. Will definitely come back!",
    source: "Google",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.8</span>
            <span className="text-muted-foreground">from 4,163 reviews</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            What Our <span className="glow-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what teams across Malaysia 
            have experienced with ATAG.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">{testimonial.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TripAdvisor / Google Badge */}
        <div className="flex justify-center items-center gap-8 mt-12">
          <a
            href="https://www.google.com/maps/place/ATAG+Team+Building"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/2x/maps_96dp.png"
              alt="Google Maps"
              className="w-8 h-8"
            />
            <div className="text-left">
              <p className="font-semibold text-sm">Google Reviews</p>
              <p className="text-xs text-muted-foreground">4.8 ★ • 4,163 reviews</p>
            </div>
          </a>
          <a
            href="https://www.tripadvisor.com.my/Attraction_Review-g298313-d11751408-Reviews-ATAG_Malaysia-Petaling_Jaya_Petaling_District_Selangor.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <img
              src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
              alt="TripAdvisor"
              className="h-6"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
