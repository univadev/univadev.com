import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import PortalGlimpseSection from "@/components/sections/portal-glimpse-section";
import Image from "next/image";
import { Shield, Award, Sparkles, Lock } from "lucide-react";

const leaderAdvantages = [
  {
    icon: Shield,
    title: "Exclusivity On Purpose",
    description:
      "Only official chapter leaders can enter the portal. Access is verified, not open to the public.",
  },
  {
    icon: Award,
    title: "Global Recognition",
    description:
      "Leaders receive formal status, certificates, and opportunities only available through the chapter system.",
  },
  {
    icon: Sparkles,
    title: "Early Access to Everything",
    description:
      "Competitions, grants, and summits are released to chapters first.",
  },
];

const accessRequirements = [
  "An approved Chapter Founder",
  "A verified officer",
  "An officially recognized educator partner",
];

export default function ChapterResources() {
  return (
    <div className="min-h-screen bg-m3-surface text-m3-on-surface">
      <NavigationHeader />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="m3-label-large mb-4 text-m3-on-surface-variant">
                Chapter Leaders
              </p>
              <h1 className="m3-display-large mb-6 text-m3-on-surface">
                The Global Chapter Portal
              </h1>
              <p className="m3-body-large mx-auto mb-6 max-w-2xl text-m3-on-surface-variant">
                Where global youth leaders access the tools, intelligence, and
                technology powering our movement.
              </p>
              <p className="m3-chip mb-12">
                <Lock aria-hidden="true" className="h-4 w-4" strokeWidth={2} />
                Verified Chapter Leaders only
              </p>
              <div className="mx-auto max-w-3xl">
                <Image
                  src="/chapterportal.svg"
                  alt="Chapter Portal"
                  width={800}
                  height={646}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <PortalGlimpseSection />

        <section className="border-t border-m3-outline-variant py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto mb-12 max-w-2xl text-center">
                <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                  The leader advantage
                </h2>
                <p className="m3-body-large text-m3-on-surface-variant">
                  Elite access, global impact, and exclusive opportunities.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {leaderAdvantages.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="rounded-m3-md border border-m3-outline-variant bg-m3-surface-container-lowest p-6 md:p-7"
                    >
                      <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-m3-primary-container text-m3-on-primary-container">
                        <IconComponent
                          aria-hidden="true"
                          className="h-5 w-5"
                          strokeWidth={2}
                        />
                      </span>
                      <h3 className="m3-title-large mb-2 text-m3-on-surface">
                        {item.title}
                      </h3>
                      <p className="m3-body-large text-m3-on-surface-variant">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section
          id="portal"
          className="border-t border-m3-outline-variant bg-m3-surface-container-low py-16 md:py-24"
        >
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl rounded-m3-lg bg-m3-surface-container-highest p-8 md:p-10">
              <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-m3-primary text-m3-on-primary">
                <Lock aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="m3-title-large mb-3 text-m3-on-surface">
                Out of respect for our leaders, chapter materials are not
                displayed publicly.
              </p>
              <p className="m3-body-large mb-8 text-m3-on-surface-variant">
                To access the curriculum, toolkits, leadership training, and
                portal technologies, you must be:
              </p>

              <ul className="divide-y divide-m3-outline-variant border-y border-m3-outline-variant">
                {accessRequirements.map((requirement) => (
                  <li
                    key={requirement}
                    className="m3-body-large py-4 text-m3-on-surface"
                  >
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl rounded-m3-xl bg-m3-surface-container-highest p-10 text-center md:p-14">
              <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                Lead something bigger
              </h2>
              <p className="m3-body-large mb-8 text-m3-on-surface-variant">
                The next generation of AI innovators, builders, and leaders
                starts here.
              </p>
              <a
                href="/chapter-registration"
                className="m3-btn m3-btn-lg m3-btn-filled"
              >
                Start a chapter
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
