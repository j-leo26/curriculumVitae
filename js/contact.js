// === Inicializar EmailJS (SDK v4) ===
(function () {
  emailjs.init({
    publicKey: "J-uUFAAoa491TFmS4", // Tu Public Key
  });
})();

// === Variables del formulario ===
const form = document.getElementById("form");
const btn = document.getElementById("button");
const status = document.getElementById("form-status");

// === Envío del formulario ===
form.addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Enviando...";
  status.textContent = "";

  const serviceID = "default_service"; // o tu ID personalizado
  const templateID = "template_dxznohd";

  emailjs
    .sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = "Enviar mensaje";
      status.textContent = "¡Mensaje enviado con éxito!";
      status.style.color = "#4CAF50";
      form.reset();
    })
    .catch((err) => {
      btn.value = "Enviar mensaje";
      status.textContent = "Hubo un error al enviar 😢";
      status.style.color = "#ff4d4d";
      console.error("Error al enviar:", err);
    });
});
