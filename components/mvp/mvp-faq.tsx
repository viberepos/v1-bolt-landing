export function MVPFAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f9f5ee]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#222222]">
              Najczęściej zadawane pytania
            </h2>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-[#222222]">Czy MVP to okrojona wersja mojej aplikacji?</h3>
              <p className="text-[#222222]/70">
                Nie! MVP to inteligentnie zaprojektowana wersja, która testuje najważniejsze założenia biznesowe przy
                minimalnym koszcie i czasie. Zawiera tylko te funkcje, które są kluczowe do walidacji pomysłu.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-[#222222]">Co jeśli MVP pokaże, że mój pomysł nie ma sensu?</h3>
              <p className="text-[#222222]/70">
                To jest najlepsza możliwa sytuacja! Zaoszczędzasz dziesiątki tysięcy złotych i miesięcy pracy.
                Dodatkowo pomagamy zidentyfikować, co można zmienić (pivot) lub jak dostosować pomysł do rzeczywistych
                potrzeb.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-[#222222]">Ile osób będzie testować moje MVP?</h3>
              <p className="text-[#222222]/70">
                Zależy od specyfiki produktu, ale zazwyczaj 15-200 osób. Ważniejsza od liczby jest jakość feedbacku i
                reprezentatywność grupy testowej dla Twojego docelowego rynku.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-[#222222]">Czy mogę dalej rozwijać MVP w pełną aplikację?</h3>
              <p className="text-[#222222]/70">
                Absolutnie! MVP jest zbudowane z myślą o dalszym rozwoju. Przekazujemy Ci kod, dokumentację i roadmapę
                rozwoju. Możesz kontynuować z nami lub z innym zespołem.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-[#222222]">Jakie technologie używacie?</h3>
              <p className="text-[#222222]/70">
                Wybieramy technologie pod konkretny projekt: React/Next.js dla web, React Native dla mobile, Node.js
                lub Python na backend. Zawsze nowoczesne, skalowalne rozwiązania.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-[#222222]">Co jeśli potrzebuję zmiany w trakcie tworzenia MVP?</h3>
              <p className="text-[#222222]/70">
                Małe zmiany są wliczone w cenę. Większe modyfikacje wyceniamy osobno, ale zawsze transparentnie i z
                uzasadnieniem biznesowym.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 