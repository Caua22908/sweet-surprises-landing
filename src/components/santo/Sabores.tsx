import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { PointerEvent } from "react";
import { Reveal, SplitWords } from "./motion-primitives";
import tropical from "@/assets/bolo-tropical.jpg";
import maracuja from "@/assets/bolo-maracuja.jpg";
import prestigio from "@/assets/bolo-prestigio.jpg";

const sabores = [
  {
    img: tropical,
    nome: "Bolo Tropical",
    desc: "Massa branca de baunilha, recheio de doce de leite com ameixa e abacaxi com coco.",
    tag: "Best seller",
  },
  {
    img: maracuja,
    nome: "Trufado de Maracujá",
    desc: "Massa de chocolate 70% cacau, recheio de chocolate e creme de maracujá.",
    tag: "Cremoso",
  },
  {
    img: prestigio,
    nome: "Bolo de Prestígio",
    desc: "Camada de chocolate e uma camada bem generosa do nosso recheio de coco.",
    tag: "Clássico",
  },
];

function TiltCard({ item, index }: { item: (typeof sabores)[number]; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], ["9deg", "-9deg"]), {
    stiffness: 180,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], ["-9deg", "9deg"]), {
    stiffness: 180,
    damping: 18,
  });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <Reveal delay={index * 0.12}>
      <motion.div
        onPointerMove={handleMove}
        onPointerLeave={() => {
          mx.set(0);
          my.set(0);
        }}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
        className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-doce"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={item.img}
            alt={item.nome}
            loading="lazy"
            width={1024}
            height={1280}
            className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cacau-deep/85 via-cacau-deep/10 to-transparent" />
          <span className="absolute top-4 left-4 rounded-full bg-card/85 px-3 py-1 text-[10px] tracking-[0.25em] text-primary uppercase backdrop-blur">
            {item.tag}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h3 className="text-3xl text-primary-foreground">{item.nome}</h3>
            <p className="mt-2 max-h-0 overflow-hidden text-sm text-primary-foreground/85 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
              {item.desc}
            </p>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Sabores() {
  return (
    <section id="sabores" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Reveal>
              <span className="text-[11px] tracking-[0.4em] text-accent uppercase">Sabores</span>
            </Reveal>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              <SplitWords text="Os campeões de" />{" "}
              <span className="font-script text-gradient-shine text-5xl sm:text-6xl">pedido</span>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm text-muted-foreground">
              Passe o mouse e conheça o recheio de cada um. Tudo montado no dia, camada por camada.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {sabores.map((s, i) => (
            <TiltCard key={s.nome} item={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
