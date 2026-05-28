import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const CTASection = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-radial-spot opacity-80" />
      <div className="absolute inset-0 grain" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="container relative z-10 text-center"
      >
        <span className="text-xs uppercase tracking-mega text-primary font-semibold">Rise. Perform. Win.</span>
        <h2 className="mt-6 font-display text-6xl sm:text-7xl md:text-9xl uppercase leading-[0.9]">
          Upgrade <br /> Your <span className="text-gold-gradient">Game</span>
        </h2>
        <p className="mt-8 max-w-xl mx-auto text-muted-foreground text-base md:text-lg">
          Step onto the pitch with equipment built for champions. The standard is set. The choice is yours.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button asChild variant="hero" size="xl">
            <a href="#products">Shop The Range</a>
          </Button>
          <Button asChild variant="outlineGold" size="xl">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
