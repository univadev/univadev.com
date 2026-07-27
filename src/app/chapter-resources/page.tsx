import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import PortalGlimpseSection from "@/components/sections/portal-glimpse-section";
import Image from "next/image";

const leaderAdvantages = [
  {
    title: "Exclusivity On Purpose",
    description:
      "Only official chapter leaders can enter the portal. Access is verified, not open to the public.",
  },
  {
    title: "Global Recognition",
    description:
      "Leaders receive formal status, certificates, and opportunities only available through the chapter system.",
  },
  {
    title: "Early Access to Everything",
    description:
      "Competitions, grants, and summits are released to chapters first.",
  },
];

const eligibilityChips = [
  "Approved Chapter Founder",
  "Verified Chapter Officer",
  "Recognized Educator Partner",
];

export default function ChapterResources() {
  return (
    <div className="min-h-screen bg-m3-surface text-m3-on-surface">
      <NavigationHeader />
      <main className="pt-20">
        <section className="pt-14 md:pt-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="m3-label-large text-m3-on-surface-variant">
                  Chapter Leaders
                </p>
                <h1 className="m3-display-large mt-4 text-m3-on-surface">
                  The Global Chapter Portal
                </h1>
                <p className="m3-body-large mt-6 max-w-[520px] text-m3-on-surface-variant">
                  Where global youth leaders access the tools, intelligence, and
                  technology powering our movement.
                </p>
                <span className="m3-chip m3-chip-ink mt-6">
                  <span className="hidden min-[400px]:inline">
                    Available only to verified Chapter Leaders
                  </span>
                  <span className="min-[400px]:hidden">
                    Verified Chapter Leaders only
                  </span>
                </span>
              </div>
              <div className="lg:col-span-6">
                <div className="rounded-m3-lg bg-m3-surface-container p-6 lg:rounded-m3-2xl lg:p-10">
                  <Image
                    src="/chapterportal.svg"
                    alt="Chapter Portal"
                    width={800}
                    height={646}
                    className="h-auto w-full grayscale"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <PortalGlimpseSection />

        <section className="pt-14 md:pt-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="mx-auto max-w-[1180px]">
              <h2 className="m3-headline-large text-m3-on-surface">
                The leader advantage
              </h2>
              <div className="mt-14 space-y-12">
                {leaderAdvantages.map((item, index) => (
                  <div
                    key={item.title}
                    className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12"
                  >
                    <div className="md:col-span-2">
                      <span
                        aria-hidden="true"
                        className="m3-label-medium text-m3-outline md:hidden"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden="true"
                        className="m3-stat hidden text-[48px] text-[#d0d0d0] md:block"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="md:col-span-7 md:col-start-3">
                      <h3 className="m3-title-large text-m3-on-surface">
                        {item.title}
                      </h3>
                      <p className="m3-body-large mt-2 max-w-[560px] text-m3-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pt-14 pb-32 md:pt-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="m3-panel m3-inverse mx-auto max-w-[1180px] bg-m3-inverse-surface">
              <div className="max-w-[720px]">
                <h2 className="m3-display-small text-m3-on-inverse-surface">
                  Access is earned
                </h2>
                <p className="m3-body-large mt-4 text-m3-inverse-on-variant">
                  Out of respect for our leaders, chapter materials are not
                  displayed publicly. Access to the curriculum, toolkits,
                  leadership training, and portal technologies requires
                  approval.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {eligibilityChips.map((label) => (
                    <span
                      key={label}
                      className="m3-label-large inline-flex min-h-10 items-center rounded-full bg-[#2b2b2b] px-4 py-1.5 text-m3-on-inverse-surface"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <div className="mt-12">
                  <a
                    href="/chapter-registration"
                    className="m3-btn m3-btn-lg m3-btn-white"
                  >
                    Lead something bigger
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
