"use client";

import { useState } from 'react';

interface VolunteerData {
  nombre: string;
  correo: string;
  telefono: string;
  documentoTipo: string;
  documentoNumero: string;
  edad: string;
  municipio: string;
  barrio: string;
  ocupacion: string;
  nivelEducativo: string;
  areaInteres: string;
  experiencia: string;
  experienciaDetalle?: string;
  disponibilidad: string;
  motivacion: string;
  aceptaDatos: boolean;
}

export default function VolunteerForm() {
  const [form, setForm] = useState<VolunteerData>({
    nombre: '',
    correo: '',
    telefono: '',
    documentoTipo: '',
    documentoNumero: '',
    edad: '',
    municipio: '',
    barrio: '',
    ocupacion: '',
    nivelEducativo: '',
    areaInteres: '',
    experiencia: 'No',
    experienciaDetalle: '',
    disponibilidad: '',
    motivacion: '',
    aceptaDatos: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const requiredFields: Array<keyof VolunteerData> = [
      'nombre',
      'correo',
      'telefono',
      'documentoTipo',
      'documentoNumero',
      'edad',
      'municipio',
      'barrio',
      'ocupacion',
      'nivelEducativo',
      'areaInteres',
      'disponibilidad',
      'motivacion',
    ];

    for (const field of requiredFields) {
      if (!form[field] || (typeof form[field] === 'string' && form[field].trim() === '')) {
        setError('Completa todos los campos obligatorios.');
        return false;
      }
    }

    if (!form.aceptaDatos) {
      setError('Debes aceptar el tratamiento de datos.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const { aceptaDatos: _a, ...rest } = form;
      const payload = {
        ...rest,
        experiencia: form.experiencia === 'Si' ? 'Sí' : 'No',
        fechaRegistro: new Date().toISOString(),
      };

      const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '';

      // no-cors solo permite Content-Type "simple"; application/json a veces se pierde.
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      setSuccess(true);
      setForm({
        nombre: '',
        correo: '',
        telefono: '',
        documentoTipo: '',
        documentoNumero: '',
        edad: '',
        municipio: '',
        barrio: '',
        ocupacion: '',
        nivelEducativo: '',
        areaInteres: '',
        experiencia: 'No',
        experienciaDetalle: '',
        disponibilidad: '',
        motivacion: '',
        aceptaDatos: false,
      });
    } catch (err) {
      setError('No se pudo enviar el formulario. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card glass">
      <div className="mb-8">
        <span className="section-kicker">Postúlate a la red juvenil</span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-[#163d73]">
          Inscripción de voluntarios
        </h2>

        <p className="mt-3 text-[#4f6279] max-w-2xl leading-7">
          Queremos conocerte. Este registro nos ayudará a vincularte a actividades,
          procesos de formación y acciones comunitarias de alto impacto. Debes completar
          con el número de tu <strong>tarjeta de identidad</strong> o de tu{' '}
          <strong>cédula de ciudadanía</strong>.
        </p>
      </div>

      {error && <div className="error-box mb-6">{error}</div>}
      {success && (
        <div className="success-box mb-6">
          ¡Registro enviado con éxito! Muy pronto nos pondremos en contacto contigo.
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label">Nombre completo *</label>
          <input className="input" name="nombre" value={form.nombre} onChange={handleChange} />
        </div>

        <div>
          <label className="label">Correo electrónico *</label>
          <input className="input" type="email" name="correo" value={form.correo} onChange={handleChange} />
        </div>

        <div>
          <label className="label">Número de teléfono *</label>
          <input className="input" name="telefono" value={form.telefono} onChange={handleChange} />
        </div>

        <div>
          <label className="label">Documento *</label>
          <select className="select" name="documentoTipo" value={form.documentoTipo} onChange={handleChange}>
            <option value="">Selecciona</option>
            <option value="Tarjeta de identidad">Tarjeta de identidad</option>
            <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
          </select>
        </div>

        <div>
          <label className="label">Número de documento *</label>
          <input
            className="input"
            name="documentoNumero"
            value={form.documentoNumero}
            onChange={handleChange}
            inputMode="numeric"
            autoComplete="off"
            placeholder="Sin puntos ni espacios"
          />
        </div>

        <div>
          <label className="label">Edad *</label>
          <input className="input" type="number" name="edad" value={form.edad} onChange={handleChange} />
        </div>

        <div>
          <label className="label">Municipio o ciudad *</label>
          <input className="input" name="municipio" value={form.municipio} onChange={handleChange} />
        </div>

        <div>
          <label className="label">Barrio o sector *</label>
          <input className="input" name="barrio" value={form.barrio} onChange={handleChange} />
        </div>

        <div>
          <label className="label">Ocupación *</label>
          <input className="input" name="ocupacion" value={form.ocupacion} onChange={handleChange} />
        </div>

        <div>
          <label className="label">Nivel educativo *</label>
          <select className="select" name="nivelEducativo" value={form.nivelEducativo} onChange={handleChange}>
            <option value="">Selecciona</option>
            <option value="Primaria">Primaria</option>
            <option value="Secundaria">Secundaria</option>
            <option value="Técnico/Tecnológico">Técnico/Tecnológico</option>
            <option value="Universitario">Universitario</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div>
          <label className="label">Área de interés *</label>
          <select className="select" name="areaInteres" value={form.areaInteres} onChange={handleChange}>
            <option value="">Selecciona</option>
            <option value="Cultura">Cultura</option>
            <option value="Servicio social">Servicio social</option>
            <option value="Educación">Educación</option>
            <option value="Deporte">Deporte</option>
            <option value="Otra">Otra</option>
          </select>
        </div>

        <div>
          <label className="label">Experiencia en voluntariado *</label>
          <select className="select" name="experiencia" value={form.experiencia} onChange={handleChange}>
            <option value="No">No</option>
            <option value="Si">Sí</option>
          </select>
        </div>

        {form.experiencia === 'Si' && (
          <div className="md:col-span-2">
            <label className="label">Cuéntanos tu experiencia</label>
            <textarea
              className="textarea"
              name="experienciaDetalle"
              value={form.experienciaDetalle}
              onChange={handleChange}
              placeholder="Describe tus procesos, iniciativas o actividades anteriores"
            />
          </div>
        )}

        <div className="md:col-span-2">
          <label className="label">Disponibilidad *</label>
          <input
            className="input"
            name="disponibilidad"
            value={form.disponibilidad}
            onChange={handleChange}
            placeholder="Ej: fines de semana, tardes, horario flexible..."
          />
        </div>

        <div className="md:col-span-2">
          <label className="label">¿Por qué quieres unirte? *</label>
          <textarea
            className="textarea"
            name="motivacion"
            value={form.motivacion}
            onChange={handleChange}
            placeholder="Cuéntanos qué te inspira, qué te mueve y cómo te gustaría aportar"
          />
        </div>

        <div className="md:col-span-2 flex items-start gap-3 rounded-2xl border border-[#d7e4f1] bg-[#f8fbff] p-4">
          <input
            type="checkbox"
            name="aceptaDatos"
            checked={form.aceptaDatos}
            onChange={handleChange}
            className="mt-1"
          />
          <label className="text-[#4f6279] text-sm leading-6">
            Acepto el tratamiento de mis datos personales conforme a la política de privacidad
            de La JuveFG.
          </label>
        </div>

        <div className="md:col-span-2">
          <button type="submit" disabled={loading} className="btn-primary w-full md:w-auto">
            {loading ? 'Enviando registro...' : 'Enviar registro'}
          </button>
        </div>
      </form>
    </div>
  );
}