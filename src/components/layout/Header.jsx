import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BrandHomeLink } from "./BrandHomeLink";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
          scrolled
            ? "bg-surface-dark/84 shadow-floating backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-main flex h-(--header-height) items-center justify-between gap-4">
          <BrandHomeLink
            className="text-white"
            logoClassName="h-[76px] w-[218px] group-hover:-translate-y-0.5 sm:w-[248px]"
          />

          <div className="flex items-center gap-3">
            <DesktopNavigation />
            <button
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label="Open menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur lg:hidden"
              onClick={() => setMenuOpen(true)}
              ref={menuButtonRef}
              type="button"
            >
              <Menu aria-hidden="true" size={22} />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation
        id="mobile-navigation"
        onClose={() => setMenuOpen(false)}
        open={menuOpen}
        triggerRef={menuButtonRef}
      />
    </>
  );
}
