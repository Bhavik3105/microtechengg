"use client";

import { useEffect, useRef } from "react";

const clients = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  logo: `/images/client${i + 1}.png`,
  name: `Client ${i + 1}`,
}));

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1.5;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        
        // Reset when reaching halfway (since we duplicate the logos)
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-white border-y border-gray-100" aria-labelledby="clients-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="clients-heading" className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Trusted by Leading Companies
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Auto-scrolling container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden scrollbar-hide"
            style={{ scrollBehavior: "auto", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* First set of logos */}
            {clients.map((client) => (
              <div
                key={`first-${client.id}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div
                key={`second-${client.id}`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
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
      </div>
    </section>
  );
}
