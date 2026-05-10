"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Brain, Calendar, Layers, Network, TrendingUp } from "lucide-react";

const portalFeatures = [
  {
    icon: Brain,
    title: "Leadership Intelligence",
    description:
      "Tools designed to amplify your chapter's impact through tracking growth, engagement, and regional influence.",
    accent: "#2563eb",
    soft: "#eff6ff",
    glow: "rgba(37, 99, 235, 0.14)",
  },
  {
    icon: Layers,
    title: "Curriculum Engine",
    description:
      "A living ecosystem of AI modules, workshops, and project pathways unlocked once your chapter is approved.",
    accent: "#0891b2",
    soft: "#ecfeff",
    glow: "rgba(8, 145, 178, 0.14)",
  },
  {
    icon: Network,
    title: "Global Network",
    description:
      "Connect with other leaders, access private forums, and participate in international leadership circles.",
    accent: "#4f46e5",
    soft: "#eef2ff",
    glow: "rgba(79, 70, 229, 0.14)",
  },
  {
    icon: Calendar,
    title: "Event Infrastructure",
    description:
      "Professional templates and frameworks used to host world-class bootcamps, hackathons, and summits.",
    accent: "#d97706",
    soft: "#fffbeb",
    glow: "rgba(217, 119, 6, 0.14)",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description:
      "A powerful dashboard mapping your chapter's progress and positioning on the global leaderboard.",
    accent: "#059669",
    soft: "#ecfdf5",
    glow: "rgba(5, 150, 105, 0.14)",
  },
];

const portalRevealLayouts = [
  {
    featureIndex: 0,
    step: 0,
    position: "left-0 top-0 w-[47%]",
    visibleMotion: "translate3d(0, 0, 0)",
    enterMotion: "translate3d(-2rem, 1rem, 0) scale(0.98)",
  },
  {
    featureIndex: 1,
    step: 0,
    position: "right-0 top-12 w-[47%]",
    visibleMotion: "translate3d(0, 0, 0)",
    enterMotion: "translate3d(2rem, 1rem, 0) scale(0.98)",
  },
  {
    featureIndex: 2,
    step: 1,
    position: "left-0 top-12 w-[47%]",
    visibleMotion: "translate3d(0, 0, 0)",
    enterMotion: "translate3d(-2rem, -1rem, 0) scale(0.98)",
  },
  {
    featureIndex: 3,
    step: 1,
    position: "right-0 top-0 w-[47%]",
    visibleMotion: "translate3d(0, 0, 0)",
    enterMotion: "translate3d(2rem, -1rem, 0) scale(0.98)",
  },
  {
    featureIndex: 4,
    step: 2,
    position: "left-1/2 top-6 w-[54%]",
    visibleMotion: "translate3d(-50%, 0, 0)",
    enterMotion: "translate3d(-50%, 1.5rem, 0) scale(0.98)",
  },
] as const;

function PortalFeatureCard({
  feature,
  idx,
  compact = false,
  settled = false,
  className = "",
}: {
  feature: (typeof portalFeatures)[number];
  idx: number;
  compact?: boolean;
  settled?: boolean;
  className?: string;
}) {
  const IconComponent = feature.icon;
  const cardSize = settled
    ? "min-h-[260px] p-7 lg:min-h-[280px] lg:p-8"
    : compact
      ? "min-h-[142px] p-4 md:p-5"
      : "min-h-[280px] p-8 sm:p-9";
  const iconSize = settled
    ? "h-14 w-14 xl:h-16 xl:w-16"
    : compact
      ? "h-11 w-11"
      : "h-16 w-16";
  const iconInnerSize = settled
    ? "h-7 w-7 xl:h-8 xl:w-8"
    : compact
      ? "h-6 w-6"
      : "h-8 w-8";

  return (
    <article
      className={`portal-feature-card group relative isolate flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.03)] transition-colors duration-300 ${cardSize} ${className}`}
    >
      <div
        className={`flex items-start justify-between gap-6 ${
          compact ? "mb-3" : settled ? "mb-5" : "mb-8"
        }`}
      >
        <div
          className={`portal-feature-icon flex items-center justify-center rounded-lg bg-[var(--portal-soft)] text-[var(--portal-accent)] ${iconSize}`}
        >
          <IconComponent
            aria-hidden="true"
            className={iconInnerSize}
            strokeWidth={2.4}
          />
        </div>
        <span
          aria-hidden="true"
          className={`portal-feature-index font-semibold text-gray-300 ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          {String(idx + 1).padStart(2, "0")}
        </span>
      </div>
      <h3
        className={`font-bold text-gray-950 ${
          compact
            ? "mb-2 text-base leading-tight"
            : settled
              ? "mb-3 text-xl leading-tight"
              : "mb-4 text-xl"
        }`}
      >
        {feature.title}
      </h3>
      <p
        className={`mb-0 text-gray-600 ${
          compact
            ? "text-[13px] leading-[1.45]"
            : "text-base leading-relaxed"
        }`}
      >
        {feature.description}
      </p>
    </article>
  );
}

export default function PortalGlimpseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [revealStep, setRevealStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let frame = 0;

    const updateRevealStep = () => {
      frame = 0;

      if (window.innerWidth < 768) {
        setRevealStep(3);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(
        1,
        section.offsetHeight - window.innerHeight,
      );
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
      const nextRevealStep =
        progress < 0.25 ? 0 : progress < 0.5 ? 1 : progress < 0.75 ? 2 : 3;

      setRevealStep((currentStep) =>
        currentStep === nextRevealStep ? currentStep : nextRevealStep,
      );
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateRevealStep);
    };

    updateRevealStep();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-visible={isVisible}
      data-final={revealStep === 3}
      className="portal-glimpse-section relative bg-slate-50 py-24 md:h-[420vh] md:py-0"
    >
      <div className="portal-glimpse-sticky relative md:sticky md:top-20 md:flex md:min-h-[calc(100svh-5rem)] md:items-center md:py-10">
        <div
          className="portal-glimpse-grid absolute inset-0"
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div
              className="portal-glimpse-heading mx-auto mb-16 max-w-3xl text-center md:mb-8 lg:mb-10"
              style={{ "--portal-delay": "0ms" } as CSSProperties}
            >
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                A Glimpse Into the Portal
              </h2>
              <p className="text-xl font-normal text-gray-600">
                Sleek tools. Powerful systems. Reserved for leaders.
              </p>
              <div className="portal-signal mx-auto mt-8 h-px w-56 overflow-hidden rounded-full bg-gray-200">
                <div className="portal-signal-tracer h-full w-20 rounded-full" />
              </div>
            </div>

            <div className="relative mx-auto hidden min-h-[560px] max-w-6xl md:block lg:min-h-[640px] xl:min-h-[700px]">
              <div
                className={`absolute inset-x-0 top-0 min-h-[360px] transition-opacity duration-300 lg:min-h-[380px] ${
                  revealStep === 3
                    ? "pointer-events-none opacity-0"
                    : "opacity-100"
                }`}
              >
                {portalRevealLayouts.map((layout, layoutIdx) => {
                  const feature = portalFeatures[layout.featureIndex];
                  const style = {
                    "--portal-delay":
                      layoutIdx % 2 === 1 ? "110ms" : "0ms",
                    "--portal-enter-motion": layout.enterMotion,
                    "--portal-visible-motion": layout.visibleMotion,
                    "--portal-accent": feature.accent,
                    "--portal-soft": feature.soft,
                    "--portal-glow": feature.glow,
                  } as CSSProperties;

                  return (
                    <div
                      key={layout.featureIndex}
                      data-active={revealStep === layout.step}
                      className={`portal-freeze-card-shell absolute ${layout.position}`}
                      style={style}
                    >
                      <PortalFeatureCard
                        feature={feature}
                        idx={layout.featureIndex}
                      />
                    </div>
                  );
                })}
              </div>

              <div
                data-active={revealStep === 3}
                className="portal-final-grid absolute inset-x-0 top-0 mx-auto grid max-w-6xl grid-cols-3 gap-5 lg:gap-6 xl:gap-7"
              >
                {portalFeatures.map((feature, idx) => {
                  const style = {
                    "--portal-delay": `${idx * 75}ms`,
                    "--portal-accent": feature.accent,
                    "--portal-soft": feature.soft,
                    "--portal-glow": feature.glow,
                  } as CSSProperties;

                  return (
                    <div key={feature.title} style={style}>
                      <PortalFeatureCard feature={feature} idx={idx} settled />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:hidden">
              {portalFeatures.map((feature, idx) => {
                const style = {
                  "--portal-delay": `${140 + idx * 90}ms`,
                  "--portal-accent": feature.accent,
                  "--portal-soft": feature.soft,
                  "--portal-glow": feature.glow,
                } as CSSProperties;

                return (
                  <div
                    key={feature.title}
                    className="portal-mobile-card-shell"
                    style={style}
                  >
                    <PortalFeatureCard feature={feature} idx={idx} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
