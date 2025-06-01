"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#f9f5ee] border-b border-[#222222]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#222222]">
              VibeApps
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#uslugi" className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium">
                Usługi
              </Link>
              <Link
                href="#rozwiazania"
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium"
              >
                Rozwiązania
              </Link>
              <Link
                href="#case-studies"
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium"
              >
                Case Studies
              </Link>
              <Link href="#o-nas" className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium">
                O nas
              </Link>
              <Button className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90">Bezpłatna konsultacja</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#222222] hover:text-[#222222]/70">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#f9f5ee] border-t border-[#222222]/10">
            <Link
              href="#uslugi"
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium"
            >
              Usługi
            </Link>
            <Link
              href="#rozwiazania"
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium"
            >
              Rozwiązania
            </Link>
            <Link
              href="#case-studies"
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium"
            >
              Case Studies
            </Link>
            <Link
              href="#o-nas"
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium"
            >
              O nas
            </Link>
            <Button className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90 w-full mt-2">
              Bezpłatna konsultacja
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
