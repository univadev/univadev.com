import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Users,
  Code,
  Video,
  FileText,
  ExternalLink,
  Sparkles,
  Target,
  Presentation,
  Palette,
  TrendingUp,
} from "lucide-react";

export default function RavenHacks() {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] text-gray-900">
                Raven Hacks VTL
              </h1>
              <p className="text-2xl md:text-3xl font-medium mb-8 text-gray-700">
                Empowering the next generation of STEM leaders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button
                  size="lg"
                  className="text-lg px-8 py-7 bg-[#ff7f50] text-white hover:bg-[#ff6b3d] font-medium shadow-md hover:shadow-lg transition-all"
                  asChild
                >
                  <a
                    href="https://raven-hacks-vtl.devpost.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Join Hackathon
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-7 border-2 border-gray-300 hover:border-[#ff7f50] hover:text-[#ff7f50] font-medium"
                  asChild
                >
                  <a
                    href="https://discord.gg/PRndM3ha66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Join Discord
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Calendar className="h-8 w-8 text-[#ff7f50] mb-3 mx-auto" />
                  <div className="text-sm text-gray-600 mb-1">Dates</div>
                  <div className="text-lg font-bold text-gray-900">
                    Feb 10 – 18, 2026
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Users className="h-8 w-8 text-[#ff7f50] mb-3 mx-auto" />
                  <div className="text-sm text-gray-600 mb-1">Format</div>
                  <div className="text-lg font-bold text-gray-900">Online</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <span className="px-4 py-2 bg-[#ff7f50]/10 text-[#ff7f50] rounded-full text-sm font-medium">
                  Beginner Friendly
                </span>
                <span className="px-4 py-2 bg-[#ff7f50]/10 text-[#ff7f50] rounded-full text-sm font-medium">
                  Low/No Code
                </span>
                <span className="px-4 py-2 bg-[#ff7f50]/10 text-[#ff7f50] rounded-full text-sm font-medium">
                  Machine Learning/AI
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Notice Banner */}
        <section className="bg-[#ff7f50]/10 border-y border-[#ff7f50]/20 py-6">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <p className="text-center text-gray-700">
                <strong>Notice:</strong> All participants are required to join
                the official Discord server for updates, workshops, and support:{" "}
                <a
                  href="https://discord.gg/PRndM3ha66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff7f50] hover:underline font-medium"
                >
                  https://discord.gg/PRndM3ha66
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 text-center">
                About
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Raven Hacks VTL is a student-led hackathon presented by{" "}
                  <strong>Univa Dev</strong>, a nonprofit organization dedicated
                  to empowering the next generation of leaders in STEM and
                  preparing them to succeed in the AI age. This event is
                  designed <strong>for students, by students</strong>, fostering
                  innovation, collaboration, and skill-building in a supportive
                  virtual environment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">
                      Eligibility
                    </h3>
                    <p className="text-gray-700">
                      Open exclusively to participants aged 13-18.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">
                      Format
                    </h3>
                    <p className="text-gray-700">
                      Fully virtual – join from anywhere!
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">
                      Dates
                    </h3>
                    <p className="text-gray-700">February 10-17, 2026</p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="font-bold text-lg mb-3 text-gray-900">
                      Theme
                    </h3>
                    <p className="text-gray-700">
                      Explore AI, STEM, and creative problem-solving. Build
                      projects that address real-world challenges using
                      technology.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mt-8 leading-relaxed">
                  Whether you're a beginner coder or an experienced developer,
                  Raven Hacks VTL is your chance to ideate, prototype, and
                  showcase your ideas. Network with peers, learn from workshops,
                  and gain valuable experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
                Requirements
              </h2>
              <p className="text-xl text-gray-700 mb-10 text-center">
                To submit your project, use the DevPost submission form by the
                deadline (February 17, 2026, 11:59 PM Eastern Time). Include:
              </p>

              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <FileText className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Project Title and Description
                      </h3>
                      <p className="text-gray-700">
                        A clear name and a 200-500-word overview explaining the
                        problem it solves, how it works, technologies used, and
                        challenges overcome.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <Video className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Demo Video
                      </h3>
                      <p className="text-gray-700">
                        A 2-3 minute video walkthrough (hosted on YouTube,
                        Vimeo, or similar) showing your project in action.
                        Screen recordings with narration are fine—no fancy
                        editing required.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <Code className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Code Repository
                      </h3>
                      <p className="text-gray-700">
                        Link to a public GitHub repo (or equivalent) with your
                        source code. Include a README.md with setup
                        instructions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <Users className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Team Info
                      </h3>
                      <p className="text-gray-700">
                        List all team members and their roles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <FileText className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        Optional
                      </h3>
                      <p className="text-gray-700">
                        Slides, prototypes, or additional docs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Judging Criteria Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 text-center">
                Judging Criteria
              </h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          Innovation & Originality
                        </h3>
                        <span className="text-lg font-semibold text-[#ff7f50]">
                          25%
                        </span>
                      </div>
                      <p className="text-gray-700">
                        How novel and original is the solution? Does it offer a
                        fresh perspective on existing problems? Is the approach
                        creative and outside-the-box?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <Target className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          Real-World Impact
                        </h3>
                        <span className="text-lg font-semibold text-[#ff7f50]">
                          25%
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Does the solution address a genuine and significant
                        problem? How many people or systems could benefit from
                        this solution? Is the potential impact clearly defined
                        and meaningful? Does the solution promote broader goals
                        such as inclusion or improved access?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <Code className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          Technical Implementation
                        </h3>
                        <span className="text-lg font-semibold text-[#ff7f50]">
                          20%
                        </span>
                      </div>
                      <p className="text-gray-700">
                        What is the quality of the execution, whether through
                        code, logic, or other technical methods? Were the chosen
                        tools and methodologies applied appropriately and
                        effectively?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <Presentation className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          Presentation
                        </h3>
                        <span className="text-lg font-semibold text-[#ff7f50]">
                          10%
                        </span>
                      </div>
                      <p className="text-gray-700">
                        How clear and concise is the written documentation? Does
                        the demo material effectively communicate the core
                        concept? Is the communication professional and easy for
                        the audience to follow?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <Palette className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          Design
                        </h3>
                        <span className="text-lg font-semibold text-[#ff7f50]">
                          10%
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Does the design facilitate a better understanding of the
                        solution? Is the interface or process flow intuitive and
                        user-friendly? Does the design enhance overall
                        engagement with the project? How well does the form of
                        the solution follow its function?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ff7f50]/10 rounded-lg flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-[#ff7f50]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">
                          Feasibility & Scalability
                        </h3>
                        <span className="text-lg font-semibold text-[#ff7f50]">
                          10%
                        </span>
                      </div>
                      <p className="text-gray-700">
                        Can this solution be realistically implemented in a
                        real-world setting? Is there a logical path to expanding
                        or scaling the solution? Have potential obstacles or
                        limitations been identified and addressed?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Judges Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Judges
              </h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-10">
                <p className="text-xl text-gray-700 mb-6">
                  <strong>Looking for judges!</strong>
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Email{" "}
                  <a
                    href="mailto:univadev0@gmail.com"
                    className="text-[#ff7f50] hover:underline font-medium"
                  >
                    univadev0@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-700 mb-10">
                Join Raven Hacks VTL and showcase your skills
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-7 bg-[#ff7f50] text-white hover:bg-[#ff6b3d] font-medium shadow-md hover:shadow-lg transition-all"
                  asChild
                >
                  <a
                    href="https://raven-hacks-vtl.devpost.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Join Hackathon on Devpost
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-7 border-2 border-gray-300 hover:border-[#ff7f50] hover:text-[#ff7f50] font-medium"
                  asChild
                >
                  <a
                    href="https://discord.gg/PRndM3ha66"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Join Discord Community
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
