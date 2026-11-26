import { useEffect, useState } from 'react'
import Header from './components/Header'
import OfferCarousel from './components/OfferCarousel'
import Footer from './components/Footer'
import { getOffers } from './services/offerService'

export default function App() {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function fetchOffers() {
      const data = await getOffers();
      setOffers(data);
    }

    fetchOffers();
  }, []);

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
