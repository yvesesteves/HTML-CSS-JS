/**
verificando se os campos estão em branco antes de permitir o cadastro.
 */
function validarFormulario() {
  //array com os IDs dos inputs e suas respectivas mensagens
  var campos = ["usuario", "senha", "email"];

  //percorre cada campo para verificar se está preenchido
  for (var i = 0; i < campos.length; i++) {
    var idCampo = campos[i];
    var elementoInput = document.getElementById(idCampo);
    var elementoMensagem = document.getElementById("msg-" + idCampo);

    //se o valor estiver vazio (removendo espaços extras)
    if (elementoInput.value.trim() === "") {
      //mostra a mensagem de erro específica para o campo vazio
      elementoMensagem.style.display = "block";
    } else {
      //esconde a mensagem se o campo foi preenchido
      elementoMensagem.style.display = "none";
    }
  }
}
