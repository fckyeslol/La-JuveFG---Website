import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container-shell fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 pt-4">
        <div className="bg-white border border-slate-200 rounded-full px-6 py-4 flex items-center justify-between shadow-[0_12px_35px_rgba(15,43,82,0.06)]">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="La JuveFG" className="h-20 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#quienes-somos" className="nav-link">Quiénes somos</a>
            <a href="#mision" className="nav-link">Misión</a>
            <a href="#vision" className="nav-link">Visión</a>
            <a href="#lineas-accion" className="nav-link">Líneas de acción</a>
            <a href="#eventos" className="nav-link">Momentos</a>
            <a href="#aliados" className="nav-link">Aliados</a>
            <Link href="/inscripcion" className="btn-primary">
              Únete como voluntario
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800 text-2xl"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="mt-3 bg-white border border-slate-200 rounded-3xl p-5 md:hidden flex flex-col gap-4 text-slate-800 shadow-[0_12px_35px_rgba(15,43,82,0.08)]">
            <a href="#quienes-somos" onClick={() => setIsOpen(false)}>Quiénes somos</a>
            <a href="#mision" onClick={() => setIsOpen(false)}>Misión</a>
            <a href="#vision" onClick={() => setIsOpen(false)}>Visión</a>
            <a href="#lineas-accion" onClick={() => setIsOpen(false)}>Líneas de acción</a>
            <a href="#eventos" onClick={() => setIsOpen(false)}>Momentos</a>
            <a href="#aliados" onClick={() => setIsOpen(false)}>Aliados</a>
            <Link href="/inscripcion" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
              Únete como voluntario
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}