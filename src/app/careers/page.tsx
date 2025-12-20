import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

export default function CareersPage() {
  const openings = [
    {
      id: "software-engineer",
      title: "Software Engineer (Intern / Junior)",
      location: "Remote / Hybrid",
      type: "Full-time / Part-time",
      description:
        "Work with our engineering team to build features, improve performance, and help maintain the website and event tooling. Great for students and early career builders.",
      apply: "https://tally.so/r/wMoQdX",
    },
    {
      id: "community-lead",
      title: "Community Lead (Volunteer / Part-time)",
      location: "Remote",
      type: "Volunteer / Part-time",
      description:
        "Help coordinate local chapters, mentor students, and support event logistics. Ideal for current chapter leaders and experienced volunteers.",
      apply: "https://tally.so/r/wMoQdX",
    },
  ];

  return (
    <div className="min-h-screen">
      <NavigationHeader />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">Careers & Opportunities</h1>

        <p className="text-lg text-gray-700 mb-8">
          UnivaDev is a student-first organization — we welcome contributors,
          volunteers, and early-career professionals who are passionate about
          tech education, hackathons, and community building. Below are our
          current openings and ongoing opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {openings.map((job) => (
            <article
              key={job.id}
              className="bg-white rounded-lg shadow-md p-6 border border-border"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-1">{job.title}</h2>
                  <div className="text-sm text-gray-600 mb-3">
                    {job.location} • {job.type}
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={job.apply}
                    className="inline-block px-5 py-3 rounded-full bg-black text-white font-semibold hover:bg-neutral-800 transition-colors"
                  >
                    Apply
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 prose">
          <h3>Open to other contributions</h3>
          <p>
            If you don't see a role that matches your skills but want to help,
            email
            <a
              className="ml-1 text-blue-600 underline"
              href="mailto:volunteer@univadev.org"
            >
              univadev0@gmail.com
            </a>{" "}
            with your background and how you'd like to contribute.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
