import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Globe,
  Users,
  Award,
  MessageCircle,
  Mail,
  Trophy,
  MapPin,
  Share2,
} from "lucide-react";

const communityBenefits = [
  {
    icon: Globe,
    title: "Global Networking",
    description:
      "Chat, collaborate, and meet youth leaders from every continent. Build connections that last a lifetime.",
  },
  {
    icon: Trophy,
    title: "Exclusive Events",
    description:
      "Participate in workshops, hackathons, webinars, and summits designed exclusively for our community.",
  },
  {
    icon: Users,
    title: "Mentorship & Guidance",
    description:
      "Get support from professionals, alumni, and experts who are invested in your success.",
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description:
      "Earn badges, certifications, and public acknowledgments for your achievements and contributions.",
  },
];

const memberSpotlights = [
  {
    name: "Sarah Chen",
    location: "Singapore",
    achievement: "Founded 3 chapters across Southeast Asia",
    image: "/abt.png",
    quote:
      "Joining this community opened doors I never knew existed. Now I'm helping others discover the same opportunities.",
  },
  {
    name: "Marcus Johnson",
    location: "United States",
    achievement: "Won Global AI Hackathon 2024",
    image: "/abt.png",
    quote:
      "The mentorship and resources here helped me turn my idea into a real solution that's making an impact.",
  },
  {
    name: "Priya Sharma",
    location: "India",
    achievement: "Led workshop series reaching 500+ students",
    image: "/abt.png",
    quote:
      "This isn't just a community—it's a movement. Together, we're changing what's possible for young innovators.",
  },
];

const engagementOptions = [
  {
    icon: Mail,
    title: "Reach Out",
    description: "Get updates on competitions, events, and opportunities",
    cta: "Contact Us",
    link: "mailto:univadev0@gmail.com.com",
  },
  {
    icon: MessageCircle,
    title: "Join Our Discord",
    description: "Our online community for networking and collaboration",
    cta: "Join Discord",
    link: "https://discord.gg/PRndM3ha66",
  },
  {
    icon: Share2,
    title: "Follow on Social Media",
    description: "Stay updated with our latest news and success stories",
    cta: "Follow Us",
    link: "https://instagram.com/univadev",
  },
];

export default function Impact() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#F8F8F8] py-16 md:py-24">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-[42px] md:text-[72px] lg:text-[80px] font-medium leading-[0.9] tracking-tighter mb-8">
                Join a Global Network of
                <br />
                Youth Innovators
              </h1>
              <p className="text-lg md:text-xl font-medium text-gray-700 mb-10 max-w-3xl mx-auto">
                Collaborate, learn, and innovate alongside students and leaders
                from every continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-black text-white rounded-full h-[58px] px-10 text-base font-bold hover:bg-gray-900 transition-colors"
                  asChild
                >
                  <a href="#join">Join the Community</a>
                </Button>
                <Button
                  size="lg"
                  className="bg-white text-black rounded-full h-[58px] px-10 text-base font-bold border-2 border-black hover:bg-gray-100 transition-colors"
                  asChild
                >
                  <a href="/chapter-registration">Start a Chapter</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Benefits */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-2px] leading-tight mb-4">
                Why Join Our Community?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Be part of something bigger than yourself. Access opportunities,
                resources, and connections that accelerate your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {communityBenefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8F8F8] rounded-2xl p-8 hover:bg-gray-200 transition-colors"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <IconComponent className="h-10 w-10 text-black" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3 text-black">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Member Spotlights
        <section className="py-16 md:py-24 bg-[#F8F8F8]">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-2px] leading-tight mb-4">
                Member Spotlights
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real stories from real members making real impact around the
                world
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {memberSpotlights.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start gap-2 mb-3">
                      <MapPin className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">
                        {member.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-black">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-black mb-4">
                      {member.achievement}
                    </p>
                    <blockquote className="text-gray-700 italic leading-relaxed">
                      "{member.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
 */}
        {/* Engagement Options */}
        <section id="join" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-5 sm:px-8 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-2px] leading-tight mb-4">
                Get Involved Today
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose how you want to engage with our global community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {engagementOptions.map((option, idx) => {
                const IconComponent = option.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#F8F8F8] rounded-2xl p-8 text-center hover:bg-gray-200 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center mb-6">
                      <IconComponent className="h-12 w-12 text-black" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-black">
                      {option.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {option.description}
                    </p>
                    <Button
                      className="w-full bg-black text-white rounded-full h-[48px] font-bold hover:bg-gray-900 transition-colors"
                      asChild
                    >
                      <a href={option.link}>{option.cta}</a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-black text-white overflow-hidden relative">
          <div
            className="absolute -bottom-50 left-1/2 w-[200%] h-52 bg-[linear-gradient(67.64deg,_#FFC370_0%,_#FF88A5_100%)] blur-[94px] -translate-x-1/2 z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-screen-lg mx-auto px-5 sm:px-10 py-16 sm:py-24">
            <div className="text-center">
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-[-2px] leading-tight text-white mb-6">
                Ready to Join?
              </h2>
              <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
                Your journey starts here. Connect, learn, and build the future
                with the world's most ambitious youth community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-black rounded-full h-[58px] px-10 text-base font-bold hover:bg-gray-100 transition-colors"
                  asChild
                >
                  <a href="https://discord.gg/PRndM3ha66" target="_blank">
                    Join the Community
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-black text-white rounded-full h-[58px] px-10 text-base font-bold border-2 border-white hover:bg-white hover:text-black transition-colors"
                  asChild
                >
                  <a href="/chapter-registration">Start a Chapter</a>
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
