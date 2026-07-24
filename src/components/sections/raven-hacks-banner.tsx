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
    <div
      className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-center gap-4 border-b border-m3-outline-variant bg-m3-surface-container-high px-4 text-m3-on-surface"
      style={{ height: BANNER_HEIGHT }}
    >
      <div className="flex flex-wrap items-center justify-center gap-3">
        <p className="m3-body-medium text-center text-m3-on-surface-variant">
          Raven Hacks VTL has ended
        </p>
        <Link
          href="/ravenhacks"
          className="m3-btn m3-btn-filled h-8 shrink-0 px-4"
        >
          View recap
        </Link>
      </div>
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-m3-on-surface-variant transition-colors hover:bg-m3-on-surface/8 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-m3-primary"
        aria-label="Dismiss banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

export const RAVEN_HACKS_BANNER_HEIGHT = BANNER_HEIGHT;
