import Image from "next/image";

const CryptoFeature = () => {
  return (
    <section id="invest" className="bg-white py-20 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 md:items-center gap-12 lg:gap-20">
          <div className="md:col-span-7 order-first md:order-last">
            <Image
              src="/abt.png"
              alt="Image description"
              width={1400}
              height={1000}
              className="w-full h-auto"
            />
          </div>
          <div className="md:col-span-5 text-center md:text-left">
            <p className="text-sm font-semibold tracking-wider text-black uppercase mb-4">
              TECHNICAL EXCELLENCE
            </p>
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-0.01em] leading-[1.2] text-black mb-4">
              Master the skills that matter
            </h2>
            <p className="text-lg text-black leading-relaxed max-w-md mx-auto md:mx-0 mb-8">
              From AI and machine learning to software development and data
              science—build expertise through hands-on projects and expert-led
              workshops that prepare you for the future of tech.
            </p>
            <a
              href="/events"
              className="inline-block px-8 py-3 text-base font-semibold text-black bg-white border-2 border-black rounded-full transition-colors duration-300 hover:bg-black hover:text-white"
            >
              View Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoFeature;
