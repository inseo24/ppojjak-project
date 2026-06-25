import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Story from "@/components/Story";
import Collab from "@/components/Collab";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Work />
        <Story />
        <Collab />
      </main>
      <Footer />
    </div>
  );
}
