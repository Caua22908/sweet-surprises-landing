import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { WHATSAPP_URL } from "./data";

const links = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "O que fazemos", href: "#o-que-fazemos" },
  { label: "Sabores", href: "#sabores" },
  { label: "Festival", href: "#festival" },
  { label: "Contato", href: "#contato" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 60));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-4 pt-4"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          solid ? "glass-doce shadow-doce" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-display text-xs tracking-[0.4em] text-muted-foreground uppercase">
            Santo
          </span>
          <span className="font-script text-2xl text-primary">Doce</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-gradient-rose transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="rounded-full bg-gradient-cacau px-5 py-2.5 text-xs font-medium tracking-widest text-primary-foreground uppercase shadow-doce"
        >
          Encomendar
        </motion.a>
      </div>
    </motion.header>
  );
}
