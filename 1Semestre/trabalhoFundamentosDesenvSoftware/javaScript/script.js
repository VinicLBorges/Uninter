
  function mostrarMensagem() {
    var mensagem = document.getElementById("mensagem");
  
    // Exibe a mensagem
    mensagem.innerText = "Acredite em você, porque o único limite para os seus sonhos é a sua própria coragem.";
    mensagem.style.opacity = "1"; // Torna a mensagem visível

    // Faz a mensagem desaparecer após 3 segundos
    setTimeout(function() {
        mensagem.style.opacity = "0"; // Torna a mensagem invisível
    }, 3000); // 3000 ms = 3 segundos
  }