"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { J5Logo } from "@/components/j5-logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-[#FFD700] bg-[#0a0e27]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0e27]/80">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <J5Logo size="small" />
          <span
            className="text-2xl font-black uppercase tracking-wide text-[#FF1744]"
            style={{
              fontFamily: "'Bangers', 'Impact', 'Arial Black', sans-serif",
              textShadow: "0 0 1px rgba(255,255,255,0.4)",
              letterSpacing: "0.08em",
            }}
          >
            Collectibles
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider text-[#a0a8d0] transition-all hover:bg-[#FFD700]/10 hover:text-[#FFD700]"
              style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.1em" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#FFD700] hover:bg-[#FFD700]/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="border-t-2 border-[#2a3070] bg-[#0a0e27] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-4 py-3 text-base font-bold uppercase tracking-wider text-[#a0a8d0] transition-all hover:bg-[#FFD700]/10 hover:text-[#FFD700]"
                style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.1em" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
