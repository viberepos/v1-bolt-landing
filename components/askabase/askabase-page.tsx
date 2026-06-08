import Image from "next/image"
import { AskabaseSignupForm } from "./signup-form"
import { AskabaseScreenshotsCarousel } from "./screenshots-carousel"

export function AskabasePage() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top">
            <Image
              src="/images/askabase/logo.png"
              alt="Askabase"
              width={480}
              height={192}
              priority
            />
          </a>
          <nav className="nav-actions">
            <a className="nav-link hide-sm" href="#jak">
              Jak to działa
            </a>
            <a className="nav-link hide-sm" href="#korzysci">
              Korzyści
            </a>
            <a className="btn btn-primary" href="#zapisz">
              Skontaktuj się
            </a>
          </nav>
        </div>
      </header>

      <a id="top" />

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow reveal d1">
              <span className="ln" />
              Asystent AI dla biur rachunkowych
              <span className="ln" />
            </span>
            <h1 className="reveal d2">Zapytaj swoją bazę danych po ludzku.</h1>
            <p className="lead reveal d3">
              Askabase to asystent AI, który odpowiada na pytania o Twoje dane,
              dokumenty i terminy w naturalnym języku. Bez SQL, bez ręcznego
              przeszukiwania raportów.
            </p>
            <div className="hero-cta reveal d4">
              <a className="btn btn-primary" href="#zapisz">
                Skontaktuj się
              </a>
              <a className="btn btn-ghost" href="#jak">
                Zobacz, jak działa
              </a>
            </div>
            <p className="hero-note reveal d5">
              System jest gotowy — wdrażamy go u biur rachunkowych. Zgłoś się,
              aby omówić implementację w Twojej firmie.
            </p>
          </div>

          <div className="mock reveal d4">
            <span className="mock-tag">Przykład</span>
            <div className="mock-head">
              <span className="ico">
                <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="6" rx="7" ry="3" />
                  <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
                  <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
                </svg>
              </span>
              <span>Askabase</span>
            </div>
            <div className="bubble q">
              Który klient w ostatnim kwartale wygenerował najwyższy zysk?
            </div>
            <div className="bubble a">
              Najwyższy zysk w ostatnim kwartale wygenerował klient{" "}
              <b>Przykładowa Sp. z o.o.</b> — analizuję dane z bazy i
              przygotowuję zestawienie…
            </div>
            <div className="bubble a">
              <span className="typing">
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="jak">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              Jak to działa
              <span className="ln" />
            </span>
            <h2>Trzy kroki od pytania do odpowiedzi</h2>
            <p>
              Nie musisz znać struktury danych ani języka zapytań. Po prostu
              pytasz.
            </p>
          </div>
          <div className="steps">
            <div className="step reveal d1">
              <div className="num">1</div>
              <h3>Zadajesz pytanie</h3>
              <p>
                Wpisujesz pytanie w naturalnym języku — tak, jak zapytałbyś
                współpracownika.
              </p>
            </div>
            <div className="step reveal d2">
              <div className="num">2</div>
              <h3>Askabase analizuje dane</h3>
              <p>
                System rozpoznaje intencję pytania i przeszukuje odpowiednią
                bazę danych.
              </p>
            </div>
            <div className="step reveal d3">
              <div className="num">3</div>
              <h3>Otrzymujesz odpowiedź</h3>
              <p>
                Wynik wraca w czytelnej, gotowej do użycia formie — bez ręcznego
                raportowania.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="korzysci" className="gray">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">
              <span className="ln" />
              Korzyści
              <span className="ln" />
            </span>
            <h2>Po co Ci Askabase?</h2>
          </div>
          <div className="cards">
            <div className="card reveal d1">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h3>Bez wiedzy technicznej</h3>
                <p>
                  Interfejs oparty na rozmowie. Nie potrzebujesz znajomości SQL
                  ani struktury danych w firmie.
                </p>
              </div>
            </div>
            <div className="card reveal d2">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <div>
                <h3>Szybszy dostęp do informacji</h3>
                <p>
                  Odpowiedzi pojawiają się niemal natychmiast — bez
                  przekopywania się przez raporty.
                </p>
              </div>
            </div>
            <div className="card reveal d3">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <div>
                <h3>Mniej błędów</h3>
                <p>
                  Automatyzacja wyszukiwania danych ogranicza ryzyko pomyłek
                  przy ręcznej analizie.
                </p>
              </div>
            </div>
            <div className="card reveal d4">
              <div className="ic">
                <svg viewBox="0 0 24 24">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z" />
                  <path d="M13.7 21a2 2 0 0 1-3.4 0" />
                </svg>
              </div>
              <div>
                <h3>Kontekstowa pomoc</h3>
                <p>
                  Wsparcie dopasowane do roli użytkownika oraz przypomnienia o
                  terminach i deklaracjach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="aud-box reveal d1">
            <span
              className="eyebrow"
              style={{ justifyContent: "center", marginBottom: 16 }}
            >
              <span className="ln" />
              Dla kogo
              <span className="ln" />
            </span>
            <h2>Stworzony z myślą o biurach rachunkowych</h2>
            <p>
              Askabase wspiera codzienną pracę zespołu — szczególnie kadrę
              menedżerską i starszych księgowych, którzy potrzebują szybkiego
              dostępu do danych przy podejmowaniu decyzji.
            </p>
            <div className="chips">
              <span className="chip">Biura rachunkowe</span>
              <span className="chip">Kadra menedżerska</span>
              <span className="chip">Starsi księgowi</span>
            </div>
          </div>
        </div>
      </section>

      <section className="signup gray" id="zapisz">
        <div className="wrap">
          <div className="form-card">
            <AskabaseSignupForm />
          </div>
        </div>
      </section>

      <AskabaseScreenshotsCarousel />

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div>
              <Image
                src="/images/askabase/logo.png"
                alt="Askabase"
                width={480}
                height={192}
                className="h-6 w-auto"
              />
              <p className="tag">
                Asystent AI, który pozwala rozmawiać z danymi w naturalnym
                języku.
              </p>
            </div>
            <div className="foot-contact">
              <div className="lbl">Kontakt</div>
              <a href="mailto:hi.askabase@gmail.com">hi.askabase@gmail.com</a>
              <p>BEC Group Sp. z o.o.</p>
            </div>
          </div>

          <div className="eu">
            <h4>Projekt współfinansowany ze środków Unii Europejskiej</h4>
            <div className="logos">
              <Image
                src="https://bec-group.pl/wp-content/uploads/2025/11/askabase-fundusze-europejskie-scaled.jpg"
                alt="Fundusze Europejskie"
                width={600}
                height={54}
                unoptimized
              />
            </div>
            <p className="desc">
              Projekt <b>„Askabase”</b> realizowany przez{" "}
              <b>BEC Group Sp. z o.o.</b> otrzymał wsparcie finansowe z Unii
              Europejskiej w ramach Programu akceleracyjnego{" "}
              <b>„Kozminski Impact Booster”</b>, Priorytet II. Środowisko
              sprzyjające innowacjom, Fundusze Europejskie dla Nowoczesnej
              Gospodarki (nr FENG.02.28-IP.02-0027/23).
              <br />
              <br />
              <b>Cel projektu:</b> opracowanie i wdrożenie asystenta AI, który
              umożliwia zadawanie pytań do baz danych w języku naturalnym i
              otrzymywanie czytelnych odpowiedzi bez potrzeby znajomości SQL.{" "}
              <b>Działania:</b> analiza procesów i infrastruktury odbiorcy
              technologii, prace programistyczne nad wdrożeniem rozwiązania
              oraz jego uruchomienie i testy funkcjonalne.{" "}
              <b>Grupa docelowa:</b> biura rachunkowe, w szczególności kadra
              menedżerska i starsi księgowi. <b>Efekty:</b> narzędzie
              skracające czas dostępu do informacji, ograniczające ryzyko błędów
              i obniżające próg wejścia dzięki interfejsowi konwersacyjnemu.
            </p>
            <div className="grid">
              <div>
                <b>Wartość projektu (łączny koszt):</b> 350 000,00 zł
              </div>
              <div>
                <b>Wysokość wkładu Funduszy Europejskich:</b> 350 000,00 zł
              </div>
            </div>
          </div>

          <p className="copyright">
            © {year} BEC Group Sp. z o.o. · Askabase. Wszelkie prawa
            zastrzeżone.
          </p>
        </div>
      </footer>
    </>
  )
}
