"use client";

import React from "react"
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

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Store front entrance", category: "Store Interior" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Pokemon card display case", category: "Products" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Trading card wall", category: "Store Interior" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "One Piece collection showcase", category: "Products" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Sports cards section", category: "Products" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Community members browsing", category: "Community" },
  { id: 7, src: "/placeholder.svg?height=400&width=600", alt: "Card grading display", category: "Products" },
  { id: 8, src: "/placeholder.svg?height=400&width=600", alt: "Checkout counter", category: "Store Interior" },
  { id: 9, src: "/placeholder.svg?height=400&width=600", alt: "Happy customers with purchases", category: "Community" },
  { id: 10, src: "/placeholder.svg?height=400&width=600", alt: "Vintage cards collection", category: "Products" },
  { id: 11, src: "/placeholder.svg?height=400&width=600", alt: "Store shelves with booster boxes", category: "Store Interior" },
  { id: 12, src: "/placeholder.svg?height=400&width=600", alt: "Collectors trading cards", category: "Community" },
];

const categoryColor: Record<string, string> = {
  "Store Interior": "#FFD700",
  Products: "#FF1744",
  Community: "#00E5FF",
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentIndex = selectedImage !== null ? galleryImages.findIndex((img) => img.id === selectedImage) : -1;

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(galleryImages[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[currentIndex + 1].id);
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
                Take a peek inside J5 Collectibles and see our shop, products, and community.
              </p>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#FF1744] via-[#FFD700] to-[#00E5FF]" />

        {/* Gallery Grid */}
        <section className="relative py-12 halftone-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryImages.map((image) => {
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
                    <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition-opacity group-hover:opacity-100">
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

            {selectedImage !== null && (
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={galleryImages[currentIndex]?.src || "/placeholder.svg"}
                  alt={galleryImages[currentIndex]?.alt}
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
                disabled={currentIndex >= galleryImages.length - 1}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </div>

            {selectedImage !== null && galleryImages[currentIndex] && (
              <div className="border-t-2 border-[#2a3070] bg-[#111640] p-4">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{
                    color: categoryColor[galleryImages[currentIndex].category] || "#FFD700",
                    fontFamily: "'Bangers', 'Impact', sans-serif",
                  }}
                >
                  {galleryImages[currentIndex].category}
                </span>
                <p className="mt-1 text-sm text-[#f5f5f5]">{galleryImages[currentIndex].alt}</p>
                <p className="mt-1 text-xs text-[#a0a8d0]">
                  {currentIndex + 1} of {galleryImages.length}
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
