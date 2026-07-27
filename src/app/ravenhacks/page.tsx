import Image from "next/image";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { ArrowUpRight } from "lucide-react";

const DEVPOST_URL = "https://raven-hacks-vtl.devpost.com/";
const DISCORD_URL = "https://discord.gg/PRndM3ha66";

const stats = [
  { value: "120", label: "Participants aged 13–18" },
  { value: "$35K+", label: "Prize pool" },
  { value: "9", label: "Days of building" },
  { value: "100%", label: "Virtual" },
];

const winners = [
  {
    place: "1st place",
    project: "Project SignBridge",
    href: "https://devpost.com/software/project-signbridge",
  },
  {
    place: "2nd place",
    project: "echoOS",
    href: "https://devpost.com/software/echoos",
  },
  {
    place: "3rd place",
    project: "VoiceForge",
    href: "https://devpost.com/software/voiceforge-eivful",
  },
];

const specialAwards = [
  {
    award: "Best Use of ElevenLabs",
    project: "VoiceForge",
    href: "https://devpost.com/software/voiceforge-eivful",
  },
];

const requirements = [
  "Project title and description — a clear name and a 200–500 word overview explaining the problem it solves, how it works, technologies used, and challenges overcome.",
  "Demo video — a 2–3 minute walkthrough hosted on YouTube, Vimeo, or similar, showing the project in action.",
  "Code repository — a link to a public GitHub repo (or equivalent) with source code and a README covering setup instructions.",
  "Team info — all team members and their roles.",
  "Anything else (optional) — slides, prototypes, or additional documentation.",
];

const judgingCriteria = [
  { title: "Innovation & originality", weight: 25 },
  { title: "Real-world impact", weight: 25 },
  { title: "Technical implementation", weight: 20 },
  { title: "Presentation", weight: 10 },
  { title: "Design", weight: 10 },
  { title: "Feasibility & scalability", weight: 10 },
];

/* Deterministic weight-bar widths: 4px per percent, fixed so 10% never
   collapses to a sliver. Whole literal class strings only. */
const weightBarWidths: Record<number, string> = {
  25: "w-[100px]",
  20: "w-[80px]",
  10: "w-[40px]",
};

const sponsors = [
  { src: "/featherlessai-transparent.png", alt: "featherless.ai" },
  { src: "/elevenlabs-logo-black.svg", alt: "ElevenLabs" },
  { src: "/aops.png", alt: "Art of Problem Solving" },
  { src: "/codecrafters.png", alt: "CodeCrafters" },
  { src: "/xyz.png", alt: "gen.xyz" },
  { src: "/yri.jpg", alt: "YRI Fellowship" },
  { src: "/interviewcake.png", alt: "Interview Cake" },
];

export default function RavenHacks() {
  return (
    <div className="min-h-screen bg-m3-surface text-m3-on-surface">
      <NavigationHeader />
      <main className="pt-20">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          {/* 1. Hero — bare white, left-aligned */}
          <section className="pt-14 md:pt-24">
            <div className="max-w-[860px]">
              <div className="flex flex-wrap gap-2">
                <span className="m3-chip m3-chip-dot">Ended</span>
                <span className="m3-chip tabular-nums">
                  March 14–22, 2026 · Fully virtual
                </span>
              </div>
              <h1 className="m3-display-large mt-6">Raven Hacks VTL</h1>
              <p className="m3-body-large mt-5 text-m3-on-surface-variant">
                A nine-day virtual hackathon presented by Univa Dev — for
                students, by students.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={DEVPOST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-lg m3-btn-filled"
                >
                  Browse submissions
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-[18px] w-[18px]"
                  />
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-lg m3-btn-tonal"
                >
                  Join the Discord
                </a>
              </div>
            </div>
          </section>

          {/* 2. Stat band */}
          <section className="pt-14 md:pt-24">
            <div className="m3-panel mx-auto max-w-[1180px] bg-m3-surface-container">
              <div className="grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="m3-stat-display">{stat.value}</p>
                    <p className="m3-body-medium mt-2 text-m3-on-surface-variant">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Winners — the page's one inverse moment */}
          <section className="pt-14 md:pt-24">
            <div className="m3-panel m3-inverse mx-auto max-w-[1180px] bg-m3-inverse-surface">
              <h2 className="m3-display-small text-m3-on-inverse-surface">
                Winners
              </h2>
              <div className="mt-12 grid gap-4 lg:grid-cols-3">
                {winners.map((winner, index) => (
                  <a
                    key={winner.place}
                    href={winner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      index === 0
                        ? "m3-card-link rounded-m3-lg bg-m3-surface p-8 text-m3-on-surface hover:bg-[#ececec]"
                        : "m3-card-link rounded-m3-lg bg-m3-inverse-container p-8 text-m3-on-inverse-surface hover:bg-[#2e2e2e]"
                    }
                  >
                    <span
                      className={
                        index === 0
                          ? "m3-label-medium text-m3-outline"
                          : "m3-label-medium text-[#8a8a8a]"
                      }
                    >
                      {winner.place}
                    </span>
                    <span className="m3-title-large mt-4">
                      {winner.project}
                    </span>
                    <span aria-hidden="true" className="grow" />
                    <span className="m3-label-large mt-6 flex items-center gap-1">
                      View on Devpost
                      <ArrowUpRight
                        aria-hidden="true"
                        className="m3-arrow h-4 w-4"
                      />
                    </span>
                  </a>
                ))}
              </div>
              {specialAwards.map((specialAward) => (
                <a
                  key={specialAward.award}
                  href={specialAward.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-card-link mt-4 flex-row flex-wrap items-center justify-between gap-x-6 gap-y-2 rounded-m3-lg bg-m3-inverse-container px-8 py-6 text-m3-on-inverse-surface hover:bg-[#2e2e2e]"
                >
                  <span className="m3-title-medium">{specialAward.award}</span>
                  <span className="m3-label-large flex items-center gap-1">
                    {specialAward.project} — View on Devpost
                    <ArrowUpRight
                      aria-hidden="true"
                      className="m3-arrow h-4 w-4"
                    />
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* 4. About — the page's one editorial split */}
          <section className="pt-14 md:pt-24">
            <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <h2 className="m3-headline-large">
                  For students, by students
                </h2>
              </div>
              <div className="space-y-6 lg:col-span-7 lg:col-start-6">
                <p className="m3-body-large max-w-[560px] text-m3-on-surface-variant">
                  Raven Hacks VTL was presented by Univa Dev, a nonprofit
                  preparing the next generation of STEM leaders for the AI age.
                  It was run for students, by students — open exclusively to
                  participants aged 13–18.
                </p>
                <p className="m3-body-large max-w-[560px] text-m3-on-surface-variant">
                  The theme was AI, STEM, and creative problem-solving:
                  projects that address real-world challenges using technology.
                  Teams had nine days to go from an idea to a working demo,
                  with mentors, workshops, and sponsor tooling available
                  throughout, before submissions closed at 11:59 PM Eastern on
                  March 22, 2026.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Submissions + judging */}
          <section className="pt-14 md:pt-24">
            <div className="mx-auto grid max-w-[1180px] gap-4 lg:grid-cols-2">
              <div className="rounded-m3-xl bg-m3-surface-container p-6 md:p-10">
                <h3 className="m3-headline-small">What teams submitted</h3>
                <ul className="mt-8 space-y-5">
                  {requirements.map((requirement, index) => (
                    <li key={requirement} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="m3-label-medium pt-1.5 text-m3-outline"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="m3-body-large text-m3-on-surface-variant">
                        {requirement}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-m3-xl bg-m3-surface-container p-6 md:p-10">
                <h3 className="m3-headline-small">How projects were judged</h3>
                <div className="mt-8 space-y-6">
                  {judgingCriteria.map((criterion) => (
                    <div key={criterion.title}>
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="m3-title-medium">{criterion.title}</p>
                        <span className="m3-label-large tabular-nums">
                          {criterion.weight}%
                        </span>
                      </div>
                      <div
                        aria-hidden="true"
                        className={`mt-2 h-1 rounded-m3-xs bg-m3-primary ${weightBarWidths[criterion.weight]}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 6. Sponsors — bare white, centered, non-interactive tiles */}
          <section className="pt-14 md:pt-24">
            <div className="text-center">
              <h3 className="m3-headline-small">Backed by</h3>
              <p className="m3-body-medium mt-3 text-m3-on-surface-variant">
                Seven partners provided the prizes, credits, and tools behind
                the event.
              </p>
              <div className="mx-auto mt-10 grid max-w-[1180px] grid-cols-2 gap-3 md:grid-cols-4">
                {sponsors.map((sponsor) => (
                  <div
                    key={sponsor.alt}
                    className="flex h-24 items-center justify-center rounded-[20px] bg-m3-surface-container-low"
                  >
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={200}
                      height={60}
                      className="max-h-8 w-auto max-w-[min(140px,80%)] grayscale opacity-85"
                    />
                  </div>
                ))}
                <div className="flex h-24 items-center justify-center rounded-[20px] bg-m3-surface-container-low">
                  <span className="m3-label-medium text-m3-outline">
                    07 partners
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Final CTA */}
          <section className="py-14 md:py-24">
            <div className="m3-panel mx-auto max-w-[1180px] bg-m3-surface-container-high text-center">
              <h2 className="m3-display-small">The projects live on</h2>
              <p className="m3-body-large mx-auto mt-4 max-w-[560px] text-m3-on-surface-variant">
                Browse every submission on Devpost, or stay in touch with the
                community on Discord.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={DEVPOST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-lg m3-btn-filled"
                >
                  Browse submissions
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-lg m3-btn-white"
                >
                  Join the Discord
                </a>
              </div>
              <p className="m3-body-small mt-8 text-m3-on-surface-variant">
                Questions for the organizers or judges?{" "}
                <a
                  href="mailto:univadev0@gmail.com"
                  className="inline-block rounded-m3-xs py-[13px] text-m3-on-surface underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-m3-primary"
                >
                  univadev0@gmail.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
