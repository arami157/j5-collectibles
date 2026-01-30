import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Facebook } from "lucide-react";

export default function ContactPage() {
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
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-[#a0a8d0]">
                Have a question or looking for something specific? We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#FF1744] via-[#FFD700] to-[#00E5FF]" />

        {/* Contact Info Section */}
        <section className="relative py-12 halftone-bg">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2
              className="mb-8 text-center text-3xl font-black uppercase text-[#FFD700]"
              style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
            >
              Ways to Reach Us
            </h2>
            <div className="space-y-6">
              {/* Phone */}
              <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#FF174420", border: "2px solid #FF1744" }}
                    >
                      <Phone className="h-5 w-5 text-[#FF1744]" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold uppercase text-[#FF1744]"
                        style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
                      >
                        Phone
                      </h3>
                      <p className="mt-1 text-sm text-[#a0a8d0]">Give us a call during business hours</p>
                      <a
                        href="tel:+19566039789"
                        className="mt-2 inline-block text-lg font-bold text-[#FFD700] hover:underline"
                      >
                        (956) 603-9789
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#FFD70020", border: "2px solid #FFD700" }}
                    >
                      <Mail className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold uppercase text-[#FFD700]"
                        style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
                      >
                        Email
                      </h3>
                      <p className="mt-1 text-sm text-[#a0a8d0]">Send us an email anytime</p>
                      <a
                        href="mailto:jessica.m.gomez02@gmail.com"
                        className="mt-2 inline-block text-lg font-bold text-[#FFD700] hover:underline"
                      >
                        jessica.m.gomez02@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Facebook */}
              <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#00E5FF20", border: "2px solid #00E5FF" }}
                    >
                      <Facebook className="h-5 w-5 text-[#00E5FF]" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-bold uppercase text-[#00E5FF]"
                        style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
                      >
                        Facebook
                      </h3>
                      <p className="mt-1 text-sm text-[#a0a8d0]">Join our community for updates and discussions</p>
                      <a
                        href="https://www.facebook.com/J5collectibles"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="comic-btn mt-4 inline-flex items-center rounded-md border-[#00E5FF] bg-transparent px-4 py-2 text-sm font-bold uppercase text-[#00E5FF] hover:bg-[#00E5FF]/10"
                        style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
                      >
                        <Facebook className="mr-2 h-4 w-4" />
                        Visit Our Facebook
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
