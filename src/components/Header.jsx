import { useState } from 'react'

const LINKS = [
  {
    label: 'Adobe Web SDK',
    href: 'https://experienceleague.adobe.com/en/docs/experience-platform/web-sdk/home',
  },
  {
    label: 'Journey Optimizer',
    href: 'https://experienceleague.adobe.com/en/docs/journey-optimizer',
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-header">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-adobe text-lg font-bold text-white shadow-sm">
            A
          </span>
          <span className="truncate text-base font-semibold tracking-tight sm:text-lg">
            Adobe Offer Decisioning Demo App
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden gap-3 text-sm font-medium md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-adobe px-4 py-2 text-white hover:bg-adobe-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="ml-3 shrink-0 rounded p-2 hover:bg-black/5 md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col gap-2 border-t border-line px-4 py-3 text-sm font-medium md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded bg-adobe px-4 py-2 text-center text-white hover:bg-adobe-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}