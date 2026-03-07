"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const BANNER_DISMISSED_KEY = "univadev-raven-hacks-banner-dismissed";
const BANNER_HEIGHT = 48;

export function RavenHacksBanner({
  onDismissChange,
}: {
  onDismissChange?: (visible: boolean) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const dismissed = localStorage.getItem(BANNER_DISMISSED_KEY) === "true";
    setIsVisible(!dismissed);
  }, [mounted]);

  useEffect(() => {
    onDismissChange?.(isVisible);
  }, [isVisible, onDismissChange]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      localStorage.setItem(BANNER_DISMISSED_KEY, "true");
    }
    onDismissChange?.(false);
  };

  if (!mounted || !isVisible) return null;

  return (
    <div
      className="fixed left-0 right-0 top-0 z-[100] flex h-12 items-center justify-center gap-4 bg-[#ff7f50] px-4 py-2 text-white shadow-sm"
      style={{ height: BANNER_HEIGHT }}
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <p className="m-0 text-center text-sm font-medium leading-none sm:text-base">
          Join Raven Hacks VTL now!
        </p>
        <Button
          size="sm"
          variant="secondary"
          className="h-8 shrink-0 rounded-full bg-white px-4 text-[#ff7f50] hover:bg-white/90"
          asChild
        >
          <Link href="/ravenhacks" className="flex items-center">
            Join now
          </Link>
        </Button>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Dismiss banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

export const RAVEN_HACKS_BANNER_HEIGHT = BANNER_HEIGHT;
