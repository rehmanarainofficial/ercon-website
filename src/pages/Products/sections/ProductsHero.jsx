import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { ScrollTrigger, gsap } from "../../../utils/gsap";

export function ProductsHero() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current) return undefined;
      const items = sectionRef.current.querySelectorAll("[data-products-hero]");

      if (reducedMotion) {
        gsap.set(items, { autoAlpha: 1, y: 0 });
        ScrollTrigger.refresh();
        return undefined;
      }

      const timeline = gsap.timeline({ defaults: { ease: "power4.out" } });
      timeline.fromTo(
        items,
        { autoAlpha: 0, y: 30 },
        { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.075 },
      );

      return () => timeline.kill();
    },
    { dependencies: [reducedMotion], scope: sectionRef },
  );

  return (
    <section
      className="relative isolate overflow-hidden bg-surface-dark pt-32 text-white sm:pt-10"
      ref={sectionRef}
    >
      <div className="absolute inset-0 -z-10 technical-grid opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgb(45_163_119/0.34),transparent_34rem),radial-gradient(circle_at_86%_20%,rgb(16_185_129/0.24),transparent_28rem),linear-gradient(150deg,#051610_0%,#092218_52%,#102f22_100%)]" />
      <div className="container-main grid min-h-[76svh] gap-10 pb-14 lg:grid-cols-1 lg:items-end">
        <div>
          <p
            className="mt-8 text-xl font-bold tracking-[0.16em] text-white"
            data-products-hero
          >
            Products and solutions
          </p>
          <h1
            className="mt-6 max-w-5xl text-[clamp(1.8rem,3.8vw,3.5rem)] font-bold text-white leading-tight"
            data-products-hero
          >
            Engineered Products for Reliable Power Distribution
          </h1>
         
          <div
            className="mt-10 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 lg:flex"
            data-products-hero
          >
            <span className="h-px w-14 bg-white/24" />
            Browse range
            <ArrowDown aria-hidden="true" size={16} />
          </div>
        </div>
      </div>
    </section>
  );
}
