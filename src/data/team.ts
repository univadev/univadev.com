export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    name: "Alex Morgan",
    slug: "alex-morgan",
    role: "Founder & CEO",
    image: "/abt.png",
    bio: "Alex leads strategy and partnerships, helping chapters scale and run high-impact events.",
    linkedin: "#",
  },
  {
    name: "Priya Patel",
    slug: "priya-patel",
    role: "Head of Programs",
    image: "/abt.png",
    bio: "Priya designs our learning tracks and mentors chapter leads on curriculum and events.",
    linkedin: "#",
  },
  {
    name: "Jordan Lee",
    slug: "jordan-lee",
    role: "Director of Engineering",
    image: "/abt.png",
    bio: "Jordan oversees our technical platform and supports student projects across chapters.",
    linkedin: "#",
  },
  {
    name: "Samira Gomez",
    slug: "samira-gomez",
    role: "Community Lead",
    image: "/abt.png",
    bio: "Samira helps chapters grow sustainably through outreach, events, and mentorship programs.",
    linkedin: "#",
  },
];

