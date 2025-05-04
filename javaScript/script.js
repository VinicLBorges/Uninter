
  function mostrarMensagem() {
    var mensagem = document.getElementById("mensagem");
  
    mensagem.innerText = "Acredite em você, porque o único limite para os seus sonhos é a sua própria coragem.";
    mensagem.style.opacity = "1";

    setTimeout(function() {
        mensagem.style.opacity = "0";
    }, 3000);
  }