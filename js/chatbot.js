function initChatbot() {
  function clientMsg() {
    const inputMsg = document.querySelector(".input-msg");
    const buttonSend = document.querySelector(".btn-send");
    const containerSentMsg = document.querySelector(".container-conversation");

    function toSendMsg() {
      const clientMsg = document.createElement("div");

      clientMsg.innerText = inputMsg.value;
      clientMsg.classList.add("client-msg", "every-box-msg");
      containerSentMsg.appendChild(clientMsg);
    }

    buttonSend.addEventListener("click", toSendMsg);
  }
  clientMsg();
  }

initChatbot();

