document.querySelector("#elEditorMenuOption").classList.add("active");

const elCodeWrapper = document.querySelector("#codeWrapper");
const elBtnVisualizeCode = document.querySelector("#btnVisualizeCode");
const elLanguage = document.querySelector("#language");

function applyHighlight() {
  const code = elCodeWrapper.innerText; // to convert possible line breaks (<br>) etc in \n

  elCodeWrapper.innerHTML = `<code class="code__text hljs ${elLanguage.value}" id="code" contenteditable="true" aria-label="Edição do código">${code}</code>`;

  const elCode = document.querySelector("#code");
  /* when using the contenteditable attribute, the browsers consider different
    representations for line breaks (tag <br>, \n). 
    To avoid XSS attacks, the highlight.js removes what is not text, eg. <br>
    textContent is used to preserve the line breaks with \n (innerText would convert the \n's back to <br>).
  */
  elCode.textContent = code;

  hljs.highlightElement(elCode);
}

elBtnVisualizeCode.addEventListener('click', applyHighlight);