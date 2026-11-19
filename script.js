const boton = document.getElementById("menu-toggle");
const menu = document.getElementById("nav");

boton.addEventListener("click", function () {
  menu.classList.toggle("active");

  const abierto = menu.classList.contains("active");

  boton.textContent = abierto ? "✕" : "☰";
  boton.setAttribute("aria-expanded", abierto);
  boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});
