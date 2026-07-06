import { Share, Heart } from 'lucide-react'
import { useState } from 'react'

export default function ListingTitleBar() {
  const [saved, setSaved] = useState(false)

  return (
    <header className="max-w-[1120px] mx-auto px-20 pt-8">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-[26px] leading-[30px] font-medium text-ink">
          Romantic Jacuzzi 1BHK Candolim | Mirashya UG10
        </h1>

        <div className="flex items-center gap-2 shrink-0 pt-1">
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-150 underline text-sm font-medium"
          >
            <Share size={16} strokeWidth={2} aria-hidden="true" />
            Share
          </button>
          <button
            type="button"
            aria-pressed={saved}
            onClick={() => setSaved((s) => !s)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-150 underline text-sm font-medium"
          >
            <Heart
              size={16}
              strokeWidth={2}
              aria-hidden="true"
              className={saved ? 'fill-rausch text-rausch' : 'text-ink'}
            />
            {saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </header>
  )
}
