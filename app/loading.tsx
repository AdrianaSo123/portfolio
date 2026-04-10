export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[60vh] bg-canvas">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-t-2 border-ink rounded-full animate-spin" />
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-body animate-pulse">
          Adriana So
        </p>
      </div>
    </div>
  );
}
