/**
 * Função para esconder o conteúdo após o título clicado.
 * @param {HTMLElement} titulo - O elemento h2 que foi clicado.
 */
function esconderConteudo(titulo) {
  // A propriedade nextElementSibling acessa o nó imediatamente seguinte
  var conteudo = titulo.nextElementSibling;

  // Adiciona a classe CSS que aplica display: none
  if (conteudo) {
    conteudo.classList.add("oculto");
  }
}

/**
 * Função para mostrar o conteúdo novamente após um duplo clique.
 * @param {HTMLElement} titulo - O elemento h2 que recebeu o duplo clique
 */
function mostrarConteudo(titulo) {
  var conteudo = titulo.nextElementSibling;

  // Remove a classe para que o elemento volte a aparecer
  if (conteudo) {
    conteudo.classList.remove("oculto");
  }
}
