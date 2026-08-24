import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitWords } from "./motion-primitives";
import { WHATSAPP_URL } from "./data";
import ana from "@/assets/ana-luiza.jpeg.asset.json";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.4 });
  const textY = useTransform(smooth, [0, 1], [0, -140]);
  const imgY = useTransform(smooth, [0, 1], [0, 90]);
  const imgScale = useTransform(smooth, [0, 1], [1, 1.12]);
  const fade = useTransform(smooth, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div style={{ y: textY, opacity: fade }} className="relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-rose/40 bg-card/60 px-4 py-1.5 text-[11px] tracking-[0.3em] text-muted-foreground uppercase backdrop-blur"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Recanto das Emas · DF
          </motion.span>

          <h1 className="mt-6 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            <SplitWords text="Doces feitos para criar" delay={0.5} />
            <br />
            <SplitWords
              text="memórias"
              delay={0.95}
              wordClassName="font-script text-gradient-shine pr-2 text-6xl sm:text-7xl lg:text-8xl"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.9 }}
            className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Bolos, sobremesas e doces artesanais feitos em família — massa no ponto, recheio
            generoso e aquele carinho que dá pra sentir na primeira garfada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.9 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden rounded-full bg-gradient-cacau px-8 py-4 text-sm font-medium tracking-widest text-primary-foreground uppercase shadow-lift"
            >
              <span className="relative z-10">Peça pelo WhatsApp</span>
              <span className="absolute inset-0 translate-y-full bg-gradient-rose transition-transform duration-500 group-hover:translate-y-0" />
            </motion.a>
            <a
              href="#sabores"
              className="group inline-flex items-center gap-2 text-sm tracking-widest text-primary uppercase"
            >
              Ver sabores
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          <div className="mt-12 flex gap-10">
            {[
              { n: "+1.400", l: "clientes doces" },
              { n: "57", l: "criações no feed" },
              { n: "100%", l: "artesanal" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + i * 0.12, duration: 0.7 }}
              >
                <p className="font-display text-2xl text-primary">{s.n}</p>
                <p className="text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                  {s.l}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ y: imgY, scale: imgScale }} className="relative mx-auto w-full max-w-md">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-4 rounded-full bg-gradient-to-r from-rose-300 blur-2xl"
          />
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full border border-dashed border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.img
            src={ana.url}
            alt="Ana Luiza, confeiteira da Santo Doce, segurando uma bandeja de brownies artesanais"
            width={880}
            height={1160}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full mix-blend-multiply drop-shadow-[0_30px_50px_rgba(60,30,20,0.28)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="glass-doce absolute bottom-6 -left-2 z-20 animate-drift rounded-2xl px-5 py-3 shadow-doce"
          >
            <p className="font-script text-xl text-primary">Ana Luiza</p>
            <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              Confeiteira & fundadora
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-muted-foreground uppercase"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="block"
        >
          role
        </motion.span>
      </motion.div>
    </section>
  );
}
