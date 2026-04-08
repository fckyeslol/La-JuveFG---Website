/**
 * Web app (POST).
 * El sitio envía: application/x-www-form-urlencoded con campo "payload" = JSON string.
 * (Compatible con fetch no-cors.) También acepta cuerpo JSON/texto plano por si acaso.
 *
 * Columnas A–R:
 * A Nombre, B Correo, C Teléfono, D Tipo doc, E Nº doc, F Edad, G Municipio, H Barrio, I Ocupación,
 * J Nivel educativo, K Área interés, L Experiencia vol., M (vacía), N Detalle exp., O (vacía),
 * P Disponibilidad, Q Motivación, R Fecha registro
 */

/** Abrir la URL en el navegador hace GET; sin esto Google muestra "doGet not found". */
function doGet() {
  return ContentService.createTextOutput(
    'La JuveFG — Web app activa. Los registros llegan por POST desde el formulario; esta URL no se usa en el navegador.'
  ).setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = parsePayload_(e);

    var docTipo = cell_(data.documentoTipo || data.tipodedocumento);
    var docNum = cell_(data.documentoNumero || data.numerodedocumento);

    // Exactamente 18 celdas → columnas A–R
    sheet.appendRow([
      cell_(data.nombre),
      cell_(data.correo),
      cell_(data.telefono),
      docTipo,
      docNum,
      cell_(data.edad),
      cell_(data.municipio),
      cell_(data.barrio),
      cell_(data.ocupacion),
      cell_(data.nivelEducativo),
      cell_(data.areaInteres),
      cell_(data.experiencia),
      '',
      cell_(data.experienciaDetalle),
      '',
      cell_(data.disponibilidad),
      cell_(data.motivacion),
      cell_(data.fechaRegistro)
    ]);

    MailApp.sendEmail({
      to: "mateopirela08@gmail.com",
      subject: "Nuevo registro de voluntario - La JuveFG",
      htmlBody:
        "<h2>Nuevo registro recibido</h2>" +
        "<p><strong>Nombre:</strong> " + escapeHtml_(data.nombre) + "</p>" +
        "<p><strong>Correo:</strong> " + escapeHtml_(data.correo) + "</p>" +
        "<p><strong>Teléfono:</strong> " + escapeHtml_(data.telefono) + "</p>" +
        "<p><strong>Documento:</strong> " + escapeHtml_(docTipo) + " — " + escapeHtml_(docNum) + "</p>" +
        "<p><strong>Municipio:</strong> " + escapeHtml_(data.municipio) + "</p>" +
        "<p><strong>Área de interés:</strong> " + escapeHtml_(data.areaInteres) + "</p>" +
        "<p><strong>Motivación:</strong> " + escapeHtml_(data.motivacion) + "</p>"
    });

    if (data.correo && String(data.correo).trim() !== "") {
      MailApp.sendEmail({
        to: data.correo,
        subject: "Gracias por registrarte en La JuveFG",
        htmlBody:
          "<h2>¡Gracias por unirte a La JuveFG!</h2>" +
          "<p>Hola <strong>" + escapeHtml_(data.nombre) + "</strong>,</p>" +
          "<p>Recibimos tu registro como voluntario correctamente.</p>" +
          "<p>Muy pronto podremos contactarte para compartirte convocatorias, actividades y oportunidades de participación.</p>" +
          "<p><strong>La JuveFG</strong></p>"
      });
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: String(error)
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Prioridad: formulario urlencoded (payload=). Respaldo: postData.contents JSON.
 */
function parsePayload_(e) {
  var raw = '';
  if (e.parameter && e.parameter.payload) {
    raw = String(e.parameter.payload);
  } else if (e.postData && e.postData.contents) {
    raw = String(e.postData.contents);
  }
  if (!raw || raw === '') {
    raw = '{}';
  }
  return JSON.parse(raw);
}

function cell_(v) {
  if (v === null || v === undefined) return "";
  return String(v);
}

function escapeHtml_(text) {
  if (text === null || text === undefined) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
