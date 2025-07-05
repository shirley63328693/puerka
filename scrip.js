document.getElementById("form-turno").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("✅ Tu turno ha sido reservado. ¡Gracias por confiar en nosotros!");
});

function enviarReclamo() {
  const texto = document.getElementById("mensaje-reclamo").value;
  if (texto.trim() === "") {
    alert("⚠️ Por favor escribe tu reclamo.");
  } else {
    alert("📝 Reclamo enviado. Lo revisaremos pronto.");
    document.getElementById("mensaje-reclamo").value = "";
  }
}
