import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Fundo vivo: blobs de cacau/rosé que flutuam, reagem ao scroll e ao mouse,
 * mais uma barra de progresso de leitura no topo.
 */
export function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const shiftA = useTransform(progress, [0, 1], ["0%", "28%"]);
  const shiftB = useTransform(progress, [0, 1], ["0%", "-32%"]);
  const hueRotate = useTransform(progress, [0, 1], ["0deg", "24deg"]);

  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        style={{ filter: hueRotate ? undefined : undefined }}
      >
        <motion.div
          className="blob animate-float-slow size-[46rem] bg-rose-soft/70"
          style={{ top: "-14rem", left: "-12rem", y: shiftA, x: pointer.x }}
        />
        <motion.div
          className="blob animate-float-slow size-[38rem] bg-dourado/45"
          style={{ top: "38%", right: "-10rem", y: shiftB, x: -pointer.x }}
        />
        <motion.div
          className="blob animate-float-slow size-[42rem] bg-rose/35"
          style={{ bottom: "-16rem", left: "22%", y: shiftA, x: pointer.y }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent,var(--creme)_75%)]" />
      </motion.div>

      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-rose"
        style={{ scaleX: progress }}
      />
    </>
  );
}
