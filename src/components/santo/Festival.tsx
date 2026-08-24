import { motion } from "motion/react";
import { CalendarHeart, MapPin, Bike } from "lucide-react";
import { Reveal, SplitWords, useParallax } from "./motion-primitives";
import { WHATSAPP_URL } from "./data";
import festa from "@/assets/bolo-festa.jpg";

const infos = [
  { icon: CalendarHeart, text: "22 e 23 de agosto · sábado e domingo" },
  { icon: MapPin, text: "Retirada no Recanto das Emas ou entrega mediante taxa" },
  { icon: Bike, text: "Entregas para Recanto, Riacho Fundo e Samambaia" },
];

export function Festival() {
  const { ref, y } = useParallax<HTMLImageElement>(70);

  return (
    <section id="festival" className="relative px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-cacau shadow-lift">
        <motion.img
          ref={ref}
          style={{ y }}
          src={festa}
          alt="Bolo de festa decorado da Santo Doce"
          loading="lazy"
          width={1280}
          height={1024}
          className="absolute inset-0 size-full scale-125 object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cacau-deep via-cacau-deep/85 to-transparent" />

        <div className="relative grid gap-10 p-10 md:grid-cols-2 md:p-16">
          <div>
            <Reveal>
              <span className="text-[11px] tracking-[0.4em] text-dourado uppercase">
                Próximo evento
              </span>
            </Reveal>
            <h2 className="mt-4 text-4xl leading-[1.05] text-primary-foreground sm:text-5xl">
              <SplitWords text="Festival de Fatias" />
              <br />
              <span className="font-script text-gradient-shine text-6xl sm:text-7xl">delivery</span>
            </h2>
            <p className="mt-6 max-w-md text-primary-foreground/80">
              Uma seleção de fatias bem recheadas, feitas artesanalmente e com muito carinho. Salva
              a data e chama quem vai dividir uma fatia com você.
            </p>

            <ul className="mt-8 space-y-3">
              {infos.map((i, idx) => (
                <Reveal key={i.text} delay={0.1 * idx}>
                  <li className="flex items-center gap-3 text-sm text-primary-foreground/85">
                    <i.icon className="size-4 text-dourado" strokeWidth={1.6} />
                    {i.text}
                  </li>
                </Reveal>
              ))}
            </ul>

            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 inline-block rounded-full bg-gradient-rose px-8 py-4 text-sm font-medium tracking-widest text-cacau-deep uppercase shadow-doce"
            >
              Garantir minha fatia
            </motion.a>
          </div>

          <div className="flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="glass-doce animate-drift w-full max-w-xs rounded-[2rem] p-8 text-center"
            >
              <p className="text-[11px] tracking-[0.35em] text-muted-foreground uppercase">
                Sabores do festival
              </p>
              <ul className="mt-5 space-y-3 font-display text-2xl text-primary">
                <li>Tropical</li>
                <li>Trufado de Maracujá</li>
                <li>Prestígio</li>
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">Quantidades limitadas ✦</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
