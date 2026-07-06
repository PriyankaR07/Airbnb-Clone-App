import { Globe, DollarSign, Facebook, Twitter, Instagram } from 'lucide-react'

const columns = [
  {
    title: 'Support',
    links: [
      'Help Center',
      'AirCover',
      'Anti-discrimination',
      'Disability support',
      'Cancellation options',
      'Report neighborhood concern',
    ],
  },
  {
    title: 'Hosting',
    links: [
      'Airbnb your home',
      'AirCover for Hosts',
      'Hosting resources',
      'Community forum',
      'Hosting responsibly',
      'Airbnb-friendly apartments',
    ],
  },
  {
    title: 'Airbnb',
    links: ['Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards'],
  },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-gray-50 mt-16">
      <div className="max-w-[1760px] mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-medium text-sm mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink hover:underline underline-offset-2"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="max-w-[1760px] mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-ink_light">
            <span>&copy; 2026 Airbnb Clone, Inc.</span>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              aria-label="Choose a language and region"
            >
              <Globe size={16} aria-hidden="true" />
              English (IN)
            </button>
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-medium hover:underline"
              aria-label="Choose a currency"
            >
              <DollarSign size={16} aria-hidden="true" />
              INR
            </button>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Airbnb on Facebook" className="text-ink hover:text-ink_light">
                <Facebook size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Airbnb on Twitter" className="text-ink hover:text-ink_light">
                <Twitter size={18} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Airbnb on Instagram" className="text-ink hover:text-ink_light">
                <Instagram size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
