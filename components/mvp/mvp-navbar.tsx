"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MVPNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close mobile menu after clicking
  }

  return (
    <nav className={`bg-[#f9f5ee] border-b border-[#222222]/10 sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo/2 Logo VibeApps poziom bez tła.png" 
                alt="VibeApps" 
                width={180} 
                height={48}
                priority
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('#mvp-comparison-section')}
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                Jak działamy
              </button>
              <button
                onClick={() => scrollToSection('#mvp-process-section')}
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                Proces współpracy
              </button>
              <button
                onClick={() => scrollToSection('#case-study-section')}
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                Case study
              </button>
              <button 
                onClick={() => scrollToSection('#what-sets-us-apart-section')}
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                Co nas wyróżnia
              </button>
              <Button 
                className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90"
                data-tally-open="3jXqpR"
                data-tally-layout="modal"
                data-tally-width="850"
                data-tally-emoji-text="👋"
                data-tally-emoji-animation="wave"
              >
                Bezpłatna konsultacja
              </Button>
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
            <button
              onClick={() => scrollToSection('#mvp-comparison-section')}
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer"
            >
              Jak działamy
            </button>
            <button
              onClick={() => scrollToSection('#mvp-process-section')}
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer"
            >
              Proces współpracy
            </button>
            <button
              onClick={() => scrollToSection('#case-study-section')}
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer"
            >
              Case study
            </button>
            <button
              onClick={() => scrollToSection('#what-sets-us-apart-section')}
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer"
            >
              Co nas wyróżnia
            </button>
            <Button 
              className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90 w-full mt-2"
              data-tally-open="3jXqpR"
              data-tally-layout="modal"
              data-tally-width="850"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
            >
              Bezpłatna konsultacja
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
} 