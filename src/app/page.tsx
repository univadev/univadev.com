import NavigationHeader from '@/components/sections/navigation-header';
import HeroSection from '@/components/sections/hero-section';
import PaycheckFeatures from '@/components/sections/paycheck-features';
import CreditBuildingSection from '@/components/sections/credit-building';
// Temporarily hidden: anonymous testimonials
// import TestimonialsCarousel from '@/components/sections/testimonials-carousel';
// Temporarily hidden: services messaging
// import ServicesSection from '@/components/sections/services-section';
import SavingsFeature from '@/components/sections/savings-feature';
import CryptoFeature from '@/components/sections/crypto-feature';
import TeenBankingSection from '@/components/sections/teen-banking';
import SecurityFeatures from '@/components/sections/security-features';
import FinalCta from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main>
        <HeroSection />
        <section aria-label="Our impact" className="bg-white border-b border-black/10">
          <dl className="container mx-auto grid grid-cols-2 gap-6 px-5 py-10 text-center sm:px-8 md:py-14">
            <div>
              <dt className="text-base text-black/60 md:text-lg">Participants</dt>
              <dd className="mt-2 text-4xl font-bold tracking-tight text-black md:text-5xl">1,600+</dd>
            </div>
            <div>
              <dt className="text-base text-black/60 md:text-lg">In prizes</dt>
              <dd className="mt-2 text-4xl font-bold tracking-tight text-black md:text-5xl">$94K+</dd>
            </div>
          </dl>
        </section>
        <PaycheckFeatures />
        <CreditBuildingSection />
        {/* <TestimonialsCarousel /> */}
        {/* <ServicesSection /> */}
        <SavingsFeature />
        <CryptoFeature />
        <TeenBankingSection />
        <SecurityFeatures />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
