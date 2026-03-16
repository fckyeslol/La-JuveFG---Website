# LaJuveFG-Website

Sitio web oficial de La JuveFG, una iniciativa juvenil enfocada en formar, conectar y movilizar jóvenes como agentes de cambio en sus comunidades.

La plataforma permite:

Presentar la organización y sus iniciativas.

Mostrar actividades y eventos comunitarios.

Permitir que jóvenes se registren como voluntarios.

Guardar automáticamente registros en Google Sheets.

Enviar correos de confirmación automáticos a los inscritos.

El proyecto está construido con Next.js, TailwindCSS, y un backend serverless basado en Google Apps Script.

Sitio en producción

El sitio está desplegado en:

https://lajuvefg.vercel.app

Deployment manejado mediante Vercel conectado a GitHub.

Tecnologías utilizadas

Frontend

Next.js

React

TailwindCSS

TypeScript

Backend

Google Apps Script

Google Sheets

Infraestructura

Vercel (hosting)

GitHub (versionado)

📂 Estructura del proyecto
juvefg-site
│
├── components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── VideoCard.tsx
│   └── VolunteerForm.tsx
│
├── pages
│   ├── index.tsx
│   ├── inscripcion.tsx
│   └── _app.tsx
│
├── public
│   ├── images
│   │   ├── hero.mp4
│   │   ├── interact.mp4
│   │   ├── campeones.mp4
│   │   └── navidad.mp4
│   │
│   └── juve.png
│
├── styles
│   └── globals.css
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
⚙️ Instalación local
1. Clonar repositorio
git clone https://github.com/fckyeslol/La-JuveFG---Website.git
cd La-JuveFG---Website
2. Instalar dependencias
npm install
3. Crear variables de entorno

Crear archivo:

.env.local

y agregar:

NEXT_PUBLIC_GOOGLE_SCRIPT_URL=YOUR_GOOGLE_APPS_SCRIPT_URL
4. Ejecutar proyecto
npm run dev

Abrir en navegador:

http://localhost:3000
Sistema de registro de voluntarios

El formulario de inscripción se encuentra en:

/inscripcion

Cuando un usuario envía el formulario:

El frontend envía los datos mediante fetch().

La solicitud se envía a un Google Apps Script Web App.

Apps Script:

Guarda los datos en Google Sheets.

Envía correo de confirmación al voluntario.

Envía notificación al equipo organizador.

 Arquitectura del flujo
Usuario
   │
   ▼
Formulario React
   │
   ▼
fetch() request
   │
   ▼
Google Apps Script (Web App)
   │
   ├── Guarda datos en Google Sheets
   │
   └── Envía correos automáticos
Base de datos

La base de datos está alojada en Google Sheets.

Columnas utilizadas:

Nombre
Correo
Teléfono
Edad
Ciudad
Barrio
Ocupación
Nivel educativo
Área de interés
Experiencia
Disponibilidad
Motivación
Fecha de registro
Correos automáticos

Apps Script envía dos correos:

1. Confirmación al voluntario

Incluye:

agradecimiento

confirmación de registro

información de contacto

2. Notificación al equipo

Notifica que hay un nuevo registro.

Deploy en Vercel

El sitio se despliega automáticamente desde GitHub.

Cada push a main genera un nuevo deployment.

Deploy manual

Ir a Vercel

New Project

Import Git Repository

Seleccionar repo

Agregar variables de entorno

Variables de entorno

En Vercel se debe configurar:

NEXT_PUBLIC_GOOGLE_SCRIPT_URL

Ejemplo:

NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec

Ubicación en Vercel:

Project Settings → Environment Variables
Google Apps Script

El Apps Script debe estar desplegado como Web App.

Configuración correcta:

Execute as:

Me

Who has access:

Anyone

URL final del script:

https://script.google.com/macros/s/.../exec

Esta URL se usa en la variable de entorno.

Sistema de videos

El sitio incluye videos verticales tipo reels.

Ubicación:

/public/images

Se muestran mediante el componente:

VideoCard

Características:

autoplay

controles personalizados

optimización responsive

Diseño

El diseño está construido con TailwindCSS y un sistema de variables CSS.

Colores principales de La JuveFG:

Primary
#163d73

Accent
#ff7a59

Background
#ffffff
📱 Responsive

El sitio está optimizado para:

móviles

tablets

desktop

Layout principal usa:

CSS Grid
Flexbox
Mejoras futuras

Equipo

Proyecto desarrollado para:

La JuveFG

Iniciativa juvenil enfocada en liderazgo, servicio social, cultura y desarrollo comunitario.

Licencia

Este proyecto es de uso institucional para La JuveFG.
