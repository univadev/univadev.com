const portalFeatures = [
  {
    title: "Leadership Intelligence",
    description:
      "Tools designed to amplify your chapter's impact through tracking growth, engagement, and regional influence.",
  },
  {
    title: "Curriculum Engine",
    description:
      "A living ecosystem of AI modules, workshops, and project pathways unlocked once your chapter is approved.",
  },
  {
    title: "Global Network",
    description:
      "Connect with other leaders, access private forums, and participate in international leadership circles.",
  },
  {
    title: "Event Infrastructure",
    description:
      "Professional templates and frameworks used to host world-class bootcamps, hackathons, and summits.",
  },
  {
    title: "Performance Analytics",
    description:
      "A powerful dashboard mapping your chapter's progress and positioning on the global leaderboard.",
  },
];

export default function PortalGlimpseSection() {
  return (
    <section className="pt-14 md:pt-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="m3-panel mx-auto max-w-[1180px] bg-m3-surface-container">
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <h2 className="m3-headline-large text-m3-on-surface">
              A glimpse into the portal
            </h2>
            <p className="m3-body-large mt-4 text-m3-on-surface-variant">
              Tools and systems reserved for verified chapter leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {portalFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className={
                  index === 3
                    ? "rounded-m3-lg bg-m3-surface p-7 lg:col-span-2 lg:col-start-2"
                    : "rounded-m3-lg bg-m3-surface p-7 lg:col-span-2"
                }
              >
                <span
                  aria-hidden="true"
                  className="m3-label-medium block text-m3-outline"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m3-title-large mt-6 text-m3-on-surface">
                  {feature.title}
                </h3>
                <p className="m3-body-large mt-2 text-m3-on-surface-variant">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
