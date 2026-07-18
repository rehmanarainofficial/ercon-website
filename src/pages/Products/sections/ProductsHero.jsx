import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { ScrollTrigger, gsap } from "../../../utils/gsap";
import productBg from "../../../assets/images/generated/product.png";

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
      className="relative isolate overflow-hidden bg-surface-dark pt-28 text-white sm:pt-32 lg:pt-10"
      ref={sectionRef}
    >
      <div className="absolute inset-0 -z-10">
        <img
          alt="ERCON Products Hero Background"
          className="h-full w-full object-cover opacity-60 saturate-110"
          src={productBg}
        />
      </div>
      <div className="absolute inset-0 -z-10 technical-grid opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgb(76_175_80/0.24),transparent_34rem),radial-gradient(circle_at_86%_20%,rgb(22_58_95/0.34),transparent_28rem),linear-gradient(150deg,rgb(22_58_95/0.95)_0%,rgb(22_58_95/0.78)_42%,rgb(15_107_74/0.25)_100%)]" />
      <div className="container-main grid min-h-[36svh] gap-8 pb-10 sm:min-h-[58svh] sm:gap-10 sm:pb-14 lg:min-h-[76svh] lg:grid-cols-1 lg:items-end">
        <div>
          <p
            className="mt-4 text-sm font-bold tracking-[0.08em] text-white sm:mt-8 sm:text-xl sm:tracking-[0.16em]"
            data-products-hero
          >
            Products and solutions
          </p>
          <h1
            className="mt-4 max-w-[820px] text-[clamp(1.5rem,7vw,2.05rem)] font-bold leading-[1.14] text-white sm:mt-6 sm:text-[clamp(2rem,3.1vw,3rem)] sm:leading-[1.12] 2xl:max-w-5xl 2xl:text-[clamp(2.5rem,3.8vw,3.5rem)]"
            data-products-hero
          >
            <span className="block">Engineered Products </span>
            <span className="block">for Reliable Power Distribution</span>
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
