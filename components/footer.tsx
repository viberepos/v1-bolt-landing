import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#f9f5ee] border-t border-[#222222]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-[#222222] mb-4">VibeApps</h3>
            <p className="text-[#222222]/70 mb-6 max-w-md">
              Transformujemy przestarzałe procesy biznesowe w dedykowane systemy szyte na miarę Twoich potrzeb. Jesteśmy
              Twoim partnerem w cyfrowej transformacji.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">kontakt@vibeapps.pl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">+48 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#222222]" />
                <span className="text-[#222222]/70">Warszawa, Polska</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#222222] mb-4">Usługi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#222222]/70 hover:text-[#222222]">
                  MVP Check
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#222222]/70 hover:text-[#222222]">
                  Evolve
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#222222]/70 hover:text-[#222222]">
                  Advanced
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#222222]/70 hover:text-[#222222]">
                  Ultimate
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#222222] mb-4">Firma</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-[#222222]/70 hover:text-[#222222]">
                  O nas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#222222]/70 hover:text-[#222222]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#222222]/70 hover:text-[#222222]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#222222]/70 hover:text-[#222222]">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222222]/10 mt-12 pt-8 text-center">
          <p className="text-[#222222]/70">© 2024 VibeApps. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
