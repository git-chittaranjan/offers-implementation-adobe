import { useEffect, useState } from 'react'
import Header from './components/Header'
import OfferCarousel from './components/OfferCarousel'
import Footer from './components/Footer'
import { getOffers, subscribeOffers } from './services/offerService'

const PRODUCT_ID = undefined // e.g. "HOME_LOAN" on a product page

export default function App() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    getOffers(PRODUCT_ID).then(setOffers)
    return subscribeOffers(setOffers, PRODUCT_ID)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-2xl flex-1 p-8">
        <OfferCarousel offers={offers} />
      </main>
      <Footer />
    </div>
  )
}