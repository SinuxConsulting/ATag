import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import atagLogo from "@/assets/atag-logo.webp";

const quickLinks = [
  { name: "Activities", href: "/activities" },
  { name: "Events", href: "/events" },
  { name: "HRDC Training", href: "/hrdc" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const activities = [
  { name: "Archery Tag", href: "/activities/archery-tag" },
  { name: "Squid Game Telematch", href: "/activities/squid-game" },
  { name: "Art Jamming", href: "/activities/art-jamming" },
  { name: "Virtual Team Building", href: "/activities/virtual" },
  { name: "CSR Programs", href: "/activities/csr" },
];

const socials = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/atagteambuilding" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/atagteambuilding/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCsMpfcdY-ge_F3Q-sPyqzQg" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/atagteambuilding/" },
];

export function Footer() {
  return (
    <footer className="section-dark border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <img
                src={atagLogo}
                alt="ATag"
                className="h-10 w-auto"
                loading="lazy"
                decoding="async"
              />
              <p className="text-sm text-muted-foreground mt-1">
                Malaysia's #1 Team Building Provider
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The leading corporate physical and virtual team building and events provider. 
              Catering to established corporations, birthday parties, and casual outings.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="font-display text-xl mb-6">Activities</h4>
            <ul className="space-y-3">
              {activities.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  PJ Palms Sports Center No.1, Lorong Sultan, Seksyen 52, 
                  Petaling Jaya, Selangor, Malaysia
                </span>
              </li>
              <li>
                <a
                  href="tel:+60123456789"
                  className="flex gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  +60 12-345 6789
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@myatag.com"
                  className="flex gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  hello@myatag.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ATAG Team Building. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
