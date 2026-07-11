export function LoadingScreen() {
  return (
    <div className="grid min-h-screen place-items-center bg-surface-dark text-white">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl border border-white/16 bg-white text-brand shadow-card" />
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          Loading ERCON
        </p>
      </div>
    </div>
  )
}
