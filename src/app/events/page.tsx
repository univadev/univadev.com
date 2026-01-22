import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  eventCategories,
} from "@/data/events";

export default function Events() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-black py-20 lg:py-28">
          <div className="container mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white">
                Events
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                Empowering the next generation of AI leaders through high-impact
                workshops, hackathons, and global summits.
              </p>
              <div className="flex flex-col gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 h-12 rounded-full shadow-md hover:shadow-lg transition-shadow bg-white text-black hover:bg-white/90 font-medium no-underline"
                  asChild
                >
                  <a href="#upcoming-events" className="no-underline hover:no-underline">Register for Upcoming Events</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 h-12 rounded-full border-2 border-white text-white hover:bg-white hover:text-black font-medium no-underline transition-colors"
                  asChild
                >
                  <a href="#partner" className="no-underline hover:no-underline">Join as a Partner / Sponsor</a>
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
                <div className="p-16 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Coming Soon
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    We're planning something amazing! Check back soon for updates.
                  </p>
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
                return (
                  <div
                    key={category.id}
                    className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
                  >
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

            <div className="max-w-2xl mx-auto">
              <div className="bg-white border border-border rounded-xl p-16 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Coming Soon
                </h3>
                <p className="text-lg text-muted-foreground">
                  We're planning exciting events! Check back soon for updates.
                </p>
              </div>
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

            <div className="max-w-2xl mx-auto">
              <div className="bg-white border border-border rounded-xl p-16 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Coming Soon
                </h3>
                <p className="text-lg text-muted-foreground">
                  Past events will be archived here. Check back soon!
                </p>
              </div>
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
                  <a href="mailto:univadev0@gmail.com">
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
