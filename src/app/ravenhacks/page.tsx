import Image from "next/image";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { ArrowUpRight } from "lucide-react";

const DEVPOST_URL = "https://raven-hacks-vtl.devpost.com/";
const DISCORD_URL = "https://discord.gg/PRndM3ha66";

const eventFacts = [
  { label: "Dates", value: "March 14–22, 2026" },
  { label: "Format", value: "Fully virtual" },
  { label: "Participants", value: "120" },
  { label: "Prize pool", value: "$35,000+" },
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

const sponsors = [
  {
    href: "https://featherless.ai",
    src: "/featherlessai-transparent.png",
    alt: "featherless.ai",
  },
  {
    href: "https://elevenlabs.io",
    src: "/elevenlabs-logo-black.svg",
    alt: "ElevenLabs",
  },
  {
    href: "https://artofproblemsolving.com/",
    src: "/aops.png",
    alt: "Art of Problem Solving",
  },
  {
    href: "https://codecrafters.io/",
    src: "/codecrafters.png",
    alt: "CodeCrafters",
  },
  { href: "https://gen.xyz/", src: "/xyz.png", alt: "gen.xyz" },
  {
    href: "https://www.yriscience.com/",
    src: "/yri.jpg",
    alt: "YRI Fellowship",
  },
  {
    href: "https://www.interviewcake.com/",
    src: "/interviewcake.png",
    alt: "Interview Cake",
  },
];

const aboutFacts = [
  {
    label: "Eligibility",
    value: "Open exclusively to participants aged 13–18.",
  },
  {
    label: "Theme",
    value:
      "AI, STEM, and creative problem-solving — projects that address real-world challenges using technology.",
  },
  {
    label: "Submissions closed",
    value: "11:59 PM Eastern, March 22, 2026.",
  },
];

const requirements = [
  {
    title: "Project title and description",
    description:
      "A clear name and a 200–500 word overview explaining the problem it solves, how it works, technologies used, and challenges overcome.",
  },
  {
    title: "Demo video",
    description:
      "A 2–3 minute walkthrough hosted on YouTube, Vimeo, or similar, showing the project in action.",
  },
  {
    title: "Code repository",
    description:
      "A link to a public GitHub repo (or equivalent) with source code and a README covering setup instructions.",
  },
  {
    title: "Team info",
    description: "All team members and their roles.",
  },
  {
    title: "Anything else (optional)",
    description: "Slides, prototypes, or additional documentation.",
  },
];

const judgingCriteria = [
  {
    title: "Innovation & originality",
    weight: 25,
    description:
      "How novel is the solution, and does it offer a fresh perspective on an existing problem?",
  },
  {
    title: "Real-world impact",
    weight: 25,
    description:
      "Does it address a genuine problem with clearly defined, meaningful impact?",
  },
  {
    title: "Technical implementation",
    weight: 20,
    description:
      "Quality of execution, and whether the chosen tools were applied appropriately.",
  },
  {
    title: "Presentation",
    weight: 10,
    description:
      "Clarity of the documentation, and how well the demo communicates the core concept.",
  },
  {
    title: "Design",
    weight: 10,
    description:
      "Whether the interface or process flow is intuitive and aligned with the solution's purpose.",
  },
  {
    title: "Feasibility & scalability",
    weight: 10,
    description:
      "Whether the solution can realistically be built on and scaled beyond the hackathon.",
  },
];

export default function RavenHacks() {
  return (
    <div className="min-h-screen bg-m3-surface text-m3-on-surface">
      <NavigationHeader />
      <main className="pt-20">
        <section className="pb-12 pt-16 md:pb-16 md:pt-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <p className="m3-chip mb-6">Event ended</p>
              <h1 className="m3-display-large mb-6 text-m3-on-surface">
                Raven Hacks VTL
              </h1>
              <p className="m3-body-large max-w-2xl text-m3-on-surface-variant">
                A student-led virtual hackathon from Univa Dev. Over nine days,
                120 teenagers built, shipped, and demoed projects for a prize
                pool worth more than $35,000. Every submission is still up on
                Devpost.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={DEVPOST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-lg m3-btn-filled"
                >
                  Browse submissions
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-lg m3-btn-outlined"
                >
                  Join the Discord
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </a>
              </div>
            </div>

            <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-m3-md border border-m3-outline-variant bg-m3-outline-variant md:grid-cols-4">
              {eventFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="bg-m3-surface-container-lowest px-5 py-6"
                >
                  <dt className="m3-label-medium mb-2 uppercase text-m3-on-surface-variant">
                    {fact.label}
                  </dt>
                  <dd className="m3-title-large text-m3-on-surface">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant bg-m3-surface-container-low py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <h2 className="m3-headline-large mb-2 text-m3-on-surface">
                Results
              </h2>
              <p className="m3-body-large mb-10 text-m3-on-surface-variant">
                Final standings as judged at the close of submissions.
              </p>

              <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {winners.map((winner, index) => (
                  <li
                    key={winner.place}
                    className={index === 0 ? "md:col-span-2" : ""}
                  >
                    <a
                      href={winner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex h-full flex-col rounded-m3-md no-underline transition-colors ${
                        index === 0
                          ? "bg-m3-primary p-6 text-m3-on-primary hover:bg-m3-inverse-surface md:p-10"
                          : "border border-m3-outline-variant bg-m3-surface-container-lowest p-6 hover:bg-m3-surface-container md:p-7"
                      }`}
                    >
                      <span
                        className={`m3-label-medium uppercase ${
                          index === 0
                            ? "text-m3-on-primary/70"
                            : "text-m3-on-surface-variant"
                        }`}
                      >
                        {winner.place}
                      </span>
                      <span
                        className={`mt-3 ${
                          index === 0
                            ? "m3-display-medium"
                            : "m3-headline-small text-m3-on-surface"
                        }`}
                      >
                        {winner.project}
                      </span>
                      <span
                        className={`m3-label-large mt-auto inline-flex items-center gap-1 pt-6 ${
                          index === 0
                            ? "text-m3-on-primary"
                            : "text-m3-on-surface-variant group-hover:text-m3-on-surface"
                        }`}
                      >
                        View on Devpost
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </a>
                  </li>
                ))}
              </ol>

              <h3 className="m3-title-small mt-12 mb-4 uppercase tracking-wide text-m3-on-surface-variant">
                Special awards
              </h3>
              <ul className="divide-y divide-m3-outline-variant border-y border-m3-outline-variant">
                {specialAwards.map((specialAward) => (
                  <li key={specialAward.award}>
                    <a
                      href={specialAward.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 no-underline"
                    >
                      <span className="m3-title-medium text-m3-on-surface">
                        {specialAward.award}
                      </span>
                      <span className="m3-body-large inline-flex items-center gap-1 text-m3-on-surface-variant group-hover:text-m3-on-surface">
                        {specialAward.project}
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant py-16 md:py-20">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-5xl">
              <h2 className="m3-title-small mb-10 text-center uppercase tracking-wide text-m3-on-surface-variant">
                Sponsored by
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.alt}
                    href={sponsor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 transition-opacity hover:opacity-100"
                  >
                    <Image
                      src={sponsor.src}
                      alt={sponsor.alt}
                      width={200}
                      height={60}
                      className="h-10 w-auto object-contain md:h-12"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant bg-m3-surface-container-low py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[minmax(0,1fr)_20rem] md:gap-16">
              <div>
                <h2 className="m3-headline-large mb-6 text-m3-on-surface">
                  About the event
                </h2>
                <div className="m3-body-large space-y-4 text-m3-on-surface-variant">
                  <p className="m3-body-large">
                    Raven Hacks VTL was presented by{" "}
                    <strong className="font-semibold text-m3-on-surface">
                      Univa Dev
                    </strong>
                    , a nonprofit working to prepare the next generation of STEM
                    leaders for the AI age. It was run for students, by
                    students.
                  </p>
                  <p className="m3-body-large">
                    Teams had nine days to go from an idea to a working demo,
                    with mentors, workshops, and sponsor tooling available
                    throughout. Judging happened after submissions closed, and
                    the results are listed above.
                  </p>
                </div>
              </div>

              <dl className="divide-y divide-m3-outline-variant border-t border-m3-outline-variant">
                {aboutFacts.map((fact) => (
                  <div key={fact.label} className="py-4">
                    <dt className="m3-label-medium mb-1 uppercase text-m3-on-surface-variant">
                      {fact.label}
                    </dt>
                    <dd className="m3-body-large text-m3-on-surface">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:gap-16">
              <div>
                <h2 className="m3-headline-medium mb-2 text-m3-on-surface">
                  What teams submitted
                </h2>
                <p className="m3-body-large mb-8 text-m3-on-surface-variant">
                  Every entry went through Devpost with the following.
                </p>
                <ol className="divide-y divide-m3-outline-variant border-y border-m3-outline-variant">
                  {requirements.map((item, index) => (
                    <li key={item.title} className="flex gap-4 py-5">
                      <span
                        aria-hidden="true"
                        className="m3-label-large mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-m3-secondary-container tabular-nums text-m3-on-secondary-container"
                      >
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="m3-title-medium mb-1 text-m3-on-surface">
                          {item.title}
                        </h3>
                        <p className="m3-body-medium text-m3-on-surface-variant">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="m3-headline-medium mb-2 text-m3-on-surface">
                  How they were judged
                </h2>
                <p className="m3-body-large mb-8 text-m3-on-surface-variant">
                  Six criteria, weighted as shown.
                </p>
                <ul className="divide-y divide-m3-outline-variant border-y border-m3-outline-variant">
                  {judgingCriteria.map((item) => (
                    <li key={item.title} className="py-5">
                      <div className="mb-1 flex items-baseline justify-between gap-4">
                        <h3 className="m3-title-medium text-m3-on-surface">
                          {item.title}
                        </h3>
                        <span className="m3-label-large shrink-0 tabular-nums text-m3-on-surface-variant">
                          {item.weight}%
                        </span>
                      </div>
                      <p className="m3-body-medium text-m3-on-surface-variant">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-m3-outline-variant bg-m3-surface-container-low py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl rounded-m3-xl bg-m3-surface-container-highest p-10 text-center md:p-14">
              <h2 className="m3-headline-large mb-4 text-m3-on-surface">
                The projects are still online
              </h2>
              <p className="m3-body-large mb-8 text-m3-on-surface-variant">
                Browse every submission on Devpost, or stay in touch with the
                community on Discord.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={DEVPOST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-lg m3-btn-filled"
                >
                  Browse submissions
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </a>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="m3-btn m3-btn-lg m3-btn-outlined"
                >
                  Join the Discord
                  <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
                </a>
              </div>
              <p className="m3-body-medium mt-8 text-m3-on-surface-variant">
                Questions for the organizers or judges?{" "}
                <a
                  href="mailto:univadev0@gmail.com"
                  className="font-medium text-m3-on-surface underline underline-offset-2"
                >
                  univadev0@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
