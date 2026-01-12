"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

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
          <div className="flex items-center gap-3">
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
            <button
              type="button"
              onClick={() => setIsDialogOpen(true)}
              className="flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer p-1 min-w-[32px] min-h-[32px]"
              aria-label="Informacje o dofinansowaniu z Unii Europejskiej"
            >
              <Image 
                src="/images/logo/Dotacja2.png" 
                alt="Dofinansowano z Unii Europejskiej" 
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('#service-packages-section')}
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection('#cost-calculator-section')}
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                Policz koszty
              </button>
              <button
                onClick={() => scrollToSection('#case-study-section')}
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                Aplikacja dla branży finansowej
              </button>
              <button 
                onClick={() => scrollToSection('#what-sets-us-apart-section')}
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                O nas
              </button>
              <Link
                href="/"
                className="text-[#222222] hover:text-[#222222]/70 px-3 py-2 text-sm font-medium"
              >
                Szybkie MVP
              </Link>
              <Button 
                className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90"
                data-tally-open="wMqZ70"
                data-tally-layout="modal"
                data-tally-width="1000"
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
              onClick={() => scrollToSection('#service-packages-section')}
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection('#cost-calculator-section')}
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer"
            >
              Policz koszty
            </button>
            <button
              onClick={() => scrollToSection('#case-study-section')}
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer"
            >
              Aplikacja dla branży finansowej
            </button>
            <button
              onClick={() => scrollToSection('#what-sets-us-apart-section')}
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left bg-transparent border-none cursor-pointer"
            >
              O nas
            </button>
            <Link
              href="/"
              className="text-[#222222] hover:text-[#222222]/70 block px-3 py-2 text-base font-medium w-full text-left"
              onClick={() => setIsOpen(false)}
            >
              Szybkie MVP
            </Link>
            <Button 
              className="bg-[#222222] text-[#f9f5ee] hover:bg-[#222222]/90 w-full mt-2"
              data-tally-open="wMqZ70"
              data-tally-layout="modal"
              data-tally-width="1000"
              data-tally-emoji-text="👋"
              data-tally-emoji-animation="wave"
            >
              Bezpłatna konsultacja
            </Button>
          </div>
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Dofinansowanie projektu z Unii Europejskiej</DialogTitle>
            <DialogDescription>
              Informacje o projekcie realizowanym w ramach funduszy europejskich
            </DialogDescription>
          </DialogHeader>
          <div className="pt-0 pb-4">
            <div className="flex flex-col items-center gap-4 mb-3 -mt-2">
              <Image
                src="https://bec-group.pl/wp-content/uploads/2025/11/askabase-fundusze-europejskie-scaled.jpg"
                alt="Fundusze Europejskie"
                width={0}
                height={100}
                className="h-[100px] w-auto object-contain"
                unoptimized
              />
            </div>
            <div className="space-y-4 text-left">
              <h3 className="text-[#222222] text-lg font-semibold">
                Projekt „Askabase"
              </h3>
              <p className="text-[#222222] text-sm leading-relaxed">
                Projekt „Askabase" jest współfinansowany ze środków Unii Europejskiej w ramach programu Fundusze Europejskie dla Nowoczesnej Gospodarki (FENG), Priorytet II – Środowisko sprzyjające innowacjom (akcelerator Kozminski Impact Booster).
              </p>
              <p className="text-[#222222] text-sm leading-relaxed">
                Celem projektu jest stworzenie innowacyjnego, inteligentnego asystenta dla biur rachunkowych, opartego na zaawansowanych rozwiązaniach programistycznych. System ma na celu rewolucję w codziennej pracy z danymi, umożliwiając skrócenie czasu wyszukiwania informacji o kontrahentach, analizy dokumentacji oraz przygotowywania podsumowań z godzin do zaledwie kilku sekund. Rozwiązanie dedykowane jest właścicielom, managerom oraz pracownikom biur rachunkowych, realnie wpływając na oszczędność czasu i wyższą efektywność pracy.
              </p>
              <div className="space-y-2 pt-2 border-t border-[#222222]/10">
                <p className="text-[#222222] text-sm">
                  <span className="font-semibold">Wartość projektu:</span> 350 000,00 zł
                </p>
                <p className="text-[#222222] text-sm">
                  <span className="font-semibold">Wysokość wkładu Funduszy Europejskich:</span> 350 000,00 zł
                </p>
              </div>
              <div className="pt-2 border-t border-[#222222]/10">
                <p className="text-[#222222] text-xs text-[#222222]/70">
                  #FunduszeEuropejskie #FunduszeEU #KozminskiImpactBooster #Askabase #AI #NowoczesnaKsięgowość #FENG
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  )
} 