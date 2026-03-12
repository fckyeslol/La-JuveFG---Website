import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import ImpactCounter from '../components/ImpactCounter';
import TestimonialCard from '../components/TestimonialCard';
import ActionCard from '../components/ActionCard';
import PartnerCard from '../components/PartnerCard';
import HeroVideo from '../components/HeroVideo';

export default function Home() {
  return (
    <>
      <Head>
        <title>La JuveFG | Liderazgo juvenil con impacto</title>
        <meta
          name="description"
          content="La JuveFG forma, conecta y moviliza jóvenes para convertirse en agentes de cambio en sus comunidades."
        />
      </Head>

      <Navbar />

      <main className="container-shell">
        <section className="section hero-section">
  <div className="max-w-7xl mx-auto hero-grid">
    <div className="hero-copy">

      <h1 className="hero-title">
        Una nueva generación de líderes para el Atlántico
      </h1>

      <p className="hero-text">
        En La JuveFG formamos, conectamos y movilizamos jóvenes con propósito,
        visión social y energía comunitaria para convertir ideas en impacto real.
      </p>

      <div className="hero-actions">
        <a href="/inscripcion" className="btn-primary">
          Quiero ser voluntario
        </a>
        <a href="#quienes-somos" className="btn-secondary">
          Conocer la iniciativa
        </a>
      </div>

      <div className="hero-stats">
        <ImpactCounter end={1500} label="jóvenes meta en la red" suffix="+" />
        <ImpactCounter end={15} label="municipios objetivo" />
        <ImpactCounter end={2030} label="visión de consolidación" />
      </div>
    </div>

    <HeroVideo />
  </div>
</section>

        <section id="quienes-somos" className="section section-block">
  <div className="content-wrap">
    <span className="section-kicker">Quiénes somos</span>
    <h2 className="section-title">Una plataforma juvenil con propósito humano</h2>
    <p className="intro-text">
      La JuveFG es una plataforma juvenil que impulsa liderazgo, servicio social,
      participación comunitaria y formación de jóvenes líderes. Creamos espacios
      donde las ideas de la juventud se convierten en acciones concretas para fortalecer
      el tejido social, la identidad territorial y el bienestar colectivo.
    </p>

    <div className="feature-grid">
      <div className="feature-card">
        <h3 className="feature-title">Liderazgo</h3>
        <p className="feature-text">
          Desarrollamos jóvenes con visión, criterio y capacidad de movilizar procesos sociales.
        </p>
      </div>

      <div className="feature-card">
        <h3 className="feature-title">Participación</h3>
        <p className="feature-text">
          Promovemos ciudadanía activa, corresponsabilidad y presencia real en las comunidades.
        </p>
      </div>

      <div className="feature-card">
        <h3 className="feature-title">Transformación</h3>
        <p className="feature-text">
          Convertimos energía juvenil en proyectos sociales con impacto visible y sostenible.
        </p>
      </div>
    </div>
  </div>
</section>

       <section id="mision" className="section section-block section-alt">
  <div className="content-wrap">
    <div className="split-grid">
      <article className="statement-card">
        <span className="section-kicker">Misión</span>
        <h2 className="statement-title">Formar, conectar y movilizar</h2>
        <p className="statement-text">
          La JuveFG tiene como misión formar, conectar y movilizar a jóvenes para que se conviertan
          en agentes de cambio en sus comunidades, promoviendo liderazgo, participación social
          y compromiso con el desarrollo del territorio.
        </p>
      </article>

      <article className="statement-card">
        <span className="section-kicker">Cómo lo hacemos</span>
        <p className="statement-text">
          Impulsamos espacios donde los mismos jóvenes lideran iniciativas con impacto positivo
          en cultura, servicio social, educación y deporte. Creemos en el liderazgo con propósito,
          en el trabajo en equipo y en la capacidad de transformar realidades desde los propios territorios.
        </p>
      </article>
    </div>
  </div>
</section>

        <section id="vision" className="section section-block">
  <div className="content-wrap">
    <div className="vision-panel">
      <span className="section-kicker">Visión 2030</span>
      <h2 className="section-title">Una red sólida de jóvenes líderes en todo el departamento</h2>
      <p className="intro-text">
        Para 2030, La JuveFG busca consolidarse como una de las principales plataformas de liderazgo juvenil
        del Atlántico, conectando a miles de jóvenes comprometidos con el desarrollo social, cultural,
        educativo y deportivo de sus comunidades. Aspiramos a una red fuerte, territorial y activa.
      </p>
    </div>
  </div>
</section>

        <section id="lineas-accion" className="section section-block section-alt">
  <div className="content-wrap">
    <span className="section-kicker">Líneas de acción</span>
    <h2 className="section-title">Así construimos impacto</h2>
    <p className="intro-text">
      Nuestro trabajo se mueve en frentes que conectan a los jóvenes con oportunidades,
      experiencias significativas y acciones de transformación social.
    </p>

    <div className="feature-grid-4">
      <ActionCard
        icon="🎭"
        title="Cultura"
        description="Impulsamos expresiones artísticas, identidad local y apropiación del territorio desde la creatividad juvenil."
      />
      <ActionCard
        icon="🤝"
        title="Servicio social"
        description="Promovemos jornadas solidarias, trabajo comunitario y acciones que fortalecen el tejido social."
      />
      <ActionCard
        icon="📚"
        title="Educación"
        description="Creamos espacios formativos en liderazgo, ciudadanía, habilidades blandas y organización juvenil."
      />
      <ActionCard
        icon="⚽"
        title="Deporte"
        description="Usamos el deporte como herramienta de integración, disciplina, salud y convivencia."
      />
    </div>
  </div>
</section>

        <section id="eventos" className="section">
          <div className="max-w-7xl mx-auto">
            <span className="section-kicker">Momentos que inspiran</span>
            <h2 className="section-title">Así se vive La JuveFG</h2>
            <p className="section-subtitle mb-10">
              Más que eventos, son experiencias donde la juventud conecta, participa y transforma.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <VideoCard
                src="/images/interact.mp4"
                description="Jóvenes participando activamente en espacios de impacto comunitario."
              />
              <VideoCard
                src="/images/Bazar.mp4"
                description="Los jovenes nos demostraron nuevamente el poder transformador que tiene el arte, con el ‘Bazar Champetero’."
              />
              <VideoCard
                src="/images/campeones.mp4"
                description="Hoy nuestros campeones pisaron el Estadio Edgar Rentería y vivieron lo que es soñar en grande"
              />
              <VideoCard
                src="/images/navidad.mp4"
                description="Desde La Pradera, realizamos una entrega de regalos llena de esperanza y sonrisas."
              />
            </div>
          </div>
        </section>

       <section id="testimonios" className="section section-block">
  <div className="content-wrap">
    <span className="section-kicker">Voces de la red</span>
    <h2 className="section-title">Lo que significa hacer parte</h2>
    <p className="intro-text">
      La experiencia de La JuveFG se vive desde la participación, la conexión y el crecimiento personal.
    </p>

    <div className="testimonial-grid">
      <TestimonialCard
        name="María Fernanda R."
        role="Participante juvenil"
        text="La JuveFG me permitió descubrir que sí podía liderar procesos en mi comunidad. No solo participé, también aprendí a organizar y proponer."
      />
      <TestimonialCard
        name="Luis Carlos P."
        role="Voluntario"
        text="Encontré un espacio donde la juventud sí tiene voz. Aquí las ideas se convierten en acciones y eso cambia la forma en que vemos nuestro territorio."
      />
      <TestimonialCard
        name="Daniela V."
        role="Líder comunitaria"
        text="La plataforma conecta jóvenes con propósito. He visto cómo se fortalecen equipos, surgen propuestas y crece la participación real."
      />
    </div>
  </div>
</section>

       <section id="aliados" className="section section-block section-alt">
  <div className="content-wrap">
    <span className="section-kicker">Aliados y articulación</span>
    <h2 className="section-title">También construimos en equipo</h2>
    <p className="intro-text">
      La JuveFG puede articular esfuerzos con organizaciones, empresas, instituciones educativas
      y actores públicos que compartan una visión de desarrollo juvenil y comunitario.
    </p>

    <div className="partner-grid">
      <PartnerCard
        title="Empresas"
        description="Activamos voluntariado corporativo, jornadas conjuntas y oportunidades de apoyo a iniciativas juveniles."
      />
      <PartnerCard
        title="Instituciones educativas"
        description="Creamos espacios de formación, liderazgo, participación y experiencias de servicio para estudiantes."
      />
      <PartnerCard
        title="Sector público y fundaciones"
        description="Desarrollamos acciones articuladas con enfoque territorial, inclusión y fortalecimiento comunitario."
      />
    </div>

    <div className="ally-cta">
      <h3>¿Quieres sumar tu organización a esta red de impacto?</h3>
      <p>
        Podemos construir convocatorias, jornadas, actividades de formación o alianzas estratégicas
        para ampliar oportunidades para la juventud del Atlántico.
      </p>
      <a href="mailto:contacto@lajuvefg.org" className="btn-primary">
        Quiero hablar sobre una alianza
      </a>
    </div>
  </div>
</section>

        <section className="section section-block">
  <div className="content-wrap">
    <div className="final-cta">
      <span className="section-kicker">Haz parte del movimiento</span>
      <h2 className="section-title">Tu energía puede convertirse en impacto real</h2>
      <p className="final-cta-text">
        Si quieres servir, liderar, aprender y generar oportunidades para otros jóvenes,
        La JuveFG es tu espacio.
      </p>

      <div className="hero-actions justify-center">
        <a href="/inscripcion" className="btn-primary">Inscribirme como voluntario</a>
        <a href="mailto:contacto@lajuvefg.org" className="btn-secondary">Contactar al equipo</a>
      </div>
    </div>
  </div>
</section>
      </main>

      <Footer />
    </>
  );
}