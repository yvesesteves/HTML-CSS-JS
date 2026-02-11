//função disparada quando o mouse entra na imagem
function aplicarSombra(imagem) {
  imagem.style.boxShadow = "0px 0px 20px 5px rgba(255, 0, 0, 0.7)";
}

//função disparada quando o mouse sai da imagem
function removerSombra(imagem) {
  //retorna para a sombra cinza original definida no CSS
  imagem.style.boxShadow = "3px 3px 5px #888888";
}
