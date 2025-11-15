import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import Image from "next/image";
import Link from "next/link";
import { team } from "@/data/team";

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
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group block"
              >
                <article className="bg-white/5 border border-border rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
