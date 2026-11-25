const LINKS = [
  {
    label: 'Adobe Web SDK',
    href: 'https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/home',
  },
  {
    label: 'Offer Decisioning',
    href: 'https://experienceleague.adobe.com/en/docs/journey-optimizer/using/decisioning/offer-decisioning/get-started-decisioning/starting-offer-decisioning',
  },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-adobe text-lg font-bold text-white shadow-sm">
            A
          </span>
          <span className="text-base font-semibold tracking-tight sm:text-lg">
            Adobe Offer Decisioning Demo App
          </span>
        </div>

        <nav className="flex gap-4 text-sm font-medium">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-ink-muted hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
