import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function BookingCard({ listing }) {
  const [guests, setGuests] = useState(1)
  const [reserved, setReserved] = useState(false)
  const serviceFee = Math.round(listing.price * 0.12)
  const total = listing.price * listing.nights + serviceFee

  return (
    <aside className="w-[380px] shrink-0">
      <div className="sticky top-8 border border-hairline rounded-xl2 shadow-[0_6px_16px_rgba(0,0,0,0.12)] p-6">
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-xl font-medium text-ink">
            {listing.currency}
            {listing.price.toLocaleString('en-IN')}
          </span>
          <span className="text-ink text-[15px]">night</span>
        </div>

        <div className="border border-hairline rounded-lg overflow-hidden mb-4">
          <div className="grid grid-cols-2">
            <div className="p-3 border-r border-b border-hairline">
              <p className="text-[10px] font-medium tracking-wide">CHECK-IN</p>
              <p className="text-sm">7/10/2026</p>
            </div>
            <div className="p-3 border-b border-hairline">
              <p className="text-[10px] font-medium tracking-wide">CHECKOUT</p>
              <p className="text-sm">7/11/2026</p>
            </div>
          </div>
          <label className="p-3 flex items-center justify-between cursor-pointer" htmlFor="guests">
            <span>
              <span className="block text-[10px] font-medium tracking-wide">GUESTS</span>
              <span className="text-sm">
                {guests} guest{guests > 1 ? 's' : ''}
              </span>
            </span>
            <ChevronDown size={16} aria-hidden="true" />
          </label>
          <select
            id="guests"
            className="sr-only"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          >
            {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} guest{n > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => setReserved(true)}
          className="w-full bg-rausch hover:bg-rausch_dark transition-colors duration-150 text-white font-medium py-3.5 rounded-lg"
        >
          {reserved ? 'Reserved' : 'Reserve'}
        </button>

        <p className="text-center text-ink_light text-sm mt-3">
          You won't be charged yet
        </p>

        <div className="mt-4 space-y-2 text-[15px]">
          <div className="flex justify-between">
            <span className="underline">
              {listing.currency}
              {listing.price.toLocaleString('en-IN')} x {listing.nights} night
              {listing.nights > 1 ? 's' : ''}
            </span>
            <span>
              {listing.currency}
              {(listing.price * listing.nights).toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="underline">Service fee</span>
            <span>
              {listing.currency}
              {serviceFee.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="border-t border-hairline mt-4 pt-4 flex justify-between font-medium">
          <span>Total</span>
          <span>
            {listing.currency}
            {total.toLocaleString('en-IN')}
          </span>
        </div>
      </div>
    </aside>
  )
}
