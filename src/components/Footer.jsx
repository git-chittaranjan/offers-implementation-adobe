export default function Footer() {
  return (
    <footer className="border-t border-line bg-header">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-ink-muted sm:flex-row sm:px-6 lg:px-8">
        <p>
          <span className="font-semibold text-ink">Adobe Offer Decisioning Demo App</span> · Learning Purpose Only
        </p>
        <p>Built with React, Vite &amp; Tailwind CSS · Adobe Experience Platform Web SDK</p>
      </div>
    </footer>
  )
}
