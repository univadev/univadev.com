import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";

export default function Team() {
  return (
    <div className="min-h-screen">
      <NavigationHeader />
      <main className="pt-20">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
          <p className="text-lg text-center">This is the Team page.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
