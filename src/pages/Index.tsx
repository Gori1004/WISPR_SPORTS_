import { Navbar } from "@/components/wispr/Navbar";
import { Hero } from "@/components/wispr/Hero";
import { Showcase } from "@/components/wispr/Showcase";
import { Heritage } from "@/components/wispr/Heritage";
import { Products } from "@/components/wispr/Products";
import { WhyWispr } from "@/components/wispr/WhyWispr";
import { Trust } from "@/components/wispr/Trust";
import { Carousel } from "@/components/wispr/Carousel";
import { Footer } from "@/components/wispr/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Heritage />
        <Products />
        <WhyWispr />
        <Trust />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
