import { useEffect, useState } from 'react'
import { trackOfferClick } from '../utils/clickTracking'

export default function OfferCarousel({ offers }) {
  const [index, setIndex] = useState(0)
  const count = offers.length

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (count <= 1) {
      return;   // No rotation needed with 0 or 1 offer
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 4000)
    return () => clearInterval(id)
  }, [count])

  if (count === 0) return <p className="text-center text-ink-muted">No offers available</p>

  const offer = offers[index]
  const prev = () => setIndex((index - 1 + count) % count)
  const next = () => setIndex((index + 1) % count)

  return (
    <div className="rounded-xl bg-card shadow-lg">

      {/* Displays an image only if offer.imageUrl has a truthy value. */}
      {offer.imageUrl && (
        <img
          src={offer.imageUrl}
          alt={offer.title}
          className="w-full rounded-t-xl"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold">{offer.title}</h2>
        <p className="mt-2 text-ink-muted">{offer.description}</p>
        <a
          href={offer.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackOfferClick(offer.id, offer.ctaText)}
          className="mt-4 inline-block rounded bg-adobe px-4 py-2 font-medium text-white hover:bg-adobe-hover"
        >
          {offer.ctaText}
        </a>
      </div>
      {count > 1 && (
        <div className="flex items-center justify-between border-t border-line p-3">
          <button onClick={prev} className="px-3 py-1 hover:text-accent">◀ Prev</button>
          <span className="text-sm text-ink-muted">{index + 1} / {count}</span>
          <button onClick={next} className="px-3 py-1 hover:text-accent">Next ▶</button>
        </div>
      )}
    </div>
  )
}
