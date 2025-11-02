import NavigationHeader from '@/components/sections/navigation-header';
import HeroSection from '@/components/sections/hero-section';
import PaycheckFeatures from '@/components/sections/paycheck-features';
import CreditBuildingSection from '@/components/sections/credit-building';
import TestimonialsCarousel from '@/components/sections/testimonials-carousel';
import BankAnywhere from '@/components/sections/bank-anywhere';
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
        <PaycheckFeatures />
        <CreditBuildingSection />
        <TestimonialsCarousel />
        <BankAnywhere />
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