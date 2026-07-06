import { useState } from 'react'
import {
  Star,
  Wifi,
  Car,
  Waves,
  Wind,
  UtensilsCrossed,
  Shirt,
  Tv,
  Bath,
  BadgeCheck,
} from 'lucide-react'

const AMENITY_ICONS = {
  wifi: Wifi,
  car: Car,
  pool: Waves,
  ac: Wind,
  kitchen: UtensilsCrossed,
  washer: Shirt,
  tv: Tv,
  jacuzzi: Bath,
}

export default function ListingDetails({ listing }) {
  const [descExpanded, setDescExpanded] = useState(false)

  return (
    <div className="flex-1 max-w-[720px]">
      <section className="pb-6 border-b border-hairline">
        <h2 className="text-xl font-medium text-ink">{listing.propertyType}</h2>
        <p className="text-ink text-[15px] mt-1">{listing.stats}</p>
        <div className="flex items-center gap-1 mt-2 text-[15px]">
          <Star size={14} className="fill-ink text-ink" aria-hidden="true" />
          <span className="font-medium">{listing.rating}</span>
          <span className="text-ink_light">· {listing.reviewCount} reviews</span>
          {listing.isSuperhost && <span className="text-ink_light">· Superhost</span>}
        </div>
      </section>

      <section className="py-6 border-b border-hairline flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-full bg-rausch/10 flex items-center justify-center text-rausch font-medium text-lg shrink-0"
          aria-hidden="true"
        >
          {listing.host.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium text-ink flex items-center gap-1">
            Hosted by {listing.host.name}
            {listing.host.isSuperhost && (
              <BadgeCheck size={16} className="text-rausch" aria-label="Superhost" />
            )}
          </p>
          <p className="text-ink_light text-sm mt-0.5">{listing.host.joined}</p>
          <p className="text-ink_light text-sm">
            Response rate {listing.host.responseRate} · Responds {listing.host.responseTime}
          </p>
        </div>
      </section>

      <section className="py-6 border-b border-hairline">
        <p className="text-ink text-[15px] leading-6">
          {listing.description}
          {descExpanded && (
            <span> {listing.descriptionMore}</span>
          )}
        </p>
        <button
          type="button"
          onClick={() => setDescExpanded((v) => !v)}
          className="mt-3 underline font-medium text-sm text-ink flex items-center gap-1"
          aria-expanded={descExpanded}
        >
          {descExpanded ? 'Show less' : 'Show more'}
        </button>
      </section>

      <section className="py-6 border-b border-hairline">
        <h3 className="text-xl font-medium text-ink mb-4">What this place offers</h3>
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          {listing.amenities.map((a) => {
            const Icon = AMENITY_ICONS[a.icon] ?? Wifi
            return (
              <div key={a.label} className="flex items-center gap-4 text-[15px] text-ink">
                <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                <span>{a.label}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-6">
        <div className="flex items-center gap-1 text-[15px] mb-4">
          <Star size={16} className="fill-ink text-ink" aria-hidden="true" />
          <span className="font-medium">
            {listing.rating} · {listing.reviewCount} reviews
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {listing.reviews.map((r) => (
            <div key={r.id}>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-ink font-medium text-sm"
                  aria-hidden="true"
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-sm text-ink">{r.name}</p>
                  <p className="text-ink_light text-xs">{r.date}</p>
                </div>
              </div>
              <p className="text-[15px] text-ink leading-6">{r.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
