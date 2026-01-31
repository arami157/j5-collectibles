import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Store, Sparkles } from "lucide-react";
import { J5Logo } from "@/components/j5-logo";

const values = [
  {
    icon: Heart,
    title: "Passion for Collecting",
    description: "We share your love for trading cards and collectibles. Every item in our shop is curated with care.",
    color: "#FF1744",
  },
  {
    icon: Users,
    title: "Community First",
    description: "More than a store, we're a gathering place for collectors to connect, trade, and share their passion.",
    color: "#00E5FF",
  },
  {
    icon: Store,
    title: "Local & Personal",
    description: "As a local shop, we take pride in knowing our customers by name and understanding their collections.",
    color: "#FFD700",
  },
  {
    icon: Sparkles,
    title: "Quality Selection",
    description: "From the latest releases to hard-to-find treasures, we stock what collectors actually want.",
    color: "#76FF03",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#111640] py-16 halftone-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1
                className="flex items-center justify-center text-5xl font-black uppercase text-[#f5f5f5] comic-text-outline"
                style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
              >
                About&nbsp;
                <J5Logo size="medium" className="inline-block" />
                <span
                  style={{
                    color: "#FF1744",
                    textShadow: "0 0 4px #fff, 0 0 2px #fff, 0 0 1px #fff",
                  }}
                >
                  Collectibles
                </span>
              </h1>
              <p className="mt-4 text-lg text-[#a0a8d0]">
                Your neighborhood destination for trading cards and collectibles
              </p>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#FF1744] via-[#FFD700] to-[#00E5FF]" />

        {/* Story Section */}
        <section className="relative py-16 halftone-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2
                className="text-3xl font-black uppercase text-[#FFD700]"
                style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
              >
                Our Story
              </h2>
              <div className="mt-6 space-y-4 text-[#a0a8d0] leading-relaxed">
                <p>
                  J5 Collectibles started with a simple idea: create a welcoming space where collectors of all ages could come together to find the cards and collectibles they love. What began as a passion project has grown into a beloved local destination for trading card enthusiasts.
                </p>
                <p>
                  We believe that collecting is more than just acquiring items—it&apos;s about the thrill of the hunt, the joy of discovery, and the connections made with fellow collectors along the way. That&apos;s why we&apos;ve built our shop around community and customer experience.
                </p>
                <p>
                  Whether you&apos;re a seasoned collector searching for that elusive chase card or a newcomer just starting your journey, you&apos;ll find a friendly face and helpful guidance at J5 Collectibles. We take the time to know our customers, understand their collections, and help them find exactly what they&apos;re looking for.
                </p>
                <p>
                  Stop by and see what makes J5 Collectibles different. We&apos;re not just a shop—we&apos;re part of the collecting community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#00E5FF] via-[#FF1744] to-[#FFD700]" />

        {/* Values Section */}
        <section className="relative bg-[#111640] py-16 halftone-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2
                className="text-4xl font-black uppercase text-[#f5f5f5] comic-text-outline"
                style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
              >
                What Sets Us Apart
              </h2>
              <p className="mt-2 text-lg text-[#a0a8d0]">The values that drive everything we do</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                  <CardContent className="p-6 text-center">
                    <div
                      className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${value.color}20`, border: `2px solid ${value.color}` }}
                    >
                      <value.icon className="h-7 w-7" style={{ color: value.color }} />
                    </div>
                    <h3
                      className="text-xl font-bold uppercase"
                      style={{
                        fontFamily: "'Bangers', 'Impact', sans-serif",
                        color: value.color,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#a0a8d0]">{value.description}</p>
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
