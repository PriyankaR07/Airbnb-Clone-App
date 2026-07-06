import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useFocusTrap } from '../hooks/useFocusTrap'

export default function Lightbox({ photos, index, isOpen, onClose, onPrev, onNext }) {
  const photo = photos[index]

  const handlePrev = () => onPrev((index - 1 + photos.length) % photos.length)
  const handleNext = () => onNext((index + 1) % photos.length)

  const containerRef = useFocusTrap(isOpen, onClose, handlePrev, handleNext)

  if (!isOpen || !photo) return null

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}: ${photo.caption}`}
      tabIndex={-1}
      className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center animate-fadeIn"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 left-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-150"
        aria-label="Close photo viewer"
      >
        <X size={24} aria-hidden="true" />
      </button>

      <p className="absolute top-7 left-1/2 -translate-x-1/2 text-white text-sm">
        {index + 1} / {photos.length}
      </p>

      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-4 md:left-8 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-150 disabled:opacity-30"
        aria-label="Previous photo"
      >
        <ChevronLeft size={28} aria-hidden="true" />
      </button>

      <figure
        key={photo.id}
        className="max-w-[85vw] max-h-[80vh] flex flex-col items-center animate-scaleIn"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-w-[85vw] max-h-[70vh] object-contain rounded-md"
        />
        <figcaption className="text-white text-center mt-4">
          <p className="font-medium">{photo.caption}</p>
          <p className="text-white/70 text-sm">{photo.details}</p>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={handleNext}
        className="absolute right-4 md:right-8 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-150 disabled:opacity-30"
        aria-label="Next photo"
      >
        <ChevronRight size={28} aria-hidden="true" />
      </button>
    </div>
  )
}
