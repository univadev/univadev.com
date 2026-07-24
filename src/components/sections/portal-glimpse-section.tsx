import { Brain, Calendar, Layers, Network, TrendingUp } from "lucide-react";

const portalFeatures = [
  {
    icon: Brain,
    title: "Leadership Intelligence",
    description:
      "Tools designed to amplify your chapter's impact through tracking growth, engagement, and regional influence.",
  },
  {
    icon: Layers,
    title: "Curriculum Engine",
    description:
      "A living ecosystem of AI modules, workshops, and project pathways unlocked once your chapter is approved.",
  },
  {
    icon: Network,
    title: "Global Network",
    description:
      "Connect with other leaders, access private forums, and participate in international leadership circles.",
  },
  {
    icon: Calendar,
    title: "Event Infrastructure",
    description:
      "Professional templates and frameworks used to host world-class bootcamps, hackathons, and summits.",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "A powerful dashboard mapping your chapter's progress and positioning on the global leaderboard.",
  },
];

export default function PortalGlimpseSection() {
  return (
    <section className="border-t border-m3-outline-variant bg-m3-surface-container-low py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="m3-headline-large mb-4 text-m3-on-surface">
              A glimpse into the portal
            </h2>
            <p className="m3-body-large text-m3-on-surface-variant">
              Tools and systems reserved for verified chapter leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <article
                  key={feature.title}
                  className={`flex h-full flex-col rounded-m3-md border border-m3-outline-variant bg-m3-surface-container-lowest p-6 md:p-7 ${
                    index === portalFeatures.length - 1
                      ? "sm:col-span-2 lg:col-span-1"
                      : ""
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-m3-primary-container text-m3-on-primary-container">
                      <IconComponent
                        aria-hidden="true"
                        className="h-5 w-5"
                        strokeWidth={2}
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="m3-label-medium tabular-nums text-m3-outline"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="m3-title-large mb-2 text-m3-on-surface">
                    {feature.title}
                  </h3>
                  <p className="m3-body-large text-m3-on-surface-variant">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
