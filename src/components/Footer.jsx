export default function Footer() {
  return (
    <footer className="border-t border-line bg-header">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-ink-muted sm:flex-row sm:text-left sm:text-sm sm:px-6 lg:px-8">
        <p>
          <span className="block font-semibold text-ink sm:inline">
            Adobe Offer Decisioning Demo App
          </span>
          <span className="hidden sm:inline"> · </span>
          Learning Purpose Only
        </p>
        <p className="max-w-xs sm:max-w-none">
          Built with React, Vite &amp; Tailwind CSS
          <span className="block sm:inline">
            <span className="hidden sm:inline"> · </span>
            Adobe Experience Platform Web SDK
          </span>
        </p>
      </div>
    </footer>
  )
}