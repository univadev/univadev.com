import { notFound } from "next/navigation";
import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";
import { team } from "@/data/team";

export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug,
  }));
}

interface TeamMemberPageProps {
  params: {
    slug: string;
  };
}

export default function TeamMemberPage({ params }: TeamMemberPageProps) {
  const member = team.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main className="pt-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 py-16">
          {/* Big text name and title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              {member.name}
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              {member.role}
            </p>
          </div>

          {/* Responsive grid with photo on left and biography on right */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              {/* Photo on the left */}
              <div className="md:col-span-4">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Biography and LinkedIn on the right */}
              <div className="md:col-span-8 flex flex-col justify-start">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {member.bio}
                </p>

                <Button
                  variant="default"
                  className="w-fit"
                  asChild
                >
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="h-5 w-5" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

