function applyHighlights() {
  const elCodeTexts = document.querySelectorAll("#codeText");

  elCodeTexts.forEach(elCodeText => {
    hljs.highlightElement(elCodeText);
  });
}

document.querySelector("#elComunidadeMenuOption").classList.add("active");
const elCode = document.querySelector("#code");

const codes = JSON.parse(window.localStorage.getItem('codes')) || [];

codes.forEach(code => {
  const codeObj = codeObject(code.projectName, code.projectDescription, code.language, code.backgroundColor, code.code);

  const codeCardElement = document.createElement('div');
  codeCardElement.classList.add('code__containerText');

  codeCardElement.innerHTML = `
    <a href="./index.html" class="code__border" style="border: 1.5rem solid ${codeObj.backgroundColor}">
      <span class="code__circle code__circle1"></span>
      <span class="code__circle code__circle2"></span>
      <span class="code__circle code__circle3"></span>
      <div id="codeWrapper">
        <code class="code__text hljs ${codeObj.language}" id="codeText" aria-label="exibição do código"></code>
      </div>
    </a>

    <div class="code__info">
      <h4 class="code__title">${codeObj.projectName}</h4>
      <div class="code__description">${codeObj.projectDescription}</div>

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
            <div class="author__name">@Author</div>
          </div>
        </div>
      </div>
    </div>`

    const codeText = codeCardElement.querySelector("#codeText");
    codeText.textContent = code.code;

    elCode.appendChild(codeCardElement);
});

applyHighlights();


