import { useRef, useEffect } from "react";

const clients = [
  { name: "Google", logo: "https://www.myatag.com/wp-content/uploads/2021/08/google-logo.jpg" },
  { name: "Petronas", logo: "https://www.myatag.com/wp-content/uploads/2021/08/petronas-logo-1.jpg" },
  { name: "Shell", logo: "https://www.myatag.com/wp-content/uploads/2021/08/shell-logo-1.jpg" },
  { name: "Maybank", logo: "https://www.myatag.com/wp-content/uploads/2021/08/maybank-logo.jpg" },
  { name: "Intel", logo: "https://www.myatag.com/wp-content/uploads/2021/08/intel-logo-1.jpg" },
  { name: "Johnson & Johnson", logo: "https://www.myatag.com/wp-content/uploads/2021/08/johnsonjohnson-logo-1.jpg" },
  { name: "Telekom Malaysia", logo: "https://www.myatag.com/wp-content/uploads/2021/08/tm-logo-2.jpg" },
  { name: "CIMB", logo: "https://www.myatag.com/wp-content/uploads/2021/08/cimb-logo.jpg" },
  { name: "Adidas", logo: "https://www.myatag.com/wp-content/uploads/2021/08/adidas-logo-1.jpg" },
  { name: "PWC", logo: "https://www.myatag.com/wp-content/uploads/2021/08/pwc-logo.jpg" },
  { name: "Khazanah", logo: "https://www.myatag.com/wp-content/uploads/2021/08/khazanah-logo-1.jpg" },
  { name: "Allianz", logo: "https://www.myatag.com/wp-content/uploads/2021/08/Allianz-logo.jpg" },
];

export function ClientsSection() {
  return (
    <section className="py-16 section-dark border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest">
          Trusted by Malaysia's Leading Corporations
        </p>
      </div>

      {/* Logo Scroll */}
      <div className="relative">
        <div className="flex gap-12 animate-slide-left" style={{ width: 'max-content' }}>
          {/* First set */}
          {clients.map((client, index) => (
            <div
              key={`${client.name}-1-${index}`}
              className="flex items-center justify-center w-32 h-16 rounded-lg bg-white/5 px-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {clients.map((client, index) => (
            <div
              key={`${client.name}-2-${index}`}
              className="flex items-center justify-center w-32 h-16 rounded-lg bg-white/5 px-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
