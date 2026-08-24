import { AmbientBackground } from "@/components/santo/AmbientBackground";
import { Contato } from "@/components/santo/Contato";
import { Depoimentos } from "@/components/santo/Depoimentos";
import { Festival } from "@/components/santo/Festival";
import { Hero } from "@/components/santo/Hero";
import { Marquee } from "@/components/santo/Marquee";
import { Nav } from "@/components/santo/Nav";
import { OQueFazemos } from "@/components/santo/OQueFazemos";
import { QuemSomos } from "@/components/santo/QuemSomos";
import { Sabores } from "@/components/santo/Sabores";

export default function App() {
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
