import { useEffect, useState } from 'react'

export default function OfferCarousel({ offers }) {
  const [index, setIndex] = useState(0)
  const count = offers.length

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (count < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 4000)
    return () => clearInterval(id)
  }, [count])

  if (count === 0) return <p className="text-center text-ink-muted">No offers available</p>

  const offer = offers[index]
  const prev = () => setIndex((index - 1 + count) % count)
  const next = () => setIndex((index + 1) % count)

  return (
    <div className="rounded-xl bg-card shadow-lg">
      {offer.imageUrl && <img src={offer.imageUrl} alt={offer.title} className="w-full rounded-t-xl" />}
      <div className="p-6">
        <h2 className="text-xl font-semibold">{offer.title}</h2>
        <p className="mt-2 text-ink-muted">{offer.description}</p>
        <a href={offer.ctaUrl} className="mt-4 inline-block rounded bg-accent px-4 py-2 font-medium text-accent-ink hover:bg-yellow-300">
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
