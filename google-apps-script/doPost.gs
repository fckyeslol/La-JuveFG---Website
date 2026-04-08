/**
 * Web app (POST). Columnas alineadas con la hoja:
 * Nombre, Correo, Teléfono, Tipo doc, Nº doc, Edad, Municipio, Barrio, Ocupación,
 * Nivel educativo, Área interés, Experiencia vol., [vacía], Detalle exp., [vacía],
 * Disponibilidad, Motivación, Fecha registro
 *
 * El sitio envía: documentoTipo, documentoNumero (camelCase).
 */
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.nombre,
      data.correo,
      data.telefono,
      data.documentoTipo,
      data.documentoNumero,
      data.edad,
      data.municipio,
      data.barrio,
      data.ocupacion,
      data.nivelEducativo,
      data.areaInteres,
      data.experiencia,
      '',
      data.experienciaDetalle || '',
      '',
      data.disponibilidad,
      data.motivacion,
      data.fechaRegistro
    ]);

    MailApp.sendEmail({
      to: "mateopirela08@gmail.com",
      subject: "Nuevo registro de voluntario - La JuveFG",
      htmlBody:
        "<h2>Nuevo registro recibido</h2>" +
        "<p><strong>Nombre:</strong> " + escapeHtml_(data.nombre) + "</p>" +
        "<p><strong>Correo:</strong> " + escapeHtml_(data.correo) + "</p>" +
        "<p><strong>Teléfono:</strong> " + escapeHtml_(data.telefono) + "</p>" +
        "<p><strong>Documento:</strong> " + escapeHtml_(data.documentoTipo) + " — " + escapeHtml_(String(data.documentoNumero || "")) + "</p>" +
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

/** Evita HTML roto si el nombre u otros campos traen &lt; &gt; */
function escapeHtml_(text) {
  if (text === null || text === undefined) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
