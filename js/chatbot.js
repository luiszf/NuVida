  function clientMsg() {
    const inputMsg = document.querySelector(".input-msg");
    const buttonSend = document.querySelector(".btn-send");
    const containerSentMsg = document.querySelector(".container-conversation");

    function toSendMsg() {
      const clientMsg = document.createElement("div");
      clientMsg.innerText = inputMsg.value;
      clientMsg.classList.add("client-msg", "every-box-msg");
      containerSentMsg.appendChild(clientMsg);
      companieMsg();
    }
    buttonSend.addEventListener("click", toSendMsg);
  }
  clientMsg();

  function companieMsg(){
    const containerSentMsg = document.querySelector(".container-conversation");

    function toSendMsg() {
      const companieMsg = document.createElement("div");
      companieMsg.innerText = msgs[1];
      companieMsg.classList.add("companie-msg", "every-box-msg");
      containerSentMsg.appendChild(companieMsg);
    }
    toSendMsg();
  }

  const msgs = {
    1: `Boa noite!
    Por favor, escolha o sabor de sua pizza:
    [1] - Mussarela
    [2] - Calabresa
    [3] - Bauru
    [4] - Carne seca
    [5] - Bacon`,
    2: `Vai querer mais uma?`,
    3: `Ótimo! Gostaria de beber alguma coisa?`,
    4: `Por favor, escolha a bebida:
    [1] - Dolly
    [2] - Coca-cola
    [3] - Fanta uva
    [4] - Fanta laranja
    [5] - Guaraná Jesus`,
  }