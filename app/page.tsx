import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Phone, Mail, Facebook, MapPin, Zap, Star } from "lucide-react";
import { J5Logo } from "@/components/j5-logo";

const storeHours = [
  { day: "Monday - Friday", hours: "1:00 PM - 9:00 PM" },
  { day: "Saturday", hours: "12:00 PM - 9:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const categories = [
  { name: "Pokemon", description: "TCG cards, booster packs, and more", color: "#FFD700", icon: Zap },
  { name: "One Piece", description: "Card game singles and sealed products", color: "#FF1744", icon: Star },
  { name: "Sports Cards", description: "Baseball, basketball, football, and more", color: "#00E5FF", icon: Zap },
  { name: "Other Collectibles", description: "Miscellaneous treasures and finds", color: "#76FF03", icon: Star },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Comic book style */}
        <section className="relative overflow-hidden py-20 sm:py-28 halftone-bg">
          {/* Comic burst background */}
          <div className="absolute inset-0 comic-burst" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 15% 50%, #FF1744 0%, transparent 40%),
                radial-gradient(circle at 85% 30%, #FFD700 0%, transparent 40%),
                radial-gradient(circle at 50% 80%, #00E5FF 0%, transparent 40%)
              `,
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* Logo */}
              <div className="mx-auto mb-6 mt-4 flex items-center justify-center">
                <J5Logo size="large" />
                <span
                  className="text-5xl font-black uppercase sm:text-6xl lg:text-7xl"
                  style={{
                    fontFamily: "'Bangers', 'Impact', 'Arial Black', sans-serif",
                    color: "#FF1744",
                    textShadow: "none",
                    WebkitTextStroke: "0.1px #fff",
                    letterSpacing: "0.06em",
                  }}
                >
                  Collectibles
                </span>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#a0a8d0]">
                We specialize in trading card games such as Pokemon, One Piece, sports cards, and other miscellaneous collectibles.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="comic-btn w-full border-[#FFD700] bg-transparent text-[#FFD700] hover:bg-[#FFD700]/10 sm:w-auto">
                  <Link href="/location">
                    <MapPin className="mr-2 h-5 w-5" />
                    Find Us
                  </Link>
                </Button>
                <Button asChild size="lg" className="comic-btn w-full bg-[#1565C0] text-white hover:bg-[#0D47A1] sm:w-auto">
                  <a href="https://www.facebook.com/J5collectibles" target="_blank" rel="noopener noreferrer">
                    <Facebook className="mr-2 h-5 w-5" />
                    Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#FF1744] via-[#FFD700] to-[#00E5FF]" />

        {/* Store Info Section */}
        <section className="relative bg-[#111640] py-16 halftone-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Store Hours */}
              <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-[#FFD700]" />
                    <h3
                      className="text-xl font-bold uppercase text-[#FFD700]"
                      style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.05em" }}
                    >
                      Store Hours
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {storeHours.map((schedule) => (
                      <li key={schedule.day} className="flex justify-between text-sm">
                        <span className="text-[#a0a8d0]">{schedule.day}</span>
                        <span className="font-bold text-[#f5f5f5]">{schedule.hours}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Phone className="h-6 w-6 text-[#FF1744]" />
                    <h3
                      className="text-xl font-bold uppercase text-[#FF1744]"
                      style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.05em" }}
                    >
                      Contact Us
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-[#FF1744]" />
                      <a href="tel:+19566039789" className="text-[#a0a8d0] hover:text-[#FFD700]">
                        (956) 603-9789
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-[#FF1744]" />
                      <a href="mailto:jessica.m.gomez02@gmail.com" className="text-[#a0a8d0] hover:text-[#FFD700]">
                        jessica.m.gomez02@gmail.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-[#FF1744]" />
                      <span className="text-[#a0a8d0]">501 South Alamo Rd Suite 105, Alamo, TX</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Facebook Community */}
              <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e] md:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <Facebook className="h-6 w-6 text-[#00E5FF]" />
                    <h3
                      className="text-xl font-bold uppercase text-[#00E5FF]"
                      style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.05em" }}
                    >
                      Join Our Community
                    </h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-[#a0a8d0]">
                    Connect with fellow collectors, get updates on new arrivals, and be part of our growing community!
                  </p>
                  <a
                    href="https://www.facebook.com/J5collectibles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn inline-flex items-center rounded-md bg-[#1565C0] px-4 py-2 text-sm font-bold text-white hover:bg-[#0D47A1]"
                    style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
                  >
                    <Facebook className="mr-2 h-4 w-4" />
                    Visit Our Facebook
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#00E5FF] via-[#FF1744] to-[#FFD700]" />

        {/* Visit Our Store */}
        <section className="relative py-16 halftone-bg">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:grid-cols-5">
              {/* Photo */}
              <div className="md:col-span-2">
                <div
                  className="overflow-hidden rounded-lg border-2 border-[#FFD700]"
                  style={{ boxShadow: "4px 4px 0px #FF1744" }}
                >
                  <Image
                    src="/storefront.jpeg"
                    alt="J5 Collectibles storefront"
                    width={768}
                    height={1024}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="md:col-span-3">
                <h2
                  className="text-4xl font-black uppercase text-[#f5f5f5] comic-text-outline"
                  style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
                >
                  Visit Our Store
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#a0a8d0]">
                  Stop by J5 Collectibles in Alamo, TX and browse our collection in person.
                  Whether you&apos;re hunting for rare pulls, building your deck, or just looking around —
                  we&apos;d love to see you!
                </p>
                <div className="mt-3 space-y-1 text-sm text-[#a0a8d0]">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#FF1744]" />
                    501 South Alamo Rd Suite 105, Alamo, TX 78516
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#FFD700]" />
                    Mon–Fri 1–9 PM &bull; Sat 12–9 PM &bull; Sun Closed
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild size="lg" className="comic-btn bg-[#FF1744] text-white hover:bg-[#d50000]">
                    <Link href="/location">
                      <MapPin className="mr-2 h-5 w-5" />
                      Get Directions
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#FFD700] via-[#00E5FF] to-[#FF1744]" />

        {/* Categories Preview */}
        <section className="relative py-16 halftone-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2
                className="text-4xl font-black uppercase text-[#f5f5f5] comic-text-outline"
                style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
              >
                What We Carry
              </h2>
              <p className="mt-2 text-lg text-[#a0a8d0]">Browse our collection of trading cards and collectibles</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Card
                  key={category.name}
                  className="comic-card group cursor-pointer overflow-hidden rounded-lg bg-[#1a1f4e]"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${category.color}20`, border: `2px solid ${category.color}` }}
                    >
                      <category.icon className="h-7 w-7" style={{ color: category.color }} />
                    </div>
                    <h3
                      className="text-xl font-bold uppercase transition-colors"
                      style={{
                        fontFamily: "'Bangers', 'Impact', sans-serif",
                        color: category.color,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#a0a8d0]">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
