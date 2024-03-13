import UrlShortner from "@/components/UrlShortner/UrlShortner";
import CallToAction from "@/components/Sections/CallToAction";
import Features from "@/components/Sections/Features";
import Hero from "@/components/Sections/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden text-center">
      <Hero />
      <section className="bg-light-violet p-6">
        <UrlShortner />
      </section>
      <Features />
      <CallToAction />
    </main>
  );
}
