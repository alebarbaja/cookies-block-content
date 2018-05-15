const blockContent = document.getElementById("block-content");
const aceptarCookies = document.getElementById("aceptar-cookies");
let broma = document.getElementById("muajaja");
const p = document.createElement("p");
const broma2 = document.createTextNode("Bueno, ¡ahora sí puedes!");


aceptarCookies.addEventListener("click", function() {
  blockContent.style.display = "none";
  this.style.display = "none";
  broma.style.textDecoration = "line-through";
  p.appendChild(broma2);
  muajaja.after(p);
});