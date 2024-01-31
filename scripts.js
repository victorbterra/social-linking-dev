// Inicio da funcao do botao toggle//
function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // Buscando imagem na tag //
  const img = document.querySelector("#profile img")
  // Caso a condicao no html for light //
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Victor Terra em um fundo branco")
    // Caso a condicao nao for light//
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Victor Terra de óculos e camisa azul")
  }
}
