import React from "react";

const IconSupport = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="42"
      height="36"
      rx="8"
      fill="#5EEAD4"
      transform="translate(3 6)"
    />
  </svg>
);

const IconAtms = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="6" y="12" width="36" height="30" rx="4" fill="#4169E1" />
  </svg>
);

const IconCashDeposits = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="24" width="40" height="16" rx="4" fill="#32CD32" />
    <rect x="4" y="18" width="40" height="16" rx="4" fill="#32CD32" />
    <rect x="4" y="12" width="40" height="16" rx="4" fill="#32CD32" />
  </svg>
);

const IconLocations = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 45C24 45 40 33.12 40 21C40 12.16 32.84 5 24 5C15.16 5 8 12.16 8 21C8 33.12 24 45 24 45Z"
      fill="#FFD600"
    />
    <circle cx="24" cy="21" r="10" fill="#32CD32" />
  </svg>
);

const features = [
  {
    icon: <IconSupport />,
    text: "$1,900,000 in prizes",
  },
  {
    icon: <IconAtms />,
    text: "40,223 members",
  },
  {
    icon: <IconCashDeposits />,
    text: "532 chapters",
  },
  {
    icon: <IconLocations />,
    text: "53 advisors",
  },
];

const BankAnywhere = () => {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16 items-center">
          <div className="md:col-span-5 text-center md:text-left">
            <h2
              className="text-black text-5xl md:text-[56px] lg:text-6xl font-bold tracking-[-0.02em] leading-[1.1]"
              dangerouslySetInnerHTML={{
                __html: "Everyone.<br />Everywhere.",
              }}
            />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="flex flex-col gap-12 sm:gap-14">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12">{feature.icon}</div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-black pt-1 leading-snug">
                    {feature.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankAnywhere;
