import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VolunteerForm from '../components/VolunteerForm';

export default function Inscripcion() {
  return (
    <>
      <Head>
        <title>Inscripción de voluntarios | La JuveFG</title>
        <meta
          name="description"
          content="Regístrate como voluntario en La JuveFG y participa en iniciativas de impacto juvenil."
        />
      </Head>

      <Navbar />

      <main className="container-shell">
        <section className="section pt-36">
          <div className="max-w-7xl mx-auto volunteer-layout items-start">
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <span className="section-kicker">Voluntariado</span>

              <h1 className="text-4xl md:text-6xl font-extrabold gradient-text leading-[0.95]">
                Tu talento también puede servir
              </h1>

              <p className="mt-6 volunteer-side-text">
                Al unirte a La JuveFG podrás participar en actividades comunitarias,
                formación en liderazgo y procesos que conectan a jóvenes con propósito.
              </p>

              <p className="mt-4 text-[#4f6279] text-sm leading-7 border-l-4 border-[#163d73] pl-4">
                Para la inscripción necesitarás indicar el número de{' '}
                <strong>tarjeta de identidad</strong> o de <strong>cédula de ciudadanía</strong>{' '}
                (según corresponda a tu edad).
              </p>

              <div className="mt-8 space-y-4">
                <div className="benefit-card">
                  <p>Desarrollo de liderazgo, organización y trabajo en equipo.</p>
                </div>

                <div className="benefit-card">
                  <p>Red de jóvenes comprometidos con transformar su territorio.</p>
                </div>

                <div className="benefit-card">
                  <p>Participación en acciones sociales, culturales, educativas y deportivas.</p>
                </div>
              </div>
            </div>

            <VolunteerForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}