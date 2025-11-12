import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Github, Mail } from "lucide-react";

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "",
    bio: "Alex leads strategy and partnerships, helping chapters scale and run high-impact events.",
    links: { linkedin: "#", github: "#", email: "mailto:alex@univadev.org" },
  },
  {
    name: "Priya Patel",
    role: "Head of Programs",
    image: "",
    bio: "Priya designs our learning tracks and mentors chapter leads on curriculum and events.",
    links: { linkedin: "#", github: "#", email: "mailto:priya@univadev.org" },
  },
  {
    name: "Jordan Lee",
    role: "Director of Engineering",
    image: "",
    bio: "Jordan oversees our technical platform and supports student projects across chapters.",
    links: { linkedin: "#", github: "#", email: "mailto:jordan@univadev.org" },
  },
  {
    name: "Samira Gomez",
    role: "Community Lead",
    image: "",
    bio: "Samira helps chapters grow sustainably through outreach, events, and mentorship programs.",
    links: { linkedin: "#", github: "#", email: "mailto:samira@univadev.org" },
  },
];

export default function Team() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main className="pt-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
            Meet the Team
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-center text-muted-foreground mb-10">
            A diverse group of students, mentors, and professionals who build
            programs, run events, and support chapter success around the world.
            Our team is committed to accessibility, professionalism, and
            high-quality student experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member) => (
              <article
                key={member.name}
                className="bg-white/5 border border-border rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Avatar className="mb-4">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : (
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </AvatarFallback>
                  )}
                </Avatar>

                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>

                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>

                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} GitHub`}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>

                  <a
                    href={member.links.email}
                    aria-label={`Email ${member.name}`}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
