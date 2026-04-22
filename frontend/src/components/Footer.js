import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="border-t border-white/10 py-12 text-center"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
        <Link
          to="/"
          className="font-heading font-black text-xl tracking-[0.18em] text-white neon-text-white"
        >
          ZNNK<span className="text-[#ff007f]">.</span>STUDIO
        </Link>

        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.25em] font-body font-semibold">
          <a href="#o-nas" data-testid="footer-link-o-nas" className="text-zinc-400 hover:text-[#00f0ff] transition-colors">
            O nas
          </a>
          <a href="#kolekcja" data-testid="footer-link-kolekcja" className="text-zinc-400 hover:text-[#00f0ff] transition-colors">
            Kolekcja
          </a>
          <a href="#kontakt" data-testid="footer-link-kontakt" className="text-zinc-400 hover:text-[#00f0ff] transition-colors">
            Kontakt
          </a>
          <Link to="/regulamin" data-testid="footer-link-terms" className="text-zinc-400 hover:text-[#00f0ff] transition-colors">
            Regulamin
          </Link>
          <Link to="/polityka-prywatnosci" data-testid="footer-link-privacy" className="text-zinc-400 hover:text-[#00f0ff] transition-colors">
            Polityka prywatności
          </Link>
        </nav>

        <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-600 font-body">
          © {new Date().getFullYear()} ZNNK Studio. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
};
