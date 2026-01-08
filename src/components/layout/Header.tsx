import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import atagLogo from "@/assets/atag-logo.webp";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Synergy 365", href: "/synergy-365" },
  { name: "Activities", href: "/activities" },
  { name: "Events", href: "/events" },
  { name: "HRDC", href: "/hrdc" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={atagLogo}
              alt="ATag"
              className="h-9 w-auto"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  location.pathname === item.href ? "active text-foreground" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Link to="/contact">
              <Button className="btn-cta-primary">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`py-2 text-lg font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-3 mt-4 pt-4 border-t border-border">
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn flex-1"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link to="/contact" className="flex-1">
                <Button className="btn-cta-primary w-full">Get Quote</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
