import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/santo/AmbientBackground";
import { Nav } from "@/components/santo/Nav";
import { Hero } from "@/components/santo/Hero";
import { Marquee } from "@/components/santo/Marquee";
import { QuemSomos } from "@/components/santo/QuemSomos";
import { OQueFazemos } from "@/components/santo/OQueFazemos";
import { Sabores } from "@/components/santo/Sabores";
import { Festival } from "@/components/santo/Festival";
import { Depoimentos } from "@/components/santo/Depoimentos";
import { Contato } from "@/components/santo/Contato";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santo Doce | Confeitaria Artesanal no Recanto das Emas, DF" },
      {
        name: "description",
        content:
          "Bolos, brownies e sobremesas artesanais feitos com amor em Brasília. Encomende pelo WhatsApp com entrega para Recanto, Riacho Fundo e Samambaia.",
      },
      { property: "og:title", content: "Santo Doce | Confeitaria Artesanal em Brasília" },
      {
        property: "og:description",
        content:
          "Doces feitos para criar memórias: bolos recheados, brownies e sobremesas artesanais no Recanto das Emas, DF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <AmbientBackground />
      <Nav />
      <Hero />
      <Marquee />
      <QuemSomos />
      <OQueFazemos />
      <Sabores />
      <Festival />
      <Depoimentos />
      <Contato />
    </main>
  );
}
