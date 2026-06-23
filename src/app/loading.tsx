export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 bg-bg">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold/30 border-t-gold" />
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-steel">Loading&hellip;</p>
    </div>
  );
}
