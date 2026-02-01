"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "About",
    items: [
      { href: "/about/", label: "About Us" },
      { href: "/team/", label: "Meet the Team" },
      { href: "/advisors/", label: "Advisors" },
    ],
  },
  {
    label: "Events",
    items: [
      { href: "/ravenhacks/", label: "Raven Hacks" },
      { href: "/univadev-summit/", label: "Univa Dev Summit" },
      { href: "/events/", label: "All events" },
    ],
  },
  {
    label: "Chapters",
    items: [
      { href: "/chapter-registration/", label: "Start a Chapter" },
      { href: "/chapter-resources/", label: "Chapter Resources" },
    ],
  },
];

const utilityLinks = [
  { href: "/services/", label: "Services" },
  { href: "/donate/", label: "Donate" },
  { href: "/impact/", label: "Community" },
];

const NavigationHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileTab, setMobileTab] = useState<"main" | "submenu">("main");
  const [selectedMobileLink, setSelectedMobileLink] = useState<
    (typeof navLinks)[0] | null
  >(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleMobileLinkClick = (link: (typeof navLinks)[0]) => {
    setSelectedMobileLink(link);
    setMobileTab("submenu");
  };

  const handleMobileBack = () => {
    setMobileTab("main");
    setSelectedMobileLink(null);
  };

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
    setMobileTab("main");
    setSelectedMobileLink(null);
  };

  const logoUrl = "/univadev.svg";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || isMenuOpen
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-5 sm:px-8 lg:px-12">
          <div className="relative flex h-[74px] items-center">
            {/* Mobile Header */}
            <div className="flex flex-1 items-center justify-between lg:hidden">
              <a href="/">
                <Image
                  src={logoUrl}
                  alt="Univa Dev Logo"
                  width={60}
                  height={23}
                  priority
                />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 relative z-10 cursor-pointer"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-black" />
                ) : (
                  <Menu className="h-6 w-6 text-black" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:items-center w-full">
              <nav className="flex gap-x-8 justify-self-start">
                {navLinks.map((link) => (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="text-base font-sans text-black transition-all border-b-2 border-transparent hover:border-b-2 hover:border-black flex items-center gap-1 h-[74px] cursor-pointer">
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Glassmorphic Dropdown with extended hover area */}
                    <div
                      className={cn(
                        "absolute top-full left-0 transition-all duration-100 origin-top",
                        openDropdown === link.label
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      <div className="bg-white backdrop-blur-lg rounded-tr-2xl rounded-b-2xl shadow-lg border border-black/30 overflow-hidden min-w-[220px]">
                        <div className="py-0">
                          {link.items.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="block px-6 py-3 text-base text-black hover:bg-black/5 transition-colors duration-200"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </nav>

              <div className="justify-self-center">
                <a href="/">
                  <Image
                    src={logoUrl}
                    alt="Univa Dev Logo"
                    width={60}
                    height={23}
                    priority
                  />
                </a>
              </div>

              <nav className="flex items-center gap-x-8 justify-self-end">
                {utilityLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.href.startsWith("http") ? "noopener noreferrer" : ""
                    }
                    className="text-base font-sans text-black transition-all border-b-2 border-transparent hover:border-b-2 hover:border-black flex items-center gap-1 h-[34px] cursor-pointer no-underline"
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  variant="default"
                  className="rounded-full bg-black text-white px-6 py-2 h-auto text-base font-semibold font-sans hover:bg-neutral-800"
                  asChild
                >
                  <a href="#">Get Started</a>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[74px] left-0 right-0 bottom-0 bg-white z-40 flex flex-col overflow-hidden">
          {/* Tab 1: Main Links */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col transition-transform duration-300",
              mobileTab === "submenu" ? "-translate-x-full" : "translate-x-0"
            )}
          >
            <div className="flex-1 flex flex-col px-5 sm:px-8 py-8 overflow-y-auto">
              <nav className="flex flex-col gap-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleMobileLinkClick(link)}
                    className="w-full flex items-center justify-between text-2xl font-medium text-black font-sans py-4 hover:bg-black/5 rounded-lg px-4 transition-colors cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown className="h-6 w-6 -rotate-90" />
                  </button>
                ))}

                {/* Utility Links */}
                <div className="border-t border-black/10 pt-4 mt-4">
                  {utilityLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                      className="block text-xl font-medium text-black font-sans py-3 px-4 hover:bg-black/5 rounded-lg transition-colors"
                      onClick={handleMobileMenuClose}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
{/*}
            <div className="px-5 sm:px-8 pb-8 flex-shrink-0">
              <Button
                variant="default"
                className="w-full rounded-full bg-black text-white py-3 h-auto text-lg font-semibold font-sans hover:bg-neutral-800"
                asChild
              >
                <a href="#" onClick={handleMobileMenuClose}>
                  Get Started
                </a>
              </Button>
            </div>*/}
          </div>

          {/* Tab 2: Submenu */}
          <div
            className={cn(
              "absolute inset-0 flex flex-col transition-transform duration-300",
              mobileTab === "main" ? "translate-x-full" : "translate-x-0"
            )}
          >
            <div className="flex-1 flex flex-col px-5 sm:px-8 py-8 overflow-y-auto">
              <button
                onClick={handleMobileBack}
                className="flex items-center gap-2 text-xl font-medium text-black font-sans mb-6 py-2 cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6" />
                Back
              </button>

              {selectedMobileLink && (
                <div className="bg-white/60 backdrop-blur-md rounded-xl border border-white/30 overflow-hidden">
                  {selectedMobileLink.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-4 text-lg text-black hover:bg-black/5 transition-colors border-b border-black/5 last:border-b-0"
                      onClick={handleMobileMenuClose}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="px-5 sm:px-8 pb-8 flex-shrink-0">
              <Button
                variant="default"
                className="w-full rounded-full bg-black text-white py-3 h-auto text-lg font-semibold font-sans hover:bg-neutral-800"
                asChild
              >
                <a href="#" onClick={handleMobileMenuClose}>
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationHeader;
