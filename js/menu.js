/* Menú hamburguesa (pantallas pequeñas) */
const boton = document.querySelector("#hamburguesa");
const menu = document.querySelector("#menu");

function alternarMenu(abrir) {
  boton.setAttribute("aria-expanded", abrir);
  boton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
  menu.classList.toggle("abierto", abrir);
}

boton.addEventListener("click", () => {
  alternarMenu(boton.getAttribute("aria-expanded") !== "true");
});

/* Se cierra al tocar un enlace, con Escape o al pasar a pantalla grande */
menu.addEventListener("click", (e) => { if (e.target.closest("a")) alternarMenu(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") alternarMenu(false); });
matchMedia("(min-width: 901px)").addEventListener("change", (e) => { if (e.matches) alternarMenu(false); });
