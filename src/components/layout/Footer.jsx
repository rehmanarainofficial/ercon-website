import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BrandHomeLink } from "./BrandHomeLink";
import { fetchCategories } from "../../services/api";

export function Footer() {
  const [divisionLinks, setDivisionLinks] = useState([]);
  const [divisionsLoading, setDivisionsLoading] = useState(true);

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Divisions", path: "/products" },
    { label: "Clientele", path: "/clientele" },
    { label: "Accreditations", path: "/accreditations" },
    { label: "Gallery", path: "/gallery" },
    { label: "Career", path: "/career" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const globalFootprints = [
    { label: "Pakistan", x: "67%", y: "47%" },
    { label: "UAE", x: "52%", y: "50%" },
    { label: "KSA", x: "44%", y: "57%" },
  ];

  useEffect(() => {
    let active = true;

    const loadDivisionLinks = async () => {
      try {
        setDivisionsLoading(true);
        const apiCategories = await fetchCategories();
        if (!active) return;

        const nextLinks = Array.isArray(apiCategories)
          ? apiCategories.slice(0, 8).map((category) => ({
              label: category.label,
              path: `/products?category=${encodeURIComponent(category.id)}`,
            }))
          : [];

        setDivisionLinks(nextLinks);
      } catch (err) {
        console.error("Error loading footer divisions:", err);
        if (active) setDivisionLinks([]);
      } finally {
        if (active) setDivisionsLoading(false);
      }
    };

    loadDivisionLinks();

    return () => {
      active = false;
    };
  }, []);

  return (
    <footer className="relative overflow-hidden bg-surface-dark-2 text-white border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgb(22_58_95/0.24),transparent_35rem),radial-gradient(circle_at_92%_18%,rgb(15_107_74/0.1),transparent_25rem)] pointer-events-none" />

      <div className="container-main relative pt-16 pb-28 lg:pb-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] border-b border-white/10 pb-12">
          {/* Column 1: Brand Info */}
          <div>
            <BrandHomeLink logoClassName="h-23 w-[250px]" />
            <div
              className="group relative mt-3 h-55 aspect-[1.9] max-w-[300px] overflow-hidden rounded-[1.4rem] border border-white/15 bg-[radial-gradient(circle_at_78%_22%,rgb(76_175_80/0.24),transparent_8rem),linear-gradient(135deg,rgb(22_58_95/0.98),rgb(10_44_69/0.95)_58%,rgb(8_35_57/0.98))] shadow-[0_22px_60px_rgb(0_0_0/0.22),inset_0_1px_0_rgb(255_255_255/0.12)]"
              aria-label="ERCON regional footprint map"
            >
              <div className="absolute inset-0 technical-grid opacity-10" />
              <div className="absolute -left-10 top-8 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />
              <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-white/70">
                Footprint
              </div>
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 800 360"
              >
                <defs>
                  <linearGradient id="footerMapLand" x1="0" x2="1" y1="0" y2="1">
                    <stop stopColor="rgb(255 255 255 / 0.16)" />
                    <stop offset="1" stopColor="rgb(255 255 255 / 0.05)" />
                  </linearGradient>
                  <linearGradient id="footerMapRoute" x1="0" x2="1">
                    <stop stopColor="#22b8f0" />
                    <stop offset="0.5" stopColor="#4caf50" />
                    <stop offset="1" stopColor="#ffd51e" />
                  </linearGradient>
                  <filter id="footerMapGlow" x="-20%" y="-80%" width="140%" height="260%">
                    <feGaussianBlur stdDeviation="7" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path d="M100 82 L198 60 L308 103 L285 172 L174 188 L78 137 Z" fill="url(#footerMapLand)" />
                <path d="M338 82 L506 55 L649 128 L602 224 L419 219 L304 150 Z" fill="url(#footerMapLand)" opacity="0.95" />
                <path d="M512 207 L665 184 L743 237 L705 314 L545 296 Z" fill="url(#footerMapLand)" opacity="0.68" />
                <path d="M82 255 C177 166 275 188 365 218 C470 253 544 246 714 145" fill="none" stroke="rgb(255 255 255 / 0.13)" strokeLinecap="round" strokeWidth="16" />
                <path d="M82 255 C177 166 275 188 365 218 C470 253 544 246 714 145" fill="none" filter="url(#footerMapGlow)" stroke="url(#footerMapRoute)" strokeLinecap="round" strokeWidth="5" />
                <path d="M82 255 C177 166 275 188 365 218 C470 253 544 246 714 145" fill="none" stroke="rgb(255 255 255 / 0.78)" strokeDasharray="2 16" strokeLinecap="round" strokeWidth="3" />
              </svg>

              {globalFootprints.map((footprint) => (
                <div
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  key={footprint.label}
                  style={{ left: footprint.x, top: footprint.y }}
                >
                  <span className="absolute left-1/2 top-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[1px]" />
                  <span className="relative grid h-7 w-7 place-items-center rounded-full border border-white/40 bg-accent shadow-[0_0_0_7px_rgb(76_175_80/0.18),0_10px_22px_rgb(0_0_0/0.25)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                </div>
              ))}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-full border border-white/10 bg-surface-dark/55 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/75 backdrop-blur-md">
                <span>Pakistan</span>
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span>UAE</span>
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span>KSA</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[15px] sm:text-base">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide mb-5">
              Divisions
            </h3>
            <ul className="space-y-2 text-[15px] sm:text-base">
              {divisionsLoading ? (
                <li className="text-white/60">Loading divisions...</li>
              ) : null}
              {!divisionsLoading && divisionLinks.length === 0 ? (
                <li className="text-white/60">Divisions unavailable</li>
              ) : null}
              {divisionLinks.map((division) => (
                <li key={division.path}>
                  <Link
                    to={division.path}
                    className="text-white/80 hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {division.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us & Contact Details */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-white tracking-wide mb-5">
              Follow us
            </h3>
            <ul className="space-y-3.5 text-[15px] sm:text-base mb-6">
              <li>
                <a
                  href="https://www.facebook.com/people/ERCON-Industries-PVT-Limited/61591925099821/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-all duration-200 group"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white/80 group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-transparent transition-all">
                    <svg
                      className="h-4.5 w-4.5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </span>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ercon.ind/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-all duration-200 group"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white/80 group-hover:bg-[#E1306C] group-hover:text-white group-hover:border-transparent transition-all">
                    <svg
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/ercon-industries-pvt-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-all duration-200 group"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white/80 group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-transparent transition-all">
                    <svg
                      className="h-3.5 w-3.5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </span>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>

            <div className="text-[14px] sm:text-[15px] text-white/85 space-y-2.5 max-w-sm border-t border-white/10 pt-5">
              <p className="flex items-start gap-2">
                <span className="font-extrabold text-white">Address:</span>
                <span className="text-white/80">
                  6.2 KM from lillyani Toll plaza Near Pakki Haveli Mustafabad
                  Bayron Kasur
                </span>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-extrabold text-white">UAN:</span>
                <a
                  href="tel:+923111444590"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +92 3111 444 590
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-extrabold text-white">Email:</span>
                <a
                  href="mailto:info@erconind.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@erconind.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between pt-6">
          <p>© {new Date().getFullYear()} ERCON. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              to="/terms-conditions"
              className="hover:text-white transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <span className="text-white/20">|</span>
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
