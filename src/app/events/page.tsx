import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Wrench,
  Trophy,
  Users,
  Briefcase,
  GraduationCap,
  Coffee,
  BookOpen,
  Calendar,
  MapPin,
  Clock,
  UserCheck,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  eventCategories,
  flagshipEvent,
  upcomingEvents,
  pastEvents,
} from "@/data/events";

const iconMap: Record<string, any> = {
  Wrench,
  Trophy,
  Users,
  Briefcase,
  GraduationCap,
  Coffee,
  BookOpen,
};

export default function Events() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 py-20 lg:py-28">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                Global Youth AI Events
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Empowering the next generation of AI leaders through high-impact
                workshops, hackathons, and global summits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#upcoming-events">Register for Upcoming Events</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                  asChild
                >
                  <a href="#partner">Join as a Partner / Sponsor</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Flagship Event */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Featured Event
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our flagship event bringing together the brightest young minds
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto min-h-[400px]">
                    <Image
                      src={flagshipEvent.image}
                      alt={flagshipEvent.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      {flagshipEvent.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {flagshipEvent.description}
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                        <span>{flagshipEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="h-5 w-5" />
                        <span>{flagshipEvent.location}</span>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {flagshipEvent.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button size="lg" className="w-full sm:w-auto" asChild>
                      <a href={flagshipEvent.registrationUrl}>
                        Reserve Your Spot
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Event Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of programs designed to support your
                learning journey
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {eventCategories.map((category) => {
                const IconComponent = iconMap[category.icon];
                return (
                  <div
                    key={category.id}
                    className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section id="upcoming-events" className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Upcoming Events
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Register now for our latest workshops, hackathons, and community
                events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 flex flex-wrap gap-2 justify-end">
                      {event.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <UserCheck className="h-4 w-4" />
                        <span>{event.targetAudience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {event.speakers && event.speakers.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-muted-foreground mb-1">
                          SPEAKERS
                        </p>
                        <p className="text-sm">{event.speakers.join(", ")}</p>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {event.skillLevel}
                      </span>
                      {event.capacity && (
                        <span className="text-xs text-muted-foreground">
                          Capacity: {event.capacity}
                        </span>
                      )}
                    </div>

                    <Button className="w-full" asChild>
                      <a href={event.registrationUrl}>Register Now</a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events Archive */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                Past Events Archive
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our track record of successful events and their impact
                on the community
              </p>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {pastEvents.map((event) => (
                <article
                  key={event.id}
                  className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image Gallery */}
                    <div className="lg:col-span-1">
                      <div className="grid grid-cols-2 lg:grid-cols-1 h-full">
                        {event.images.slice(0, 3).map((img, idx) => (
                          <div
                            key={idx}
                            className="relative h-48 lg:h-auto min-h-[200px]"
                          >
                            <Image
                              src={img}
                              alt={`${event.title} - Image ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="lg:col-span-2 p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            {event.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>{event.participants} Participants</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {event.recap}
                      </p>

                      {/* Key Outcomes */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Key Outcomes:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {event.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Partners & Speakers */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        {event.partners && event.partners.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground mb-2">
                              PARTNERS
                            </p>
                            <p className="text-sm">
                              {event.partners.join(", ")}
                            </p>
                          </div>
                        )}
                        {event.speakers && event.speakers.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground mb-2">
                              SPEAKERS
                            </p>
                            <p className="text-sm">
                              {event.speakers.join(", ")}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Recording Link */}
                      {event.recordingUrl && (
                        <Button variant="outline" asChild>
                          <a
                            href={event.recordingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Watch Recording
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Partner CTA Section */}
        <section id="partner" className="py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Become a Partner or Sponsor
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join leading organizations in supporting the next generation of
                AI leaders. Partner with us to create meaningful impact and
                reach thousands of talented young innovators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="mailto:partnerships@univadev.org">
                    Contact Partnerships Team
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8"
                  asChild
                >
                  <a href="/donate">Support Our Mission</a>
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
