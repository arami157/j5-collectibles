"use client";

import React from "react";
import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// ──────────────────────────────────────────────
// Replace placeholder src values with real image
// paths, e.g. "/gallery/pokemon-booster-box.jpg"
// Store images in the /public/gallery/ folder.
// ──────────────────────────────────────────────

const galleryImages: GalleryImage[] = [
  // — Pokémon Sealed —
  { id: 1, src: "/poke1.jpeg", alt: "Pokémon sealed product", category: "Pokémon Sealed" },
  { id: 2, src: "/poke2.jpeg", alt: "Pokémon sealed product", category: "Pokémon Sealed" },
  { id: 3, src: "/poke3.jpeg", alt: "Pokémon sealed product", category: "Pokémon Sealed" },
  { id: 16, src: "/poke4.jpeg", alt: "Pokémon sealed product", category: "Pokémon Sealed" },

  // — One Piece Sealed —
  { id: 4, src: "/op1.jpeg", alt: "One Piece sealed product", category: "One Piece Sealed" },
  { id: 5, src: "/op2.jpeg", alt: "One Piece sealed product", category: "One Piece Sealed" },
  { id: 6, src: "/op3.jpeg", alt: "One Piece sealed product", category: "One Piece Sealed" },

  // — Sports Sealed —
  { id: 7, src: "/sports-nba-select.jpeg", alt: "Panini Select NBA Hanger Boxes & Wembanyama Funko Pops", category: "Sports Sealed" },
  { id: 8, src: "/sports-nfl-select.jpeg", alt: "Panini Select NFL Blaster Boxes & Brock Purdy Funko Pop", category: "Sports Sealed" },
  { id: 9, src: "/sports-nfl-optic.jpeg", alt: "Donruss Optic Football Blaster Boxes", category: "Sports Sealed" },

  // — Accessories & Collectibles —
  { id: 10, src: "/img1.jpeg", alt: "Accessories & collectibles", category: "Accessories & Collectibles" },
  { id: 11, src: "/img2.jpeg", alt: "Accessories & collectibles", category: "Accessories & Collectibles" },
  { id: 12, src: "/img3.jpeg", alt: "Accessories & collectibles", category: "Accessories & Collectibles" },
  { id: 17, src: "/img4.jpeg", alt: "Accessories & collectibles", category: "Accessories & Collectibles" },
  { id: 18, src: "/img5.jpeg", alt: "Accessories & collectibles", category: "Accessories & Collectibles" },
  { id: 19, src: "/img6.jpeg", alt: "Accessories & collectibles", category: "Accessories & Collectibles" },
  { id: 20, src: "/img7.jpeg", alt: "Accessories & collectibles", category: "Accessories & Collectibles" },
];

const categories = [
  { label: "All", color: "#FFD700" },
  { label: "Pokémon Sealed", color: "#FFD700" },
  { label: "One Piece Sealed", color: "#FF1744" },
  { label: "Sports Sealed", color: "#FF6D00" },
  { label: "Other TCGs", color: "#00E5FF" },
  { label: "Accessories & Collectibles", color: "#76FF03" },
];

const categoryColor: Record<string, string> = {
  "Pokémon Sealed": "#FFD700",
  "One Piece Sealed": "#FF1744",
  "Sports Sealed": "#FF6D00",
  "Other TCGs": "#00E5FF",
  "Accessories & Collectibles": "#76FF03",
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const currentIndex =
    selectedImage !== null
      ? filteredImages.findIndex((img) => img.id === selectedImage)
      : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#111640] py-16 halftone-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="text-5xl font-black uppercase text-[#f5f5f5] comic-text-outline"
                style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
              >
                Gallery
              </h1>
              <p className="mt-4 text-lg text-[#a0a8d0]">
                Browse our collection of sealed products, exclusives, and more.
              </p>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#FF1744] via-[#FFD700] to-[#00E5FF]" />

        {/* Filter Tabs */}
        <section className="border-b-2 border-[#2a3070] bg-[#111640]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 py-4">
              {categories.map((cat) => {
                const isActive = activeFilter === cat.label;
                return (
                  <button
                    key={cat.label}
                    onClick={() => setActiveFilter(cat.label)}
                    className="rounded-md px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all"
                    style={{
                      fontFamily: "'Bangers', 'Impact', sans-serif",
                      letterSpacing: "0.08em",
                      backgroundColor: isActive ? cat.color : "transparent",
                      color: isActive ? "#0a0e27" : cat.color,
                      border: `2px solid ${cat.color}`,
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="relative py-12 halftone-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Other TCGs — Coming Soon placeholder */}
            {activeFilter === "Other TCGs" && (
              <div className="mx-auto max-w-md py-8">
                <div
                  className="rounded-lg border-2 border-[#00E5FF] bg-[#1a1f4e] p-10 text-center"
                  style={{ boxShadow: "0 0 20px rgba(0, 229, 255, 0.08)" }}
                >
                  <h3
                    className="text-2xl font-bold uppercase text-[#00E5FF]"
                    style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
                  >
                    Other TCGs — Coming Soon
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-[#a0a8d0]">
                    Our inventory rotates frequently. Check back soon or visit us in store to see what&apos;s currently in stock.
                  </p>
                </div>
              </div>
            )}

            {/* Image grid */}
            {filteredImages.length > 0 && activeFilter !== "Other TCGs" && (
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {filteredImages.map((image) => {
                  const color = categoryColor[image.category] || "#FFD700";
                  return (
                    <button
                      key={image.id}
                      onClick={() => setSelectedImage(image.id)}
                      className="comic-card group relative aspect-[4/3] overflow-hidden rounded-lg bg-[#1a1f4e] focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:ring-offset-2 focus:ring-offset-[#0a0e27]"
                    >
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 transition-opacity group-hover:opacity-100">
                        <span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color, fontFamily: "'Bangers', 'Impact', sans-serif" }}
                        >
                          {image.category}
                        </span>
                        <p className="mt-1 text-sm font-medium text-[#f5f5f5]">{image.alt}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Inventory Disclaimer */}
        <section className="border-t-2 border-[#2a3070] bg-[#111640] py-8">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm leading-relaxed text-[#a0a8d0]">
              Images are for display purposes only. Actual inventory may vary.
              Visit our store or check our{" "}
              <a
                href="https://www.facebook.com/J5collectibles"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#00E5FF] underline hover:text-[#FFD700]"
              >
                Facebook page
              </a>{" "}
              for current availability.
            </p>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent
          className="max-w-5xl border-2 border-[#FFD700] bg-[#0a0e27] p-0"
          onKeyDown={handleKeyDown}
        >
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-10 bg-[#0a0e27]/80 text-[#FFD700] hover:bg-[#0a0e27] hover:text-[#FF1744]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>

            {selectedImage !== null && currentIndex >= 0 && (
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={filteredImages[currentIndex]?.src || "/placeholder.svg"}
                  alt={filteredImages[currentIndex]?.alt}
                  className="h-full w-full rounded-t-lg object-cover"
                />
              </div>
            )}

            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 bg-[#0a0e27]/80 text-[#FFD700] hover:bg-[#0a0e27] disabled:opacity-50"
                onClick={handlePrevious}
                disabled={currentIndex <= 0}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button
                variant="ghost"
                size="icon"
                className="mr-2 bg-[#0a0e27]/80 text-[#FFD700] hover:bg-[#0a0e27] disabled:opacity-50"
                onClick={handleNext}
                disabled={currentIndex >= filteredImages.length - 1}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>

            {selectedImage !== null && currentIndex >= 0 && filteredImages[currentIndex] && (
              <div className="border-t-2 border-[#2a3070] bg-[#111640] p-4">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{
                    color: categoryColor[filteredImages[currentIndex].category] || "#FFD700",
                    fontFamily: "'Bangers', 'Impact', sans-serif",
                  }}
                >
                  {filteredImages[currentIndex].category}
                </span>
                <p className="mt-1 text-sm text-[#f5f5f5]">{filteredImages[currentIndex].alt}</p>
                <p className="mt-1 text-xs text-[#a0a8d0]">
                  {currentIndex + 1} of {filteredImages.length}
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
