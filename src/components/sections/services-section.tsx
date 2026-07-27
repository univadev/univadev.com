import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description: "Build your digital identity from the ground up",
  },
  {
    title: "Custom Software",
    description: "Tailored solutions that streamline operations",
  },
  {
    title: "Design Refinement",
    description: "Transform concepts into production-grade apps",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="m3-panel mx-auto max-w-[1180px] bg-m3-surface-container">
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <h2 className="m3-headline-large text-m3-on-surface">
              We build software for socially impactful initiatives
            </h2>
            <p className="m3-body-large mt-4 text-m3-on-surface-variant">
              We've worked with 6 nonprofits, totaling an average of 100k+
              monthly views on the websites we've built.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={
                  index === services.length - 1
                    ? "rounded-m3-lg bg-m3-surface p-7 md:col-span-2 lg:col-span-1"
                    : "rounded-m3-lg bg-m3-surface p-7"
                }
              >
                <span
                  aria-hidden="true"
                  className="m3-label-medium block text-m3-outline"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m3-title-large mt-6 text-m3-on-surface">
                  {service.title}
                </h3>
                <p className="m3-body-large mt-2 text-m3-on-surface-variant">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="m3-btn m3-btn-lg m3-btn-filled">
              Learn more about our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
