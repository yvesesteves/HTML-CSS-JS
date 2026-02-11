/**
permite adicionar itens à lista via formulário e remover ao clicar no item.
 */

//define a ação ao clicar no botão 'Adicionar'
document.getElementById("btnAdicionar").onclick = function () {
  //resgata o elemento de entrada e remove espaços em branco extras
  var input = document.getElementById("interesse");
  var valor = input.value.trim();

  //verifica se o usuário digitou algo antes de prosseguir
  if (valor !== "") {
    //seleciona a lista ordenada (ol) no documento
    var lista = document.getElementById("listaInteresses");

    //cria um novo nó de elemento 'li'
    var novoItem = document.createElement("li");

    //define o texto do novo item como o valor capturado do input
    novoItem.textContent = valor;

    //dincula dinamicamente a função de remoção ao novo item (evento de clique)
    novoItem.onclick = function () {
      removerItem(this);
    };

    //adiciona o novo 'li' como filho da lista ordenada
    lista.appendChild(novoItem);

    //limpa o campo de texto e devolve o foco para nova digitação
    input.value = "";
    input.focus();
  }
};

/**
 *função para remover um item específico da lista.
 * @param {HTMLElement} item - O elemento 'li' que foi clicado.
 */
function removerItem(item) {
  //seleciona o pai (ol) e remove o filho específico (li)
  var lista = document.getElementById("listaInteresses");
  lista.removeChild(item);
}
