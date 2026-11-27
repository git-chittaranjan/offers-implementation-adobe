import { useEffect, useState } from 'react'
import Header from './components/Header'
import OfferCarousel from './components/OfferCarousel'
import Footer from './components/Footer'
import { getOffers, subscribeOffers } from './services/offerService'

export default function App() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    getOffers().then((data) => {
      setOffers(data)
    });
    
    return subscribeOffers(setOffers);
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-2xl flex-1 p-12">
        <OfferCarousel offers={offers} />
      </main>
      <Footer />
    </div>
  )
}