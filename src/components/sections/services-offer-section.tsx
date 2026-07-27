const serviceOffers = [
  {
    title: "Website Development",
    description:
      "Build your digital identity from the ground up. We create professional, production-grade websites that build trust and engage your audience.",
  },
  {
    title: "Custom Software Tools",
    description:
      "Develop tailored software solutions that streamline your operations and amplify your impact. From concept to deployment.",
  },
  {
    title: "Design & UX Refinement",
    description:
      "Transform AI-generated designs into polished, professional interfaces that increase user engagement and build credibility.",
  },
];

export default function ServicesOfferSection() {
  return (
    <section className="pt-14 md:pt-24">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="m3-panel mx-auto max-w-[1180px] bg-m3-surface-container">
          <div className="mx-auto mb-14 max-w-[640px] text-center">
            <h2 className="m3-headline-large text-m3-on-surface">
              What we offer
            </h2>
            <p className="m3-body-large mt-4 text-m3-on-surface-variant">
              Comprehensive tech solutions for nonprofits
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceOffers.map((offer, index) => (
              <article
                key={offer.title}
                className={
                  index === serviceOffers.length - 1
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
                  {offer.title}
                </h3>
                <p className="m3-body-large mt-2 text-m3-on-surface-variant">
                  {offer.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
