import { motion } from "motion/react";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import { Reveal, SplitWords } from "./motion-primitives";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./data";

export function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden px-6 pt-24 pb-12">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="text-[11px] tracking-[0.4em] text-accent uppercase">Contato</span>
        </Reveal>
        <h2 className="mt-5 text-5xl leading-[1.05] sm:text-6xl">
          <SplitWords text="Vamos adoçar o seu" />{" "}
          <span className="font-script text-gradient-shine text-6xl sm:text-7xl">momento</span>
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Encomendas pelo WhatsApp ou direct do Instagram. Conta pra gente a data, o sabor e a
            quantidade — o resto é com a nossa cozinha.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-cacau px-8 py-4 text-sm font-medium tracking-widest text-primary-foreground uppercase shadow-lift"
            >
              <MessageCircle className="size-4" strokeWidth={1.7} />
              WhatsApp
            </motion.a>
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-8 py-4 text-sm font-medium tracking-widest text-primary uppercase"
            >
              <Instagram className="size-4" strokeWidth={1.7} />
              @santodocedf
            </motion.a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-accent" strokeWidth={1.7} />
            Recanto das Emas — Brasília / DF
          </p>
        </Reveal>
      </div>

      <footer className="mx-auto mt-20 flex max-w-6xl flex-col items-center gap-3 border-t border-border/60 pt-8 text-center">
        <p className="font-script text-3xl text-primary">Santo Doce</p>
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Confeitaria artesanal · feito com amor
        </p>
      </footer>
    </section>
  );
}
