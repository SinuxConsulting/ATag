import { Link } from "react-router-dom";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="mobile-cta-bar">
      <div className="flex gap-3">
        <a
          href="tel:+60123456789"
          className="flex-1 btn-cta bg-secondary text-foreground hover:bg-secondary/80"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a
          href="https://wa.me/60123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 whatsapp-btn"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <Link
          to="/contact"
          className="flex-1 btn-cta-primary"
        >
          Get Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
