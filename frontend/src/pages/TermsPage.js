import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <main data-testid="terms-page" className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.3em] text-[#00f0ff] hover:text-white font-body font-semibold"
        >
          ← Powrót
        </Link>
        <h1 className="mt-6 font-heading font-black text-4xl sm:text-5xl tracking-tighter text-white">
          Regulamin
        </h1>
        <div className="mt-10 space-y-6 text-zinc-300 font-body leading-relaxed">
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">1. Postanowienia ogólne</h2>
            <p>
              Sklep internetowy ZNNK Studio, dostępny pod adresem tej strony, prowadzony jest przez
              markę ZNNK Studio. Kontakt: <a className="text-[#00f0ff] hover:underline" href="mailto:znnkstudio.gm@gmail.com">znnkstudio.gm@gmail.com</a>.
            </p>
          </section>
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">2. Zamówienia i płatności</h2>
            <p>
              Zamówienia są realizowane za pośrednictwem platformy Shopify. Wszystkie płatności
              obsługuje bezpieczny proces płatności Shopify. Ceny podane w sklepie są cenami
              brutto i są wyświetlane w walucie odpowiedniej dla lokalizacji użytkownika.
            </p>
          </section>
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">3. Zwroty i reklamacje</h2>
            <p>
              Produkty ZNNK Studio wytwarzane są na zamówienie (made-to-order). Z uwagi na
              charakter limitowanej produkcji zwroty możliwe są wyłącznie w przypadku produktów
              uszkodzonych lub wadliwych. W takiej sytuacji koszt zwrotu pokrywa sklep. W pozostałych
              przypadkach zwroty nie są przyjmowane. Reklamacje prosimy zgłaszać na adres
              <a className="text-[#00f0ff] hover:underline ml-1" href="mailto:znnkstudio.gm@gmail.com">znnkstudio.gm@gmail.com</a>
              wraz z numerem zamówienia i dokumentacją wady.
            </p>
          </section>
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">4. Prawa autorskie</h2>
            <p>
              Wszystkie projekty, grafiki i materiały wizualne prezentowane w sklepie są własnością
              ZNNK Studio. Kopiowanie, powielanie lub komercyjne wykorzystywanie bez zgody jest
              zabronione.
            </p>
          </section>
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">5. Postanowienia końcowe</h2>
            <p>
              W sprawach nieuregulowanych niniejszym regulaminem obowiązują przepisy prawa polskiego.
              Zastrzegamy sobie prawo do wprowadzania zmian w regulaminie.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
