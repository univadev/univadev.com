import Image from "next/image";

const features = [
  {
    iconSrc: "univadev.svg",
    iconAlt: "Student-led organization",
    title: "Student-Led",
    description:
      "Run by students, for students—with guidance from industry professionals",
  },
  {
    iconSrc: "univadev.svg",
    iconAlt: "Free and accessible",
    title: "Free & Accessible",
    description:
      "High-quality opportunities available to students of all backgrounds",
  },
  {
    iconSrc: "univadev.svg",
    iconAlt: "World-class standards",
    title: "World-Class Standards",
    description:
      "Programs that match the quality of leading tech and education organizations",
  },
];

const SecurityFeatures = () => {
  return (
    <section className="bg-white pt-10 pb-20 md:pt-[120px] md:pb-[140px]">
      <div className="container mx-auto">
        <div className="mb-10 text-center md:mb-20">
          <h2 className="font-display text-[32px] font-bold leading-[1.2] tracking-[-0.01em] text-black md:text-[48px]">
            Why Univa Dev?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <figure className="relative h-24 w-24">
                <Image
                  src={feature.iconSrc}
                  alt={feature.iconAlt}
                  width={96}
                  height={96}
                />
              </figure>
              <div className="mt-6 flex flex-col gap-y-4">
                <h3 className="font-display text-xl font-semibold text-black md:text-2xl">
                  {feature.title}
                </h3>
                <p className="max-w-[320px] text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
