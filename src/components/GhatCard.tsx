"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Calendar, Globe } from "lucide-react";
import { GhatCard as GhatCardType } from "@/lib/types";

interface GhatCardProps {
  ghat: GhatCardType;
}

export function GhatCard({ ghat }: GhatCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHindi, setIsHindi] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % ghat.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + ghat.images.length) % ghat.images.length
    );
  };

  const description = isHindi ? ghat.descriptionHi : ghat.descriptionEn;
  // Show full description without truncation
  const excerpt = description;

  return (
    <article className="w-[90vw] mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 hover:shadow-orange-900/30 transition-all duration-500 group min-h-[800px]">
      {/* ── Left: Image Carousel ── */}
      <div className="relative md:w-[560px] md:min-w-[560px] h-64 md:h-auto bg-black/30 overflow-hidden flex-shrink-0">
        <Image
          src={ghat.images[currentImageIndex]}
          alt={ghat.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />

        {/* Dark gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Carousel Controls */}
        {ghat.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 backdrop-blur-sm p-2 rounded-full transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 backdrop-blur-sm p-2 rounded-full transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {ghat.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-5"
                      : "bg-white/50 w-1.5"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Image counter badge */}
        {ghat.images.length > 1 && (
          <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full">
            {currentImageIndex + 1} / {ghat.images.length}
          </span>
        )}
      </div>

      {/* ── Right: Content ── */}
      <div className="flex flex-col flex-grow p-6 md:p-8 gap-4">
        {/* Top meta row */}
        <div className="flex items-center gap-3 text-xs text-white/60 uppercase tracking-widest font-medium">
          <span className="bg-orange-500/80 text-white px-2.5 py-0.5 rounded-full text-[10px] tracking-wide">
            Featured
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(ghat.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug group-hover:text-orange-300 transition-colors duration-300">
          {ghat.title}
        </h2>

        {/* Excerpt */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed flex-grow">
          {excerpt}
        </p>

        {/* Footer row: language toggle + read more */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-white/50" />
            <div className="flex rounded-full overflow-hidden border border-white/20 text-xs font-semibold">
              <button
                onClick={() => setIsHindi(false)}
                className={`px-3 py-1 transition-colors ${
                  !isHindi
                    ? "bg-orange-500 text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setIsHindi(true)}
                className={`px-3 py-1 transition-colors ${
                  isHindi
                    ? "bg-orange-500 text-white"
                    : "bg-white/10 text-white/60 hover:bg-white/20"
                }`}
              >
                हि
              </button>
            </div>
          </div>

          {/* Read more */}
          <button className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-sm font-semibold transition-colors group/btn">
            Read more
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}
