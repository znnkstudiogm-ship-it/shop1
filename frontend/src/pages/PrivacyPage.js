import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <main data-testid="privacy-page" className="pt-24 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          to="/"
          className="text-xs uppercase tracking-[0.3em] text-[#00f0ff] hover:text-white font-body font-semibold"
        >
          ← Powrót
        </Link>
        <h1 className="mt-6 font-heading font-black text-4xl sm:text-5xl tracking-tighter text-white">
          Polityka prywatności
        </h1>
        <div className="mt-10 space-y-6 text-zinc-300 font-body leading-relaxed">
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">1. Administrator danych</h2>
            <p>
              Administratorem Twoich danych osobowych jest ZNNK Studio. Kontakt:
              <a className="text-[#00f0ff] hover:underline ml-1" href="mailto:znnkstudio.gm@gmail.com">znnkstudio.gm@gmail.com</a>.
            </p>
          </section>
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">2. Jakie dane zbieramy</h2>
            <p>
              Zbieramy dane niezbędne do realizacji zamówienia (imię, nazwisko, adres wysyłki,
              e-mail, telefon) oraz — za zgodą — adres e-mail w celu wysyłki newslettera. Dane
              transakcyjne przetwarzane są przez Shopify.
            </p>
          </section>
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">3. Cele przetwarzania</h2>
            <p>
              Dane wykorzystywane są wyłącznie do realizacji zamówień, obsługi reklamacji oraz —
              opcjonalnie — do wysyłki informacji marketingowych. Nie udostępniamy danych osobom
              trzecim poza podmiotami niezbędnymi do realizacji wysyłki i płatności.
            </p>
          </section>
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">4. Pliki cookies</h2>
            <p>
              Strona korzysta z plików cookies w celu prawidłowego działania sklepu, analizy ruchu
              oraz integracji ze Shopify. Możesz zarządzać plikami cookies w ustawieniach swojej
              przeglądarki.
            </p>
          </section>
          <section>
            <h2 className="font-heading font-bold text-xl text-white mb-3">5. Twoje prawa</h2>
            <p>
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
              przetwarzania oraz wniesienia sprzeciwu. W celu skorzystania z tych praw napisz na
              adres <a className="text-[#00f0ff] hover:underline" href="mailto:znnkstudio.gm@gmail.com">znnkstudio.gm@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
