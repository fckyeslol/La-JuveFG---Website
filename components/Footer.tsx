export default function Footer() {
  return (
    <footer className="container-shell px-4 md:px-8 pb-8">
      <div className="max-w-7xl mx-auto glass rounded-[2rem] p-8 md:p-10">
        <div className="footer-grid">
          <div>
            <h3 className="text-3xl font-extrabold gradient-text">La JuveFG</h3>
            <p className="mt-4 text-slate-600 leading-7 max-w-md">
              Una plataforma juvenil que impulsa liderazgo, servicio social,
              participación comunitaria y oportunidades reales para transformar
              el territorio desde la energía de los jóvenes.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-lg">Contacto</h4>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>📍 Atlántico, Colombia</li>
              <li>✉️ mateopirela08@gmail.com</li>
              <li>📞 +57 311 7409232</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold text-lg">Redes</h4>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a className="btn-secondary" href="https://www.instagram.com/lajuvefg/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 text-sm text-slate-500">
          © {new Date().getFullYear()} La JuveFG. Juventud que lidera, conecta y transforma.
        </div>
      </div>
    </footer>
  );
}