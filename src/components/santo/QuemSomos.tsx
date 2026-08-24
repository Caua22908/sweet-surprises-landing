import { motion } from "motion/react";
import { Reveal, SplitWords, useParallax } from "./motion-primitives";
import brownie from "@/assets/brownie.jpg";
import copos from "@/assets/copos-sobremesa.jpg";

export function QuemSomos() {
  const a = useParallax(60);
  const b = useParallax(-50);

  return (
    <section id="quem-somos" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div className="relative">
          <motion.div ref={a.ref} style={{ y: a.y }} className="relative z-10 w-[72%]">
            <img
              src={brownie}
              alt="Brownies artesanais da Santo Doce sobre boleira de vidro"
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-[2rem] shadow-lift"
            />
          </motion.div>
          <motion.div
            ref={b.ref}
            style={{ y: b.y }}
            className="absolute -right-2 bottom-[-3rem] z-20 w-[52%]"
          >
            <img
              src={copos}
              alt="Copos de sobremesa em camadas de chocolate e creme"
              loading="lazy"
              width={1280}
              height={1024}
              className="rounded-[1.5rem] border-4 border-card shadow-doce"
            />
          </motion.div>
          <div className="blob absolute -top-10 -left-10 size-64 bg-rose/40" />
        </div>

        <div>
          <Reveal>
            <span className="text-[11px] tracking-[0.4em] text-accent uppercase">Quem somos</span>
          </Reveal>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            <SplitWords text="Um negócio de família, nascido" />{" "}
            <span className="font-script text-gradient-shine text-5xl sm:text-6xl">
              dentro de casa
            </span>
          </h2>

          <div className="mt-7 space-y-5 text-muted-foreground">
            <Reveal delay={0.1}>
              <p>
                A Santo Doce começou com a Ana Luiza aprendendo receitas ao lado da mãe — e
                descobrindo que cozinhar também é uma forma de demonstrar carinho. Da cozinha de
                casa vieram os primeiros bolos, os primeiros pedidos e a certeza de que ali estava
                a sua profissão.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Vieram então os cursos de massas, chocolate e confeitaria, as experiências em
                outras confeitarias e, com elas, a técnica que hoje sustenta cada receita da casa.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-foreground">
                Mais do que vender doces, queremos entregar momentos especiais — feitos com
                qualidade, dedicação e muito amor.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <p className="font-script mt-8 text-3xl text-primary">Ana Luiza</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
