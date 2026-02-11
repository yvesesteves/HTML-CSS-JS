/*
esta função é executada toda vez que o campo de seleção é alterado.
 */
function atualizarEstado() {
  //resgata o elemento select pelo seu identificador ID
  var campoSelect = document.getElementById("selectEstado");

  //resgata o valor (sigla) da opção selecionada através da propriedade value
  var sigla = campoSelect.value;

  //seleciona o elemento de parágrafo onde o resultado será exibido
  var paragrafo = document.getElementById("resultado");

  //verifica se há um valor selecionado para atualizar o texto do parágrafo
  if (sigla !== "") {
    paragrafo.textContent = "Você selecionou: " + sigla;
  } else {
    //caso a opção "Selecione..." seja clicada, limpa a exibição
    paragrafo.textContent = "Você selecionou: ";
  }
}
