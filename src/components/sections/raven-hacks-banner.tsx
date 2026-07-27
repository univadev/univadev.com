"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

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
    <div className="fixed left-0 right-0 top-0 z-[100] flex h-12 items-center justify-center gap-4 bg-m3-inverse-surface px-14 text-m3-on-inverse-surface">
      <p className="m3-body-medium hidden min-[440px]:block">
        Raven Hacks VTL has ended
      </p>
      <p className="m3-body-medium hidden min-[380px]:block min-[440px]:hidden">
        Raven Hacks has ended
      </p>
      <Link
        href="/ravenhacks"
        className="m3-focus-inset relative inline-flex h-8 shrink-0 items-center rounded-full bg-m3-surface px-4 font-m3 text-[13px] font-medium text-m3-on-surface no-underline [transition:background-color_150ms_var(--ease-m3),border-radius_250ms_var(--ease-m3)] after:absolute after:inset-x-0 after:-inset-y-2 hover:bg-[#ebebeb] active:rounded-[12px] active:bg-[#e0e0e0] focus-visible:outline-3 focus-visible:outline-m3-on-surface motion-reduce:transition-none motion-reduce:active:rounded-full"
      >
        View recap
      </Link>
      <button
        type="button"
        onClick={handleDismiss}
        className="m3-focus-inset absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-m3-inverse-on-variant transition-colors duration-150 ease-m3 hover:bg-white/8 hover:text-white active:bg-white/12 focus-visible:outline-3 focus-visible:outline-white motion-reduce:transition-none"
        aria-label="Dismiss banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

export const RAVEN_HACKS_BANNER_HEIGHT = BANNER_HEIGHT;
