function applyHighlights() {
  const elCodeTexts = document.querySelectorAll("#codeText");

  elCodeTexts.forEach(elCodeText => {
    hljs.highlightElement(elCodeText);
  });
}

document.querySelector("#elComunidadeMenuOption").classList.add("active");
const elCode = document.querySelector("#code");

const codes = JSON.parse(window.localStorage.getItem('codes')) || [];
let codeCardElements = "";

codes.forEach(code => {
  codeCardElements += `
  <div class="code__containerText">
    <a href="./index.html" class="code__border" style="border: 1.5rem solid ${code.inputBackgroundColor}">
      <span class="code__circle code__circle1"></span>
      <span class="code__circle code__circle2"></span>
      <span class="code__circle code__circle3"></span>
      <div id="codeWrapper">
        <code class="code__text hljs ${code.language}" id="codeText" aria-label="exibição do código">${code.code}</code>
      </div>
    </a>

    <div class="code__info">
      <h4 class="code__title">${code.projectName}</h4>
      <div class="code__description">${code.projectDescription}</div>

      <div class="code__social">
        <div class="code__social__engagement">
          <span class="code__social__comment">
            <i class="fas fa-comment" aria-label="ícone comentário"></i>
            <span class="code__social__comment__quantity" alt="quantidade de comentários">8</span>
          </span>
          <span class="code__social__like">
            <i class="fas fa-heart" aria-label="ícone coração"></i>
            <span class="code__social__like__quantity" alt="quantidade de likes">9</span>
          </span>
        </div>
        <div class="containerAuthor">
          <div class="author">
            <img class="author__image" src="/assets/img/Photo.png" alt="imagem do autor">
            <div class="author__name">@Harry</div>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

elCode.innerHTML = codeCardElements;
applyHighlights();


