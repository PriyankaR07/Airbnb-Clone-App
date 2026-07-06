import { X } from 'lucide-react'
import { useFocusTrap } from '../hooks/useFocusTrap'

export default function PhotoTour({ photos, isOpen, onClose, onOpenPhoto }) {
  const containerRef = useFocusTrap(isOpen, onClose)

  if (!isOpen) return null

  // Group photos by category to mirror the reference's sectioned tour layout
  const grouped = photos.reduce((acc, photo) => {
    acc[photo.category] = acc[photo.category] || []
    acc[photo.category].push(photo)
    return acc
  }, {})

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="All photos"
      tabIndex={-1}
      className="fixed inset-0 z-50 bg-white overflow-y-auto animate-fadeIn"
    >
      <div className="sticky top-0 bg-white border-b border-hairline z-10">
        <div className="max-w-[900px] mx-auto px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-150"
            aria-label="Close photo tour"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-8">
        {Object.entries(grouped).map(([category, group]) => (
          <section key={category} className="mb-10">
            <h2 className="text-lg font-medium text-ink mb-4">{category}</h2>
            <div className="grid grid-cols-2 gap-4">
              {group.map((photo) => {
                const globalIndex = photos.findIndex((p) => p.id === photo.id)
                return (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => onOpenPhoto(globalIndex)}
                    className="text-left group"
                    aria-label={`Open photo: ${photo.caption}`}
                  >
                    <div className="rounded-xl2 overflow-hidden">
                      <img
                        src={photo.thumb}
                        alt={photo.alt}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                    <p className="mt-2 font-medium text-sm text-ink">{photo.caption}</p>
                    <p className="text-ink_light text-sm">{photo.details}</p>
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
