import { Grid3x3 } from 'lucide-react'
import { forwardRef } from 'react'

const PhotoGrid = forwardRef(function PhotoGrid({ photos, onOpenTour }, ref) {
  return (
    <div className="max-w-[1120px] mx-auto px-20 mt-6 relative">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-xl2 overflow-hidden h-[480px]">
        <button
          type="button"
          onClick={() => onOpenTour(0)}
          className="col-span-2 row-span-2 relative group overflow-hidden"
          aria-label={`View photo: ${photos[0].alt}`}
        >
          <img
            src={photos[0].src}
            alt={photos[0].alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </button>

        {photos.slice(1, 5).map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => onOpenTour(i + 1)}
            className={`relative group overflow-hidden ${i === 1 ? 'rounded-tr-xl2' : ''} ${
              i === 3 ? 'rounded-br-xl2' : ''
            }`}
            aria-label={`View photo: ${photo.alt}`}
          >
            <img
              src={photo.thumb}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      <button
        ref={ref}
        type="button"
        onClick={() => onOpenTour(0)}
        className="absolute bottom-6 right-24 flex items-center gap-2 bg-white border border-ink px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors duration-150"
      >
        <Grid3x3 size={16} strokeWidth={2} aria-hidden="true" />
        Show all photos
      </button>
    </div>
  )
})

export default PhotoGrid
