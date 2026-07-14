import { BrandLogo } from "../layout/BrandLogo";

export function LoadingScreen() {
  return (
    <div className="grid min-h-screen place-items-center bg-surface-dark text-white">
      <div className="text-center">
        <BrandLogo className="mx-auto h-[200px] w-[800px]" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          Loading ERCON
        </p>
      </div>
    </div>  
  );
}
