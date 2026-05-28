import { useEffect, useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import logo from "@/assets/wispr-logo-mark.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Range", href: "#products" },
  { label: "Indoor Balls", href: "#indoor" },
  { label: "Training Balls", href: "#training" },
  { label: "Contact Us", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (y / max) * 100 : 0);

      // active section detection
      const offsets = links.map((l) => {
        const el = document.querySelector(l.href);
        if (!el) return { href: l.href, top: Infinity };
        return { href: l.href, top: Math.abs((el as HTMLElement).getBoundingClientRect().top - 120) };
      });
      offsets.sort((a, b) => a.top - b.top);
      setActive(offsets[0].href);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-3 group" aria-label="WISPR Sports home">
          <img
            src={logo}
            alt="WISPR Sports logo"
            className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_2px_12px_hsl(42_65%_55%/0.35)]"
            width={160}
            height={56}
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Primary">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.label}
                href={l.href}
                className={`relative text-[13px] uppercase tracking-[0.2em] font-display transition-colors duration-300 group ${
                  isActive ? "text-primary" : "text-foreground/85 hover:text-primary"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-primary transition-all duration-500 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-5 text-foreground/85">
          <button aria-label="Search" className="hover:text-primary transition-colors">
            <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <button aria-label="Account" className="hover:text-primary transition-colors">
            <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <button aria-label="Cart" className="relative hover:text-primary transition-colors">
            <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-2 min-w-4 h-4 px-1 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">0</span>
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Scroll progress bar — usability win */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border/30">
        <div
          className="h-full bg-gold-gradient transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/40 glass">
          <nav className="container flex flex-col py-6 gap-5" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm uppercase tracking-display font-medium transition-colors ${
                  active === l.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center text-[11px] uppercase tracking-mega font-semibold text-primary-foreground bg-gold-gradient px-5 py-3 shadow-gold"
            >
              Shop The Range →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
