import { motion } from "motion/react";
import { Cake, CupSoda, Gift, Truck } from "lucide-react";
import { Reveal, SplitWords } from "./motion-primitives";

const servicos = [
  {
    icon: Cake,
    title: "Bolos artesanais",
    text: "Massas fofinhas de baunilha ou chocolate 70% cacau, com recheios cremosos e camadas generosas.",
  },
  {
    icon: CupSoda,
    title: "Sobremesas & copos",
    text: "Copos da felicidade, brownies, doces finos e sobremesas geladas para adoçar qualquer dia.",
  },
  {
    icon: Gift,
    title: "Bolos de festa",
    text: "Aniversários, chás e comemorações com decoração personalizada e topo do seu tema favorito.",
  },
  {
    icon: Truck,
    title: "Entrega & retirada",
    text: "Retirada no Recanto das Emas ou entrega mediante taxa para Recanto, Riacho e Samambaia.",
  },
];

export function OQueFazemos() {
  return (
    <section id="o-que-fazemos" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-[11px] tracking-[0.4em] text-accent uppercase">
              O que fazemos
            </span>
          </Reveal>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            <SplitWords text="Cada pedido sai da cozinha como se fosse pra nossa própria mesa" />
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {servicos.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="group grain relative h-full overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/70 p-7 backdrop-blur-sm transition-shadow duration-500 hover:shadow-lift"
              >
                <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-rose opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70" />
                <span className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-cacau text-primary-foreground shadow-doce">
                  <s.icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="relative mt-5 text-2xl">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
