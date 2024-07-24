let form = document.getElementById("formulario")

form.addEventListener("submit", (event) => {
  event.preventDefault()
  limpiarError();

  let nombre = document.getElementById("nombre").value
  let asunto = document.getElementById("asunto").value
  let mensaje = document.getElementById("mensaje").value

  const esValido = validacionDatos(nombre, asunto, mensaje)

  if (esValido) {
    document.querySelector(".resultado").innerText = 'Mensaje enviado con éxito!!!'
  }
})

function validacionDatos(nombre, asunto, mensaje) {
  const regNombre = /^[A-Za-z\s]{3,}$/i
  const regAsunto = /^[A-Za-z\s]{3,}$/i
  const regMensaje = /^[A-Za-z\s]{3,}$/i
  const nombreValido = regNombre.test(nombre)
  const asuntoValido = regAsunto.test(asunto)
  const mensajeValido = regMensaje.test(mensaje)


  if (!nombreValido) {
    document.querySelector(".errorNombre").innerText = 'El nombre es requerido'
  }
  if (!asuntoValido) {
    document.querySelector(".errorAsunto").innerText = 'El asunto es requerido'
  }
  if (!mensajeValido) {
    document.querySelector(".errorMensaje").innerText = 'El mensaje es requerido'
  }


  return nombreValido && asuntoValido && mensajeValido
}

function limpiarError() {
  let errNom = document.querySelector(".errorNombre")
  let errEmail = document.querySelector(".errorAsunto")
  let errTelefono = document.querySelector(".errorMensaje")

  errNom.innerText = ''
  errEmail.innerText = ''
  errTelefono.innerText = ''
}

