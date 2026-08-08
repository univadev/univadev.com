"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./univabio.css";

const DEVPOST_URL = "https://univabio.devpost.com/";
const RULES_URL = "https://univabio.devpost.com/rules";
const DEADLINE_ISO = "2026-10-07T03:45:00Z"; // Oct 6, 2026 @ 11:45pm EDT

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#info", label: "Info" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#register", label: "Register" },
  { href: "#faq", label: "FAQ" },
];

const stats = [
  { value: "$5,420", label: "in prizes" },
  { value: "42", label: "participants" },
  { value: "13+", label: "ages, students only" },
  { value: "100%", label: "online" },
];

const resources = [
  {
    href: DEVPOST_URL,
    kicker: "01",
    title: "Devpost",
    desc: "Register and submit your project",
  },
  {
    href: RULES_URL,
    kicker: "02",
    title: "Rules",
    desc: "Eligibility and the full rulebook",
  },
  {
    href: "https://univabio.devpost.com/project-gallery",
    kicker: "03",
    title: "Project gallery",
    desc: "See what others are building",
  },
  {
    href: "https://univabio.devpost.com/updates",
    kicker: "04",
    title: "Updates",
    desc: "Announcements from the organizers",
  },
];

const sponsors = [
  { href: "https://momen.app/", word: "Momen" },
  {
    href: "https://codecrafters.io/",
    img: "/univabio/codecrafters.png",
    alt: "CodeCrafters",
  },
  { href: "https://interviewbuddy.net/", word: "InterviewBuddy" },
];

const faqs = [
  {
    q: "What is UnivaBio?",
    a: "A global student hackathon hosted by Univa Dev and BioCataalysis around one theme: Technology for Human Health. You design and build a technical product that helps people detect illness earlier, understand it better, or live with it more easily.",
  },
  {
    q: "Who can participate?",
    a: "Students aged 13 and up, from any country or territory (standard exceptions apply). Companies and professional organizations are excluded from participation.",
  },
  {
    q: "What can I build?",
    a: "Almost anything technical: an app, a website, a simulation, a system, or an algorithm. An EdTech app teaching health concepts, a classification model trained on imaging datasets, or a proposal with significant medical implications all fit.",
  },
  {
    q: "Can I use AI tools?",
    a: "Yes, you're encouraged to. We want the technical barrier low enough that beginners with ambitious ideas can actually ship them. What matters is that you understand what you built and can explain it. Be prepared to walk judges through your own code.",
  },
  {
    q: "Is it free?",
    a: "Yes. UnivaBio is fully online and free to enter, from anywhere in the world.",
  },
  {
    q: "Can I work in a team?",
    a: "Yes. Work individually or in a team, whichever suits your project.",
  },
  {
    q: "How does judging work?",
    a: "Judges score five things: idea and innovation, implementation, health impact and rigor, design and usability, and presentation.",
  },
  {
    q: "What are the prizes?",
    a: "$5,420 in total. First place takes $2,790 in value (Momen credits, a two-year CodeCrafters membership, and InterviewBuddy credits), second $405, and third $225. There is also a $2,000 special prize for the best no-code AI app built with Momen.",
  },
  {
    q: "When is the deadline?",
    a: "Submissions close October 6, 2026 at 11:45pm EDT.",
  },
];

type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
} | null;

function getCountdown(): { live: boolean; values: CountdownState } {
  const remaining = new Date(DEADLINE_ISO).getTime() - Date.now();
  if (remaining <= 0) return { live: false, values: null };
  const total = Math.floor(remaining / 1000);
  return {
    live: true,
    values: {
      days: String(Math.floor(total / 86400)).padStart(3, "0"),
      hours: String(Math.floor((total % 86400) / 3600)).padStart(2, "0"),
      minutes: String(Math.floor((total % 3600) / 60)).padStart(2, "0"),
      seconds: String(total % 60).padStart(2, "0"),
    },
  };
}

export default function UnivaBioPage() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [countdown, setCountdown] = useState<CountdownState>(null);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const tick = () => {
      const { live, values } = getCountdown();
      setCountdown(values);
      setClosed(!live);
      return live;
    };
    if (!tick()) return;
    const id = window.setInterval(() => {
      if (!tick()) window.clearInterval(id);
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reveals = root.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="univabio" ref={rootRef}>
      <div className="progress" aria-hidden="true">
        <span className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <div className="grain" aria-hidden="true" />

      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <a className="nav-brand" href="#top" aria-label="UnivaBio home">
          <Image
            className="nav-logo"
            src="/univadev.svg"
            alt=""
            width={28}
            height={28}
            priority
          />
          <span className="nav-name">UnivaBio</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="nav-cta"
          href={DEVPOST_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Participate
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu" id="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href={DEVPOST_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Register Now
          </a>
        </div>
      )}

      <main id="top">
        <section className="hero">
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-scrim" />
            <div className="hero-orb hero-orb-a" />
            <div className="hero-orb hero-orb-b" />
            <div className="hero-fade" />
          </div>
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="hero-meta reveal">
                Deadline Oct 6, 2026 · Online
              </p>
              <h1 className="hero-title reveal">
                <span className="hero-brand">Univa</span>
                <span className="hero-version">Bio</span>
              </h1>
              <p className="hero-lede reveal">
                Biology needs builders. UnivaBio brings students worldwide
                together to build tools that make healthcare smarter, earlier,
                and more accessible.
              </p>
              <div
                className={`countdown reveal${closed ? " is-complete" : ""}`}
                role="timer"
                aria-live="off"
                aria-label="Time until the UnivaBio submission deadline"
              >
                {closed ? (
                  <span>Submissions are closed</span>
                ) : (
                  <>
                    <div className="countdown-unit">
                      <span className="countdown-value">
                        {countdown?.days ?? "000"}
                      </span>
                      <span className="countdown-label">Days</span>
                    </div>
                    <span className="countdown-separator" aria-hidden="true">
                      :
                    </span>
                    <div className="countdown-unit">
                      <span className="countdown-value">
                        {countdown?.hours ?? "00"}
                      </span>
                      <span className="countdown-label">Hours</span>
                    </div>
                    <span className="countdown-separator" aria-hidden="true">
                      :
                    </span>
                    <div className="countdown-unit">
                      <span className="countdown-value">
                        {countdown?.minutes ?? "00"}
                      </span>
                      <span className="countdown-label">Minutes</span>
                    </div>
                    <span className="countdown-separator" aria-hidden="true">
                      :
                    </span>
                    <div className="countdown-unit">
                      <span className="countdown-value">
                        {countdown?.seconds ?? "00"}
                      </span>
                      <span className="countdown-label">Seconds</span>
                    </div>
                  </>
                )}
              </div>
              <div className="hero-actions reveal">
                <a
                  className="btn btn-primary"
                  href={DEVPOST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
                <a
                  className="btn btn-ghost"
                  href={RULES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Rules
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Event highlights">
          <div className="stats-row">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="resources" aria-labelledby="resources-heading">
          <div className="section-head">
            <h2 id="resources-heading">Resources</h2>
          </div>
          <div className="resource-grid">
            {resources.map((resource) => (
              <a
                key={resource.title}
                className="resource"
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="resource-kicker">{resource.kicker}</span>
                <span className="resource-title">{resource.title}</span>
                <span className="resource-desc">{resource.desc}</span>
                <span className="resource-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-grid">
            <div className="about-copy">
              <p className="kicker">About UnivaBio</p>
              <h2>A collaboration between Univa Dev and BioCataalysis.</h2>
              <p>
                UnivaBio is a global student competition open to students aged
                13 and up, hosted collaboratively by BioCataalysis and Univa Dev
                in support of innovation at the intersection of healthcare and
                technology. Working individually or in teams, participants
                design and build a meaningful technical product that helps
                people detect illness earlier, understand it better, or live
                with it more easily.
              </p>
              <Link className="text-link" href="/">
                univadev.com
              </Link>
            </div>
            <figure className="about-media">
              <img
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
                alt="Researcher working at a microscope"
                loading="lazy"
              />
            </figure>
          </div>
        </section>

        <section className="info" id="info">
          <div className="section-head">
            <h2>How the challenge works</h2>
          </div>

          <article className="phase">
            <div className="phase-media phase-media-one">
              <img
                src="https://images.pexels.com/photos/6424590/pexels-photo-6424590.jpeg"
                alt="Laptop displaying source code"
                loading="lazy"
              />
              <span className="phase-num" aria-hidden="true">
                01
              </span>
            </div>
            <div className="phase-body">
              <p className="kicker">Judging</p>
              <h3>Scored by people who ship for a living</h3>
              <p>
                Sudheer Pratap (Lead Software Engineer) and Aditya Shrivastava
                (Software Engineer at Barclays) score projects on idea and
                innovation, implementation, health impact and rigor, design and
                usability, and presentation.
              </p>
              <a
                className="text-link"
                href={DEVPOST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Meet the judges
              </a>
            </div>
          </article>

          <article className="phase phase-reverse">
            <div className="phase-media phase-media-two">
              <img
                src="https://images.pexels.com/photos/30596265/pexels-photo-30596265.jpeg"
                alt="Digital globe against a star field"
                loading="lazy"
              />
              <span className="phase-num" aria-hidden="true">
                02
              </span>
            </div>
            <div className="phase-body">
              <p className="kicker">Deadline</p>
              <h3>One deadline on Eastern time</h3>
              <ul className="schedule-list">
                <li>
                  <span>Registration open</span>
                  <span>Now, on Devpost</span>
                </li>
                <li>
                  <span>Submissions due</span>
                  <span>Oct 6, 2026 · 11:45pm EDT</span>
                </li>
                <li>
                  <span>Winners announced</span>
                  <span>On Devpost after judging</span>
                </li>
              </ul>
              <p>
                The event is fully online, so build at your own pace from
                anywhere. Announcements and updates land on the Devpost page.
              </p>
            </div>
          </article>

          <article className="phase">
            <div className="phase-media phase-media-three">
              <img
                src="https://images.pexels.com/photos/25626435/pexels-photo-25626435.jpeg"
                alt="Monochrome computer-generated spheres"
                loading="lazy"
              />
              <span className="phase-num" aria-hidden="true">
                03
              </span>
            </div>
            <div className="phase-body">
              <p className="kicker">Submissions</p>
              <h3>Four things to hand in</h3>
              <ul className="rules-list">
                <li>
                  A project: a website, app, or other coding prototype with
                  real user interaction.
                </li>
                <li>
                  A demo video explaining the purpose, showcasing the features,
                  and demonstrating how users interact with it.
                </li>
                <li>A one-page project description in PDF format.</li>
                <li>
                  A GitHub repository, or a code PDF showcasing everything you
                  built.
                </li>
              </ul>
              <a
                className="text-link"
                href={RULES_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                View full rules
              </a>
            </div>
          </article>

          <div className="info-strip">
            <article className="strip-item">
              <h3>Theme</h3>
              <p>
                Technology for Human Health. Build something that helps people
                detect illness earlier, understand it better, or live with it
                more easily: an app, a website, a simulation, a system, or an
                algorithm.
              </p>
            </article>
            <article className="strip-item">
              <h3>Prizes</h3>
              <p>
                $5,420 across three places: Momen credits, CodeCrafters
                memberships, and InterviewBuddy credits, plus a $2,000 special
                prize for the best no-code AI app built with Momen.
              </p>
            </article>
            <article className="strip-item">
              <h3>AI-friendly</h3>
              <p>
                AI assistants are encouraged, so beginners with ambitious ideas
                can actually ship them. Just understand what you built and be
                ready to walk judges through your own code.
              </p>
            </article>
          </div>
        </section>

        <section className="sponsors" id="sponsors">
          <div className="section-head">
            <h2>Partners behind UnivaBio</h2>
          </div>
          <div className="sponsor-grid">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.href}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sponsor"
              >
                {sponsor.img ? (
                  <img src={sponsor.img} alt={sponsor.alt} />
                ) : (
                  <span className="sponsor-word">{sponsor.word}</span>
                )}
              </a>
            ))}
          </div>
          <p className="sponsor-cta">
            Interested in sponsoring?{" "}
            <a href="mailto:univadev0@gmail.com">univadev0@gmail.com</a>
          </p>
        </section>

        <section className="register" id="register">
          <div className="register-panel">
            <div className="register-bg" aria-hidden="true" />
            <div className="register-content">
              <p className="kicker">Register</p>
              <h2>Get in for UnivaBio</h2>
              <p>
                The competition is fully online and free, open to students aged
                13 and up worldwide. Register, build something for human
                health, and submit before the deadline.
              </p>
              <ol className="register-steps">
                <li>
                  Sign up on{" "}
                  <a
                    href={DEVPOST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Devpost
                  </a>
                </li>
                <li>Build your project and prep the four submission pieces</li>
                <li>Submit before Oct 6, 2026 at 11:45pm EDT</li>
              </ol>
              <a
                className="btn btn-primary"
                href={DEVPOST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Register on Devpost
              </a>
            </div>
          </div>
        </section>

        <section className="faq" id="faq">
          <div className="section-head">
            <h2>Common questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className={`faq-item${openFaq === index ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-summary"
                  aria-expanded={openFaq === index}
                  onClick={() =>
                    setOpenFaq((current) => (current === index ? null : index))
                  }
                >
                  {faq.q}
                </button>
                <div className="faq-panel">
                  <div className="faq-panel-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-footer">
            <h3>Still stuck?</h3>
            <p>
              Ask on the{" "}
              <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
                Devpost page
              </a>
              . The hackathon manager is a message away.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <Image
            className="nav-logo"
            src="/univadev.svg"
            alt=""
            width={28}
            height={28}
          />
          <div>
            <strong>UnivaBio</strong>
            <p>Hosted by Univa Dev × BioCataalysis</p>
          </div>
        </div>
        <div className="footer-links">
          <Link href="/">Univa Dev</Link>
          <a href={DEVPOST_URL} target="_blank" rel="noopener noreferrer">
            Devpost
          </a>
          <a href={RULES_URL} target="_blank" rel="noopener noreferrer">
            Rules
          </a>
          <a href="mailto:univadev0@gmail.com">Contact</a>
        </div>
        <p className="footer-copy">© 2026 Univa Dev</p>
      </footer>
    </div>
  );
}
