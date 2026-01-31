import Link from "next/link";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import { J5Logo } from "@/components/j5-logo";

export function Footer() {
  return (
    <footer className="border-t-4 border-[#FFD700] bg-[#0a0e27]">
      {/* Comic divider strip */}
      <div className="h-2 bg-gradient-to-r from-[#FF1744] via-[#FFD700] to-[#00E5FF]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <J5Logo size="small" />
              <span
                className="text-2xl font-black uppercase tracking-wide text-[#FF1744]"
                style={{
                  fontFamily: "'Bangers', 'Impact', 'Arial Black', sans-serif",
                  textShadow: "0 0 4px #fff, 0 0 2px #fff, 0 0 1px #fff",
                  letterSpacing: "0.08em",
                }}
              >
                Collectibles
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#a0a8d0]">
              Your local trading card and collectibles shop. Community-driven and customer-focused since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="mb-4 text-lg font-bold uppercase tracking-widest text-[#FFD700]"
              style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/gallery", label: "Gallery" },
                { href: "/location", label: "Location" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-[#a0a8d0] transition-colors hover:text-[#FFD700]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="mb-4 text-lg font-bold uppercase tracking-widest text-[#FFD700]"
              style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[#a0a8d0]">
                <MapPin className="h-4 w-4 text-[#FF1744]" />
                <span>501 South Alamo Rd Suite 105, Alamo, TX 78516</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#a0a8d0]">
                <Phone className="h-4 w-4 text-[#FF1744]" />
                <a href="tel:+19566039789" className="transition-colors hover:text-[#FFD700]">
                  (956) 603-9789
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#a0a8d0]">
                <Mail className="h-4 w-4 text-[#FF1744]" />
                <a href="mailto:jessica.m.gomez02@gmail.com" className="transition-colors hover:text-[#FFD700]">
                  jessica.m.gomez02@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[#a0a8d0]">
                <Facebook className="h-4 w-4 text-[#FF1744]" />
                <a
                  href="https://www.facebook.com/J5collectibles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#FFD700]"
                >
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-[#2a3070] pt-8 text-center">
          <p className="text-sm text-[#a0a8d0]">
            &copy; {new Date().getFullYear()} J5 Collectibles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
