const nav = document.querySelector("#nav");
const toggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const progressBar = document.querySelector("#progress-bar");
const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const countdown = document.querySelector("#countdown");

const eventStart = new Date("2027-01-16T00:00:00Z");
const countdownFields = {
  days: countdown?.querySelector('[data-countdown="days"]'),
  hours: countdown?.querySelector('[data-countdown="hours"]'),
  minutes: countdown?.querySelector('[data-countdown="minutes"]'),
  seconds: countdown?.querySelector('[data-countdown="seconds"]'),
};

const updateCountdown = () => {
  if (!countdown) return false;

  const remaining = eventStart.getTime() - Date.now();
  if (remaining <= 0) {
    countdown.classList.add("is-complete");
    countdown.textContent = "United Hacks V8 is live";
    countdown.setAttribute("aria-label", "United Hacks V8 is live");
    return false;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  const values = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };

  Object.entries(values).forEach(([unit, value]) => {
    if (countdownFields[unit]) {
      countdownFields[unit].textContent = String(value).padStart(unit === "days" ? 3 : 2, "0");
    }
  });

  countdown.setAttribute(
    "aria-label",
    `${values.days} days, ${values.hours} hours, ${values.minutes} minutes, and ${values.seconds} seconds until United Hacks V8 begins`
  );
  return true;
};

if (updateCountdown()) {
  const countdownInterval = window.setInterval(() => {
    if (!updateCountdown()) window.clearInterval(countdownInterval);
  }, 1000);
}

const onScroll = () => {
  const y = window.scrollY;
  nav?.classList.toggle("is-scrolled", y > 8);

  const doc = document.documentElement;
  const max = doc.scrollHeight - window.innerHeight;
  const pct = max > 0 ? Math.min(100, (y / max) * 100) : 0;
  if (progressBar) progressBar.style.width = `${pct}%`;
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  mobileMenu.hidden = open;
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    toggle?.setAttribute("aria-expanded", "false");
    if (mobileMenu) mobileMenu.hidden = true;
  });
});

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
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
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

const faqList = document.querySelector(".faq-list");
const faqItems = [...document.querySelectorAll(".faq-item")];
const faqMotionOk = motionOk;
const FAQ_MS = 340;
const faqCloseTimers = new WeakMap();

const clearFaqClose = (item) => {
  const pending = faqCloseTimers.get(item);
  if (!pending) return;
  pending.panel?.removeEventListener("transitionend", pending.onEnd);
  window.clearTimeout(pending.timeout);
  faqCloseTimers.delete(item);
};

const closeFaq = (item) => {
  if (!item.classList.contains("is-open") && !item.open) return;

  clearFaqClose(item);
  item.classList.remove("is-open");

  if (!faqMotionOk) {
    item.open = false;
    return;
  }

  const panel = item.querySelector(".faq-panel");
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    faqCloseTimers.delete(item);
    item.open = false;
    panel?.removeEventListener("transitionend", onEnd);
  };
  const onEnd = (event) => {
    if (event.target === panel && event.propertyName === "grid-template-rows") finish();
  };

  panel?.addEventListener("transitionend", onEnd);
  faqCloseTimers.set(item, {
    panel,
    onEnd,
    timeout: window.setTimeout(finish, FAQ_MS),
  });
};

const openFaq = (item) => {
  clearFaqClose(item);
  item.open = true;

  if (!faqMotionOk) {
    item.classList.add("is-open");
    return;
  }

  item.classList.remove("is-open");
  item.offsetHeight;
  item.classList.add("is-open");
};

if (faqList) {
  faqList.classList.add("is-ready");
  faqItems.forEach((item) => {
    if (item.open) item.classList.add("is-open");

    item.querySelector("summary")?.addEventListener("click", (event) => {
      event.preventDefault();
      const willOpen = !item.classList.contains("is-open");

      faqItems.forEach((other) => {
        if (other === item) {
          if (willOpen) openFaq(other);
          else closeFaq(other);
        } else if (other.classList.contains("is-open") || other.open) {
          closeFaq(other);
        }
      });
    });
  });
}
