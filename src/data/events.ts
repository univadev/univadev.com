export interface EventCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface UpcomingEvent {
  id: string;
  title: string;
  description: string;
  category: string;
  targetAudience: string;
  date: string;
  time: string;
  location: string; // "Online", "Hybrid", or specific location
  registrationUrl: string;
  speakers?: string[];
  skillLevel: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  capacity?: number;
  badges: ("Free" | "Hybrid" | "Certificate Provided" | "Premium")[];
  image: string;
}

export interface PastEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  participants: number;
  outcomes: string[];
  partners?: string[];
  speakers?: string[];
  images: string[];
  recordingUrl?: string;
  recap: string;
}

export interface FlagshipEvent {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  registrationUrl: string;
  highlights: string[];
}

export const eventCategories: EventCategory[] = [
  {
    id: "workshops",
    name: "Workshops",
    description: "Hands-on learning sessions covering ML basics, ethical AI, and model building",
    icon: "Wrench",
  },
  {
    id: "hackathons",
    name: "Hackathons & Competitions",
    description: "Competitive coding events and innovation challenges",
    icon: "Trophy",
  },
  {
    id: "panels",
    name: "Speaker Panels & Webinars",
    description: "Expert discussions and educational webinars",
    icon: "Users",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship & Leadership",
    description: "Programs focused on business skills and leadership development",
    icon: "Briefcase",
  },
  {
    id: "career",
    name: "Career Development",
    description: "Resume workshops, interview prep, and career guidance",
    icon: "GraduationCap",
  },
  {
    id: "community",
    name: "Community Events & Meetups",
    description: "Networking events and local chapter gatherings",
    icon: "Coffee",
  },
  {
    id: "educator",
    name: "Teacher Training",
    description: "Professional development for educators in STEM",
    icon: "BookOpen",
  },
];

export const flagshipEvent: FlagshipEvent = {
  title: "Annual AI Youth Summit 2025",
  description: "Join 1,000+ young innovators from around the world for three days of workshops, competitions, and networking with industry leaders.",
  date: "August 15-17, 2025",
  location: "Hybrid (San Francisco & Virtual)",
  image: "/abt.png",
  registrationUrl: "#",
  highlights: [
    "50+ Expert Speakers from Top Tech Companies",
    "$50,000 in Prizes and Scholarships",
    "Hands-on AI Workshops",
    "Networking with Industry Leaders",
    "Certificate of Participation",
  ],
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "ml-basics-workshop",
    title: "Machine Learning Basics Workshop",
    description: "Learn the fundamentals of machine learning with hands-on projects and real-world applications.",
    category: "workshops",
    targetAudience: "Ages 14-18, Beginners",
    date: "December 15, 2025",
    time: "2:00 PM - 5:00 PM EST",
    location: "Online",
    registrationUrl: "#",
    speakers: ["Dr. Sarah Chen", "Alex Kumar"],
    skillLevel: "Beginner",
    capacity: 100,
    badges: ["Free", "Certificate Provided"],
    image: "/abt.png",
  },
  {
    id: "global-ai-hackathon",
    title: "Global AI Hackathon",
    description: "48-hour hackathon focused on building AI solutions for social good. Compete for prizes and mentorship opportunities.",
    category: "hackathons",
    targetAudience: "Ages 15-22, All Levels",
    date: "January 20-22, 2026",
    time: "Starts 9:00 AM EST",
    location: "Hybrid",
    registrationUrl: "#",
    speakers: ["Industry Mentors", "Tech Leaders"],
    skillLevel: "All Levels",
    capacity: 500,
    badges: ["Hybrid", "Certificate Provided"],
    image: "/abt.png",
  },
  {
    id: "ethical-ai-panel",
    title: "Ethics in AI: A Youth Perspective",
    description: "Join leading AI researchers and ethicists for a discussion on responsible AI development.",
    category: "panels",
    targetAudience: "Ages 16+, All Levels",
    date: "December 8, 2025",
    time: "6:00 PM - 7:30 PM EST",
    location: "Online",
    registrationUrl: "#",
    speakers: ["Dr. Maria Rodriguez", "Prof. James Liu", "Aisha Patel"],
    skillLevel: "All Levels",
    badges: ["Free"],
    image: "/abt.png",
  },
  {
    id: "startup-bootcamp",
    title: "AI Startup Bootcamp",
    description: "Learn how to turn your AI ideas into viable businesses with guidance from successful entrepreneurs.",
    category: "entrepreneurship",
    targetAudience: "Ages 17-22, Intermediate",
    date: "February 1-3, 2026",
    time: "10:00 AM - 4:00 PM EST",
    location: "Hybrid (New York & Virtual)",
    registrationUrl: "#",
    speakers: ["Tech Entrepreneurs", "VC Partners"],
    skillLevel: "Intermediate",
    capacity: 75,
    badges: ["Hybrid", "Certificate Provided", "Premium"],
    image: "/abt.png",
  },
  {
    id: "career-prep-workshop",
    title: "Tech Career Preparation Workshop",
    description: "Resume building, interview skills, and networking strategies for landing your first tech internship.",
    category: "career",
    targetAudience: "Ages 16-20, All Levels",
    date: "December 20, 2025",
    time: "3:00 PM - 5:00 PM EST",
    location: "Online",
    registrationUrl: "#",
    speakers: ["Career Coaches", "Tech Recruiters"],
    skillLevel: "All Levels",
    badges: ["Free", "Certificate Provided"],
    image: "/abt.png",
  },
  {
    id: "community-meetup-sf",
    title: "San Francisco Chapter Meetup",
    description: "Connect with local STEM enthusiasts, work on projects, and share ideas over pizza.",
    category: "community",
    targetAudience: "Ages 13-19, All Levels",
    date: "December 10, 2025",
    time: "5:00 PM - 8:00 PM PST",
    location: "San Francisco, CA",
    registrationUrl: "#",
    skillLevel: "All Levels",
    capacity: 50,
    badges: ["Free"],
    image: "/abt.png",
  },
];

export const pastEvents: PastEvent[] = [
  {
    id: "2024-global-hackathon",
    title: "2024 Global Youth AI Hackathon",
    description: "Our largest hackathon to date, bringing together young innovators from 45 countries.",
    date: "March 15-17, 2024",
    location: "Hybrid (Boston & Virtual)",
    participants: 850,
    outcomes: [
      "120 projects submitted",
      "$75,000 in prizes awarded",
      "15 projects received seed funding",
      "92% of participants reported increased AI skills",
    ],
    partners: ["Google", "Microsoft", "MIT", "Stanford"],
    speakers: ["Dr. Andrew Ng", "Fei-Fei Li", "Demis Hassabis"],
    images: ["/abt.png", "/abt.png", "/abt.png"],
    recordingUrl: "#",
    recap: "An incredible three days of innovation, learning, and collaboration. Students built AI solutions addressing climate change, healthcare accessibility, and education equity.",
  },
  {
    id: "ai-for-good-workshop-2024",
    title: "AI for Good Workshop Series",
    description: "Six-week intensive workshop series on using AI for social impact.",
    date: "September - October 2024",
    location: "Online",
    participants: 450,
    outcomes: [
      "6 comprehensive workshops delivered",
      "30+ hours of instruction",
      "85% completion rate",
      "25 community projects launched",
    ],
    partners: ["UN AI for Good", "IEEE", "ACM"],
    speakers: ["Industry Experts", "Academic Researchers", "Social Entrepreneurs"],
    images: ["/abt.png", "/abt.png"],
    recordingUrl: "#",
    recap: "Participants learned to apply AI techniques to real-world challenges, with many continuing their projects beyond the workshop series.",
  },
  {
    id: "international-research-challenge-2024",
    title: "International AI Research Challenge",
    description: "High school students presented original AI research to a panel of university professors and industry researchers.",
    date: "June 2024",
    location: "Hybrid (Multiple Cities)",
    participants: 200,
    outcomes: [
      "45 research papers submitted",
      "12 papers accepted to youth research journals",
      "Top 3 teams presented at major AI conferences",
      "$25,000 in research grants awarded",
    ],
    partners: ["IEEE", "AAAI", "Top Universities"],
    speakers: ["Research Professors", "PhD Students", "Industry Researchers"],
    images: ["/abt.png", "/abt.png"],
    recap: "Outstanding research quality from young minds tackling problems in computer vision, NLP, and reinforcement learning.",
  },
  {
    id: "summer-ai-bootcamp-2024",
    title: "Summer AI Leadership Bootcamp",
    description: "Intensive two-week program combining technical AI skills with leadership development.",
    date: "July 2024",
    location: "Stanford University",
    participants: 100,
    outcomes: [
      "100% job/internship placement rate",
      "15 startups founded by participants",
      "Average skill improvement: 85%",
      "Ongoing mentorship for all participants",
    ],
    partners: ["Stanford", "Y Combinator", "Tech Companies"],
    speakers: ["Tech CEOs", "VCs", "AI Researchers"],
    images: ["/abt.png", "/abt.png", "/abt.png"],
    recap: "A transformative experience that equipped students with both technical expertise and the leadership skills to drive change in their communities.",
  },
];

