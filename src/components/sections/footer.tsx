import Image from "next/image";
import { Instagram, Linkedin, Twitter, Facebook, Star } from "lucide-react";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 28.57 32.59" fill="currentColor" {...props}>
    <path d="M20.67,0H15.42V20.21a5.61,5.61,0,1,1-9.43-4.52V11.2A10.11,10.11,0,1,0,15.42,21.3V10.15s0,0,0,0A22.8,22.8,0,0,0,28.57,5.63V11A17.38,17.38,0,0,1,20.67,14Z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white text-black font-sans">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-[80px] pt-[80px] pb-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 sm:gap-x-8">
          <div className="lg:col-span-3">
            <a href="/">
              <Image
                src="/univadev.svg"
                alt="Univa Dev logo"
                width={114}
                height={32}
              />
            </a>
          </div>

          <div className="md:col-span-1 lg:col-start-10 lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-base mb-6">Company</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/about" className="text-base hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-base hover:underline">
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-base hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-base mb-6">Get Involved</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/ravenhacks" className="text-base hover:underline">
                    Raven Hacks
                  </a>
                </li>

                <li>
                  <a
                    href="/chapter-registration"
                    className="text-base hover:underline"
                  >
                    Start a Chapter
                  </a>
                </li>
                <li>
                  <a href="/impact" className="text-base hover:underline">
                    Community
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/*<div className="md:col-start-2 md:row-start-1 lg:col-start-10 lg:col-span-3 flex flex-col items-start md:items-end gap-6">
            <a
              href="#"
              className="bg-[#f7f7f7] p-4 rounded-lg w-full max-w-xs md:w-[220px] text-left"
            >
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-base">Trustpilot</h4>
              </div>
              <div className="flex my-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 text-[#00b67a] fill-[#00b67a]"
                  />
                ))}
              </div>
              <p className="text-sm">
                <span className="font-semibold">TrustScore 5.0</span> | 63
                reviews
              </p>
            </a>
            <a
              href="#"
              className="bg-[#f7f7f7] p-1.5 rounded-md inline-flex items-center gap-3"
            >
              <span className="text-2xl font-bold text-black pr-2">
                GDPR Compliant
              </span>
            </a>
          </div>*/}
        </div>

        <div className="border-t border-[#e2e2e2] mt-10 mb-8"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-y-8 gap-x-4">
          <p className="text-sm text-[#525252] order-3 lg:order-1">
            Copyright © 2025 Univa Dev
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm order-2 lg:order-2">
            <a href="/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/cookie-notice" className="hover:underline">
              Cookie Notice
            </a>
            <a href="/code-of-conduct" className="hover:underline">
              Code of Conduct
            </a>
          </nav>
          <div className="flex items-center gap-6 order-1 lg:order-3">
            <a href="https://instagram.com/univadev" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>

            <a
              href="https://linkedin.com/company/univa-dev"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
