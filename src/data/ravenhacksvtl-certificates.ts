export type RavenHacksCertificate = {
  slug: string;
  recipientName: string;
  projectName: string;
  recognition: string;
  eventName: string;
  eventDates: string;
  issueDate: string;
  achievement: string;
  projectDescription?: string;
  devpostUrl?: string;
  githubUrl?: string;
  githubLabel?: string;
  teamMembers: string[];
  certificateId: string;
  organizerName: string;
  signerName: string;
  signerTitle: string;
};

export const ravenHacksCertificates: RavenHacksCertificate[] = [
  {
    slug: "project-name",
    recipientName: "Participant Name",
    projectName: "Project Name",
    recognition: "Certificate of Participation",
    eventName: "Raven Hacks VTL",
    eventDates: "March 14 - 22, 2026",
    issueDate: "April 2026",
    achievement:
      "For building and submitting a project during Raven Hacks VTL, demonstrating creativity, technical initiative, and commitment to solving real-world problems with technology.",
    teamMembers: ["Participant Name"],
    certificateId: "RHVTL-TEMPLATE-001",
    organizerName: "Univa Dev",
    signerName: "Eldiiar Bekbolotov",
    signerTitle: "CEO, Univa Dev",
  },
  {
    slug: "medireach",
    recipientName: "Abir Saha",
    projectName: "MediReach",
    recognition: "Certificate of Participation",
    eventName: "Raven Hacks VTL",
    eventDates: "March 14 - 22, 2026",
    issueDate: "April 2026",
    achievement:
      "For building and submitting MediReach during Raven Hacks VTL, demonstrating creativity, technical initiative, and commitment to solving real-world problems with technology.",
    projectDescription:
      "A free AI health triage assistant that speaks 12 languages on any phone, built for the 4.5 billion people without reliable access to a doctor.",
    devpostUrl: "https://devpost.com/software/medireach",
    githubUrl: "https://github.com/Pro1943",
    githubLabel: "Pro1943",
    teamMembers: ["Abir Saha"],
    certificateId: "RHVTL-MEDIREACH-001",
    organizerName: "Univa Dev",
    signerName: "Eldiiar Bekbolotov",
    signerTitle: "CEO, Univa Dev",
  },
  {
    slug: "nuvra",
    recipientName: "Jaewon Shim",
    projectName: "Nuvra",
    recognition: "Certificate of Participation",
    eventName: "Raven Hacks VTL",
    eventDates: "March 14 - 22, 2026",
    issueDate: "April 2026",
    achievement:
      "For building and submitting Nuvra during Raven Hacks VTL, demonstrating creativity, technical initiative, and commitment to making technology more accessible.",
    projectDescription:
      "A platform where people can express their skills without money.",
    devpostUrl: "https://devpost.com/software/nuvra",
    githubUrl: "https://github.com/jaewonshim0000-ai",
    githubLabel: "jaewonshim0000-ai",
    teamMembers: ["Jaewon Shim"],
    certificateId: "RHVTL-NUVRA-001",
    organizerName: "Univa Dev",
    signerName: "Eldiiar Bekbolotov",
    signerTitle: "CEO, Univa Dev",
  },
  {
    slug: "fitlogic",
    recipientName: "FitLogic Team",
    projectName: "FitLogic",
    recognition: "Certificate of Participation",
    eventName: "Raven Hacks VTL",
    eventDates: "March 14 - 22, 2026",
    issueDate: "April 2026",
    achievement:
      "For building and submitting FitLogic during Raven Hacks VTL, demonstrating creativity, technical initiative, and commitment to improving fitness with technology.",
    projectDescription:
      "A smart gym trainer system focused on smart decisions and better results.",
    devpostUrl:
      "https://devpost.com/software/fitlogic?_gl=1*6ubkar*_gcl_au*MTg3MTEyOTA2Mi4xNzczNTkzMTIw*_ga*MTkwODI5MTI5NS4xNzczNTkzMTIw*_ga_0YHJK3Y10M*czE3NzU1Mzc2NzckbzI2JGcxJHQxNzc1NTM4MTgzJGo3JGwwJGgw",
    githubUrl:
      "https://github.com/Barenya-madhab-jethy/FitLogic-Smart-Gym-Trainer-System",
    githubLabel: "Barenya-madhab-jethy/FitLogic-Smart-Gym-Trainer-System",
    teamMembers: [
      "Barenya Madhab Jethy",
      "Ayush Kumar Nath",
      "Dibyansu Rout",
      "Subham Ghosh",
      "Devi Prasad Samal",
    ],
    certificateId: "RHVTL-FITLOGIC-001",
    organizerName: "Univa Dev",
    signerName: "Eldiiar Bekbolotov",
    signerTitle: "CEO, Univa Dev",
  },
  {
    slug: "stockpilot-ai",
    recipientName: "Sujay Aitha",
    projectName: "StockPilot AI",
    recognition: "Certificate of Participation",
    eventName: "Raven Hacks VTL",
    eventDates: "March 14 - 22, 2026",
    issueDate: "April 2026",
    achievement:
      "For building and submitting StockPilot AI during Raven Hacks VTL, demonstrating creativity, technical initiative, and commitment to solving real-world problems with technology.",
    teamMembers: ["Sujay Aitha"],
    certificateId: "RHVTL-STOCKPILOT-AI-001",
    organizerName: "Univa Dev",
    signerName: "Eldiiar Bekbolotov",
    signerTitle: "CEO, Univa Dev",
  },
  {
    slug: "clearpath",
    recipientName: "Ashwin Marimuthu",
    projectName: "Clearpath",
    recognition: "Certificate of Participation",
    eventName: "Raven Hacks VTL",
    eventDates: "March 14 - 22, 2026",
    issueDate: "April 2026",
    achievement:
      "For building and submitting Clearpath during Raven Hacks VTL, demonstrating creativity, technical initiative, and commitment to solving real-world problems with technology.",
    githubUrl: "https://github.com/ashwinmari/clearpath",
    githubLabel: "ashwinmari/clearpath",
    teamMembers: ["Ashwin Marimuthu"],
    certificateId: "RHVTL-CLEARPATH-001",
    organizerName: "Univa Dev",
    signerName: "Eldiiar Bekbolotov",
    signerTitle: "CEO, Univa Dev",
  },
];

export function getRavenHacksCertificate(slug: string) {
  return ravenHacksCertificates.find((certificate) => certificate.slug === slug);
}
