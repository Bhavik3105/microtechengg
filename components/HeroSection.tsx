"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const heroVideos = [
  { src: "/videos/Resized Video.mp4", maxTime: 7 },
  { src: "/videos/lv_0_20260308163110.mp4", maxTime: null },
];

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[65vh] md:h-auto md:min-h-[60vh] bg-gradient-to-br from-purple-200 via-blue-100 to-orange-200 text-gray-900 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Videos with fade transition */}
      {heroVideos.map((video, index) => (
        <video
          key={video.src}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          onTimeUpdate={video.maxTime ? (e) => {
            if (e.currentTarget.currentTime > video.maxTime!) {
              e.currentTarget.currentTime = 0;
            }
          } : undefined}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6 drop-shadow-lg">
              Consistency You Can See,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500 drop-shadow-lg">Quality You Can Trust</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
              {[
                { value: "11+", label: "Product Lines" },
                { value: "100+", label: "Clients Served" },
                { value: "cGMP", label: "Compliant" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual card */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-6 drop-shadow-md">
                Core Capabilities
              </h2>
              <ul className="space-y-4">
                {[
                  "Pressure Vessels & Storage Tanks",
                  "Pharmaceutical Processing Plants",
                  "PW & WFI Grade Equipment",
                  "Blending & Drying Equipment",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-gray-900 font-medium drop-shadow-md">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
