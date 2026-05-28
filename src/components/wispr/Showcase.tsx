import { motion } from "framer-motion";
import refAbout from "@/assets/ref-about.jpeg";

export const Showcase = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full"
      >
        <img
          src={refAbout}
          alt="The World of Cricket — WISPR heritage and craftsmanship"
          loading="lazy"
          className="w-full h-auto object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
    </section>
  );
};
