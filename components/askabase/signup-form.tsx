"use client"

import { useState } from "react"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function AskabaseSignupForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit() {
    if (!isValidEmail(email)) {
      setError("Podaj poprawny adres e-mail.")
      return
    }

    setError("")
    setSubmitted(true)
    document.getElementById("successView")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  if (submitted) {
    return (
      <div className="success show" id="successView">
        <div className="check">
          <svg viewBox="0 0 24 24">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2>Dziękujemy!</h2>
        <p>
          Twoje zgłoszenie zostało przyjęte. Odezwiemy się w ciągu kilku dni
          roboczych, aby omówić wdrożenie Askabase w Twoim biurze.
        </p>
      </div>
    )
  }

  return (
    <div id="formView">
      <span className="eyebrow">
        <span className="ln" />
        Zgłoszenia chętnych
        <span className="ln" />
      </span>
      <h2>Porozmawiajmy o wdrożeniu</h2>
      <p>
        Askabase działa — wdrażamy go u biur rachunkowych. Zostaw kontakt, a
        skontaktujemy się, aby omówić implementację u Ciebie.
      </p>
      <div className="field">
        <label htmlFor="name">
          Imię i nazwisko / nazwa biura{" "}
          <span style={{ color: "var(--muted-2)", fontWeight: 400 }}>
            (opcjonalnie)
          </span>
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="np. Jan Kowalski — Biuro Rachunkowe"
        />
      </div>
      <div className="field">
        <label htmlFor="email">Adres e-mail</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError("")
          }}
          placeholder="twoj@email.pl"
          autoComplete="email"
        />
      </div>
      <div className="err" id="err">
        {error}
      </div>
      <button
        className="btn btn-primary"
        id="submitBtn"
        type="button"
        onClick={handleSubmit}
      >
        Skontaktuj się
      </button>
      <p className="privacy">
        Wysyłając zgłoszenie, zgadzasz się na kontakt w sprawie wdrożenia
        Askabase.
      </p>
    </div>
  )
}
