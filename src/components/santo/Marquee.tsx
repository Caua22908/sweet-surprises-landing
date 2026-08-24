const items = [
  "bolos artesanais",
  "brownies",
  "copos da felicidade",
  "sobremesas",
  "bolos de festa",
  "doces finos",
  "festival de fatias",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-gradient-cacau py-5">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xl tracking-[0.2em] text-primary-foreground/80 uppercase"
          >
            {item}
            <span className="ml-12 text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
