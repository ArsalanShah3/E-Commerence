
  document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to Ecommerence Website";
    const typingElement = document.querySelector(".typing");
    let index = 0;

    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Typing speed
      }
    }

    type();
  });

