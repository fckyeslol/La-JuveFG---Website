/**
 * Web app (POST). Cuerpo: JSON (desde el sitio con Content-Type text/plain por no-cors).
 *
 * Columnas A–R:
 * Nombre, Correo, Teléfono, Tipo doc, Nº doc, Edad, Municipio, Barrio, Ocupación,
 * Nivel educativo, Área interés, Experiencia vol., [vacía M], Detalle [N], [vacía O],
 * Disponibilidad, Motivación, Fecha registro
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var raw = e.postData && e.postData.contents ? e.postData.contents : '{}';
    var data = JSON.parse(raw);

    var docTipo = cell_(data.documentoTipo || data.tipodedocumento);
    var docNum = cell_(data.documentoNumero || data.numerodedocumento);

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
