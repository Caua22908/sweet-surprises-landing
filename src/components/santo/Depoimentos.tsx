import { motion } from "motion/react";
import { Reveal, SplitWords } from "./motion-primitives";

const depoimentos = [
  {
    texto: "Nossa, o brownie que comprei eu amei, perfeito! Todos lá em casa adoraram.",
    autor: "Karina",
  },
  {
    texto: "São maravilhosooos, pode ter certeza que vou pedir de novo.",
    autor: "Iana Karolina",
  },
  {
    texto: "Ficou perfeito! Bolo fresquinho, recheio generoso e entrega no horário.",
    autor: "Cliente do Recanto",
  },
];

export function Depoimentos() {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <span className="text-[11px] tracking-[0.4em] text-accent uppercase">Feedback</span>
          </Reveal>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            <SplitWords text="Quem prova," />{" "}
            <span className="font-script text-gradient-shine text-5xl sm:text-6xl">volta</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal key={d.autor} delay={i * 0.12}>
              <motion.blockquote
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="glass-doce h-full rounded-[1.75rem] p-7"
              >
                <span className="font-script text-5xl leading-none text-accent">“</span>
                <p className="mt-2 text-lg leading-relaxed text-foreground/90">{d.texto}</p>
                <footer className="mt-6 text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
                  {d.autor}
                </footer>
              </motion.blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
