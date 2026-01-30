import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const storeHours = [
  { day: "Monday", hours: "1:00 PM - 9:00 PM" },
  { day: "Tuesday", hours: "1:00 PM - 9:00 PM" },
  { day: "Wednesday", hours: "1:00 PM - 9:00 PM" },
  { day: "Thursday", hours: "1:00 PM - 9:00 PM" },
  { day: "Friday", hours: "1:00 PM - 9:00 PM" },
  { day: "Saturday", hours: "12:00 PM - 9:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const storeAddress = {
  street: "501 South Alamo Rd Suite 105",
  city: "Alamo",
  state: "TX",
  zip: "78516",
};

const phoneNumber = "(956) 603-9789";

export default function LocationPage() {
  const fullAddress = `${storeAddress.street}, ${storeAddress.city}, ${storeAddress.state} ${storeAddress.zip}`;
  const encodedAddress = encodeURIComponent(fullAddress);

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
                Find Us
              </h1>
              <p className="mt-4 text-lg text-[#a0a8d0]">
                Visit us in person to browse our collection and connect with fellow collectors.
              </p>
            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#FF1744] via-[#FFD700] to-[#00E5FF]" />

        {/* Store Info Section */}
        <section className="relative py-12 halftone-bg">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-12">

              {/* Storefront Photo */}
              <div className="md:col-span-4">
                <div
                  className="h-full overflow-hidden rounded-lg border-2 border-[#FFD700]"
                  style={{ boxShadow: "3px 3px 0px #FF1744" }}
                >
                  <Image
                    src="/storefront.jpeg"
                    alt="J5 Collectibles storefront"
                    width={768}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Details Column */}
              <div className="md:col-span-8 flex flex-col gap-5">

                {/* Address & Phone Row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                    <CardContent className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-[#FF1744]" />
                        <h3
                          className="text-lg font-bold uppercase text-[#FF1744]"
                          style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
                        >
                          Address
                        </h3>
                      </div>
                      <address className="not-italic text-sm leading-relaxed text-[#a0a8d0]">
                        <p>{storeAddress.street}</p>
                        <p>{storeAddress.city}, {storeAddress.state} {storeAddress.zip}</p>
                      </address>
                    </CardContent>
                  </Card>

                  <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                    <CardContent className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <Phone className="h-5 w-5 text-[#FFD700]" />
                        <h3
                          className="text-lg font-bold uppercase text-[#FFD700]"
                          style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
                        >
                          Phone
                        </h3>
                      </div>
                      <a
                        href={`tel:+1${phoneNumber.replace(/\D/g, "")}`}
                        className="text-lg font-bold text-[#FFD700] hover:underline"
                      >
                        {phoneNumber}
                      </a>
                    </CardContent>
                  </Card>
                </div>

                {/* Store Hours */}
                <Card className="comic-card overflow-hidden rounded-lg bg-[#1a1f4e]">
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#00E5FF]" />
                      <h3
                        className="text-lg font-bold uppercase text-[#00E5FF]"
                        style={{ fontFamily: "'Bangers', 'Impact', sans-serif" }}
                      >
                        Store Hours
                      </h3>
                    </div>
                    <div className="grid gap-x-8 sm:grid-cols-2">
                      <ul className="space-y-1 text-sm">
                        {storeHours.slice(0, 4).map((schedule) => (
                          <li key={schedule.day} className="flex items-center justify-between gap-4">
                            <span className="font-semibold text-[#f5f5f5]">{schedule.day}</span>
                            <span className={schedule.hours === "Closed" ? "font-bold text-[#FF1744]" : "text-[#a0a8d0]"}>
                              {schedule.hours}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-1 text-sm">
                        {storeHours.slice(4).map((schedule) => (
                          <li key={schedule.day} className="flex items-center justify-between gap-4">
                            <span className="font-semibold text-[#f5f5f5]">{schedule.day}</span>
                            <span className={schedule.hours === "Closed" ? "font-bold text-[#FF1744]" : "text-[#a0a8d0]"}>
                              {schedule.hours}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn flex items-center justify-center gap-2 rounded-md bg-[#FF1744] px-5 py-3 text-lg font-bold uppercase text-white hover:bg-[#d50000]"
                    style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
                  >
                    <Navigation className="h-5 w-5" />
                    Get Directions
                  </a>
                  <a
                    href={`tel:+1${phoneNumber.replace(/\D/g, "")}`}
                    className="comic-btn flex items-center justify-center gap-2 rounded-md border-[#FFD700] bg-transparent px-5 py-3 text-lg font-bold uppercase text-[#FFD700] hover:bg-[#FFD700]/10"
                    style={{ fontFamily: "'Bangers', 'Impact', sans-serif", letterSpacing: "0.06em" }}
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Comic divider */}
        <div className="h-2 bg-gradient-to-r from-[#00E5FF] via-[#FF1744] to-[#FFD700]" />

        {/* Google Maps Section */}
        <section className="relative bg-[#111640] py-10">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div
              className="h-[350px] overflow-hidden rounded-lg border-2 border-[#FFD700]"
              style={{ boxShadow: "3px 3px 0px #FFD700" }}
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="J5 Collectibles Location"
                className="h-full w-full"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
