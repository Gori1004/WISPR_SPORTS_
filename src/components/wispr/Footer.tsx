import logo from "@/assets/wispr-logo-mark.png";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-border bg-card pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <img src={logo} alt="WISPR Sports" className="h-20 w-auto object-contain mb-6 drop-shadow-[0_2px_12px_hsl(42_65%_55%/0.35)]" width={200} height={80} />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium cricket equipment engineered for athletes who refuse to settle.
            </p>
            <div className="text-xs uppercase tracking-mega text-primary mt-6 font-semibold">Rise. Perform. Win.</div>
          </div>

          <div>
            <h4 className="font-display text-lg uppercase tracking-display mb-5">Shop</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#products" className="hover:text-primary transition-colors">Red Ball</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">White Ball</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Pink Ball</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Orange Ball</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Tennis Ball</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg uppercase tracking-display mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Craft</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Stockists</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg uppercase tracking-display mb-5">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>hello@wisprsports.com</li>
              <li>+1 (555) 010-2024</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline mb-8" />

        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-mega text-muted-foreground">
          <div>© {new Date().getFullYear()} WISPR Sports. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
