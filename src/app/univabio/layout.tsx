import type { Metadata } from "next";
import { Bruno_Ace_SC, Source_Sans_3 } from "next/font/google";

const brunoAce = Bruno_Ace_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bruno-ace",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UnivaBio | Univa Dev",
  description:
    "UnivaBio is a global student hackathon hosted by Univa Dev and BioCataalysis. Build technology for human health. $5,420 in prizes, fully online, submissions due October 6, 2026.",
};

export default function UnivaBioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${brunoAce.variable} ${sourceSans.variable}`}>
      {children}
    </div>
  );
}
