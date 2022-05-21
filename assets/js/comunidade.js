function applyHighlights() {
  const elCodeTexts = document.querySelectorAll("#codeText");

  elCodeTexts.forEach(elCodeText => {
    hljs.highlightElement(elCodeText);
  });
}

function loadCodeCards() {
  document.querySelector("#elComunidadeMenuOption").classList.add("active");
  const elCode = document.querySelector("#code");

  const codes = getLocalStorageCodes();

  codes.forEach(code => {
    const codeObj = codeObject(code.projectName, code.projectDescription, code.language, code.backgroundColor, code.code, code.codeId);

    const codeCardElement = document.createElement('div');
    codeCardElement.classList.add('code__containerText');

    codeCardElement.innerHTML = `
      <a href="./index.html" id="codeBorder" class="code__border" style="border: 1.5rem solid ${codeObj.backgroundColor}">
        <span class="code__circle code__circle1"></span>
        <span class="code__circle code__circle2"></span>
        <span class="code__circle code__circle3"></span>
        <span class="code__delete" id="codeDelete">X</span>
        <div id="codeWrapper">
          <code class="code__text hljs ${codeObj.language}" id="codeText" aria-label="exibição do código"></code>
        </div>

        <input type="hidden" name="codeId" id="codeId" value="${codeObj.codeId}">
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

      const elCodeDelete = codeCardElement.querySelector("#codeDelete");
      elCodeDelete.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();

        const targetElement = event.target;
  
        const codeId = targetElement.parentElement.querySelector("#codeId").attributes.value.value;

        if (codeId) {
          const codesDel = getLocalStorageCodes();

          const index = codesDel.findIndex((codeDel, index, array) => {
            return codeDel.codeId == codeId;
          });
    
          if (index >= 0) {            
            codesDel.splice(index, 1); // code card delete (through replacement)

            window.localStorage.setItem(lskey.codes, JSON.stringify(codesDel));
            targetElement.parentElement.parentElement.remove(); // ".code__containerText"
          }
        }
      });

      const codeText = codeCardElement.querySelector("#codeText");
      codeText.textContent = code.code;

      elCode.appendChild(codeCardElement);
  });

  const elCodeBorders = document.querySelectorAll("#codeBorder");
  elCodeBorders.forEach(elCodeBorder => {
    elCodeBorder.addEventListener('click', (event) => {
      event.preventDefault();
  
      const href = event.currentTarget.attributes.href.textContent;
      const codeId = event.currentTarget.querySelector("#codeId").value;
      // set the card that will be updated
      window.localStorage.setItem(lskey.codeId, codeId);
      if (href) {
        location.href = href;
      }
    });
  });
}

loadCodeCards();
applyHighlights();

