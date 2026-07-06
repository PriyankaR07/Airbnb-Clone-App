import { useRef, useState } from 'react'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import ListingTitleBar from './components/ListingTitleBar'
import PhotoGrid from './components/PhotoGrid'
import ListingDetails from './components/ListingDetails'
import BookingCard from './components/BookingCard'
import PhotoTour from './components/PhotoTour'
import Lightbox from './components/Lightbox'
import { listing, photos } from './data/listing'

export default function App() {
  const [tourOpen, setTourOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const showAllPhotosRef = useRef(null)

  const openTour = () => setTourOpen(true)
  const closeTour = () => setTourOpen(false)

  const openLightbox = (index) => {
    setActiveIndex(index)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)

  return (
    <div className="min-h-screen bg-white font-sans text-ink flex flex-col">
      <SiteHeader />

      <div className="flex-1">
        <ListingTitleBar />
        <PhotoGrid ref={showAllPhotosRef} photos={photos} onOpenTour={openTour} />

        <main className="max-w-[1120px] mx-auto px-20 mt-8 pb-16 flex gap-16">
          <ListingDetails listing={listing} />
          <BookingCard listing={listing} />
        </main>
      </div>

      <SiteFooter />

      <PhotoTour
        photos={photos}
        isOpen={tourOpen}
        onClose={closeTour}
        onOpenPhoto={openLightbox}
      />

      <Lightbox
        photos={photos}
        index={activeIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={setActiveIndex}
        onNext={setActiveIndex}
      />
    </div>
  )
}
