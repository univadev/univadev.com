import { redirect } from "next/navigation";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import ServicesOfferSection from "@/components/sections/services-offer-section";
import { ArrowUpRight, Check } from "lucide-react";

const PARTNER_MAILTO =
  "mailto:univadev0@gmail.com?subject=Partnership%20Inquiry";

const stats = [
  { value: "6", label: "Nonprofits served" },
  { value: "100k+", label: "Average monthly views" },
];

const benefits = [
  "Professional UI/UX that builds trust",
  "Production-grade applications",
  "Increased user engagement",
  "Scalable and maintainable code",
  "Student-led, professionally guided",
];

const tracks = [
  {
    title: "For developers",
    description:
      "Join our team of student developers and build software that creates real social impact. Work on meaningful projects, gain professional experience, and make a difference.",
    cta: "Apply as a developer",
    href: "/careers",
  },
  {
    title: "For partners",
    description:
      "Partner with us to amplify your mission. Get professional websites, custom software, and digital solutions that help you reach more people and create greater impact.",
    cta: "Partner with us",
    href: PARTNER_MAILTO,
  },
];

export default function ServicesPage() {
  // Temporarily hidden: remove this redirect to bring the services page back.
  redirect("/");

  return (
    <div className="min-h-screen bg-m3-surface text-m3-on-surface">
      <NavigationHeader />
      <main className="pt-20">
        {/* 1. Hero — bare white, left-aligned */}
        <section className="pt-14 md:pt-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="max-w-[820px]">
              <p className="m3-label-large text-m3-on-surface-variant">
                Services
              </p>
              <h1 className="m3-display-large mt-4 text-m3-on-surface">
                We build software for socially impactful initiatives
              </h1>
              <p className="m3-body-large mt-6 max-w-[640px] text-m3-on-surface-variant">
                We&apos;ve worked with six nonprofits, totaling an average of
                100k+ monthly views on the websites we&apos;ve built.
              </p>
              <p className="m3-body-large mt-4 max-w-[640px] text-m3-on-surface-variant">
                For some, we built the website and digital identity from the
                ground up. For others, we built custom software tools and
                refined their website design to increase user engagement —
                turning vibe-coded AI designs into production-grade apps with
                professional UI that builds trust.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PARTNER_MAILTO}
                  className="m3-btn m3-btn-lg m3-btn-filled w-full sm:w-auto"
                >
                  Partner with us
                </a>
                <a
                  href="/careers"
                  className="m3-btn m3-btn-lg m3-btn-tonal w-full sm:w-auto"
                >
                  Apply as a developer
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What we offer — tonal panel with static index-numeral cards */}
        <ServicesOfferSection />

        {/* 3. Our impact — the page's one inverse moment */}
        <section className="pt-14 md:pt-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="m3-panel m3-inverse mx-auto max-w-[1180px] bg-m3-inverse-surface">
              <h2 className="m3-display-small text-m3-on-inverse-surface">
                Our impact
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 md:gap-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="m3-stat text-m3-on-inverse-surface">
                      {stat.value}
                    </p>
                    <p className="m3-body-medium mt-2 text-m3-inverse-on-variant">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-x-12 gap-y-5 md:grid-cols-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-[18px] w-[18px] shrink-0 text-white"
                      strokeWidth={2.25}
                    />
                    <span className="m3-body-large text-[#e5e5e5]">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Get involved — whole-surface anchor cards */}
        <section className="py-14 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="mx-auto mb-14 max-w-[640px] text-center">
              <h2 className="m3-headline-large text-m3-on-surface">
                Get involved
              </h2>
              <p className="m3-body-large mt-4 text-m3-on-surface-variant">
                Choose your path to make an impact
              </p>
            </div>

            <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-4 md:grid-cols-2">
              {tracks.map((track) => (
                <a
                  key={track.title}
                  href={track.href}
                  className="m3-card-link rounded-m3-xl bg-m3-surface-container p-8 hover:bg-[#e0e0e0]"
                >
                  <span className="m3-title-large text-m3-on-surface">
                    {track.title}
                  </span>
                  <span className="m3-body-large mt-2 text-m3-on-surface-variant">
                    {track.description}
                  </span>
                  <span aria-hidden="true" className="grow" />
                  <span className="m3-label-large mt-8 flex items-center gap-1 text-m3-on-surface">
                    {track.cta}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="m3-arrow h-4 w-4"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
