"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"

const SCREENSHOTS = [
  {
    src: "/images/askabase/screenshots/screenshot-01.png",
    alt: "Ekran logowania platformy Admitu",
  },
  {
    src: "/images/askabase/screenshots/screenshot-02.png",
    alt: "Panel zadań z filtrami w systemie zarządzania biurem",
  },
  {
    src: "/images/askabase/screenshots/screenshot-03.png",
    alt: "Wybór asystenta Askabase w panelu zadań",
  },
  {
    src: "/images/askabase/screenshots/screenshot-04.png",
    alt: "Asystent BrAI doradza w wyborze formy działalności dla klienta",
  },
  {
    src: "/images/askabase/screenshots/screenshot-05.png",
    alt: "Okno generowania podsumowania zadań w Askabase",
  },
  {
    src: "/images/askabase/screenshots/screenshot-06.png",
    alt: "Podsumowanie zadań klienta wygenerowane przez Askabase",
  },
  {
    src: "/images/askabase/screenshots/screenshot-07.png",
    alt: "Rozmowa z Askabase o klientach biura rachunkowego",
  },
  {
    src: "/images/askabase/screenshots/screenshot-08.png",
    alt: "Asystent BrAI pomaga w wyborze formy działalności",
  },
  {
    src: "/images/askabase/screenshots/screenshot-09.png",
    alt: "Panel wątków rozmów z asystentem Askabase",
  },
] as const

export function AskabaseScreenshotsCarousel() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxAlt, setLightboxAlt] = useState("")
  const loopItems = [...SCREENSHOTS, ...SCREENSHOTS]

  function openLightbox(src: string, alt: string) {
    setLightboxSrc(src)
    setLightboxAlt(alt)
  }

  return (
    <>
      <section className="screenshots">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              Produkt w działaniu
              <span className="ln" />
            </span>
            <h2>Zobacz Askabase w praktyce</h2>
            <p>
              Kliknij zdjęcie, aby je powiększyć. System już pracuje w biurach
              rachunkowych.
            </p>
          </div>
        </div>

        <div className="carousel-viewport">
          <div className="carousel-track">
            {loopItems.map((shot, index) => (
              <button
                key={`${shot.src}-${index}`}
                type="button"
                className="carousel-slide"
                onClick={() => openLightbox(shot.src, shot.alt)}
                aria-label={`Powiększ: ${shot.alt}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={640}
                  height={400}
                  className="carousel-image"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={lightboxSrc !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxSrc(null)
        }}
      >
        <DialogContent className="askabase-lightbox sm:max-w-[min(96vw,1200px)] max-h-[92vh] overflow-auto p-2 sm:p-4 border-0 bg-black/95">
          <DialogTitle className="sr-only">{lightboxAlt}</DialogTitle>
          {lightboxSrc && (
            <Image
              src={lightboxSrc}
              alt={lightboxAlt}
              width={1400}
              height={900}
              className="w-full h-auto rounded-md"
              unoptimized
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
