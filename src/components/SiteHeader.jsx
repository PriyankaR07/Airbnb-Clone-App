import { useState } from 'react'
import { Search, Globe, Menu, CircleUserRound } from 'lucide-react'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-hairline sticky top-0 bg-white z-40">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 text-rausch shrink-0"
          aria-label="Airbnb home"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 1c1.7 0 3 1 4 2.9l5.7 12c.5 1 .8 2 .8 3a6.5 6.5 0 0 1-13 .3A6.5 6.5 0 0 1 .5 19c0-1 .3-2 .8-3l5.7-12c1-1.9 2.3-2.9 4-2.9h5Zm-3 20.9a3.9 3.9 0 0 0 3.9-3.9c0-1.4-1.6-4.3-4.7-8.7l-.2-.3-.2.3c-3.1 4.4-4.7 7.3-4.7 8.7a3.9 3.9 0 0 0 3.9 3.9Z" />
          </svg>
          <span className="text-lg font-semibold hidden sm:inline">airbnb</span>
        </a>

        {/* Search pill */}
        <button
          type="button"
          className="flex items-center border border-hairline rounded-full shadow-sm hover:shadow-md transition-shadow duration-150 divide-x divide-hairline overflow-hidden text-sm"
        >
          <span className="px-5 py-2.5 font-medium">Anywhere</span>
          <span className="px-5 py-2.5 font-medium">Any week</span>
          <span className="pl-5 pr-2 py-2 text-ink_light flex items-center gap-3">
            Add guests
            <span className="bg-rausch text-white rounded-full p-2 flex items-center justify-center">
              <Search size={14} strokeWidth={3} aria-hidden="true" />
            </span>
          </span>
        </button>

        {/* Right side */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="/host"
            className="hidden lg:inline px-4 py-3 rounded-full hover:bg-gray-100 transition-colors duration-150 text-sm font-medium"
          >
            Airbnb your home
          </a>
          <button
            type="button"
            className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-150"
            aria-label="Choose a language and region"
          >
            <Globe size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Open main menu"
            className="flex items-center gap-3 border border-hairline rounded-full py-2 pl-3 pr-2 hover:shadow-md transition-shadow duration-150"
          >
            <Menu size={16} aria-hidden="true" />
            <CircleUserRound size={26} strokeWidth={1.2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
