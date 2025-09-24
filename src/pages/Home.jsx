import Button from "../components/Button";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CoursesSection from "../components/CoursesSection";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Header />
      <Hero />
      <CoursesSection />
    </main>
  );
}
