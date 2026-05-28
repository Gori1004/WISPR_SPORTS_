import { Button } from "@/components/ui/button";
import refHome from "@/assets/ref-home.jpeg";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden grain pt-20"
    >
      {/* Full-bleed reference */}
      <div className="absolute inset-0">
        <img
          src={refHome}
          alt="WISPR Cricket — Built for swing. Powered by precision."
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        {/* Light overlay so on-image content remains readable but background stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/10 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      {/* Bottom-anchored CTA strip — overlays the reference, doesn't duplicate it */}
      <div className="relative z-10 mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="container pb-10 md:pb-14 flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <Button asChild variant="hero" size="xl">
            <a href="#products">Shop Match Balls →</a>
          </Button>
          <Button asChild variant="outlineGold" size="xl">
            <a href="#products">Explore Our Range</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
