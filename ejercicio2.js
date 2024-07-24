let cajaPrincipal = document.getElementById("caja")
const button = document.getElementsByTagName("button")

// Asigna color a caja.
function pintaColores(i) {
  switch (i) {
    case 0:
      cajaPrincipal.style.backgroundColor = "#e53e3e";
      break;
    case 1:
      cajaPrincipal.style.backgroundColor = "#dd6b20";
      break;
    case 2:
      cajaPrincipal.style.backgroundColor = "#faf089";
      break;
    case 3:
      cajaPrincipal.style.backgroundColor = "#48bb78";
      break;
    case 4:
      cajaPrincipal.style.backgroundColor = "#81e6d9";
      break;
    default:
      cajaPrincipal.style.backgroundColor = "#d53f8c";
      break;
  }
}

// Recorre el elemento button y escucha el evento click según item. Llama a la función pintaColores.
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    pintaColores(i);
  }, false);
}