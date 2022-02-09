document.querySelector("#elEditorMenuOption").classList.add("active");

const elCodeWrapper = document.querySelector("#codeWrapper");

const elBtnVisualizeCode = document.querySelector("#btnVisualizeCode");


const elProjectName = document.querySelector("#projectName");
const elProjectDescription = document.querySelector("#projectDescription");
const elLanguage = document.querySelector("#language");
const elInputBackgroundColor = document.querySelector("#inputBackgroundColor");

const elBtnSaveProject = document.querySelector("#btnSaveProject");

function applyHighlight() {
  const code = elCodeWrapper.innerText; // to convert possible line breaks (<br>) etc in \n

  elCodeWrapper.innerHTML = `<code class="code__text hljs ${elLanguage.value}" id="codeText" contenteditable="true" aria-label="Edição do código">${code}</code>`;

  const elCodeText = document.querySelector("#codeText");
  /* when using the contenteditable attribute, the browsers consider different
    representations for line breaks (tag <br>, \n). 
    To avoid XSS attacks, the highlight.js removes what is not text, eg. <br>
    textContent is used to preserve the line breaks with \n (innerText would convert the \n's back to <br>).
  */
  elCodeText.textContent = code;

  hljs.highlightElement(elCodeText);
}

elBtnVisualizeCode.addEventListener('click', applyHighlight);

// change the color of code border when color picker changes

elInputBackgroundColor.addEventListener('input', function() {
  document.querySelector("#codeBorder").style.borderColor = elInputBackgroundColor.value;
});


elBtnSaveProject.addEventListener('click', function() {
  try {
    const elCodeText = document.querySelector("#codeText");
  
    const codeObj = codeObject(elProjectName.value, elProjectDescription.value, elLanguage.value, elInputBackgroundColor.value, elCodeText.textContent);
  
    const codes = JSON.parse(window.localStorage.getItem('codes')) || [];
    codes.push(codeObj);
    
    window.localStorage.setItem('codes', JSON.stringify(codes));
    location.reload();
  } catch (error) {
    console.log("Error saving the project: " + error);
  }
});

const elCodeText = document.querySelector("#codeText");
elCodeText.addEventListener('paste', function (event) {
  event.preventDefault();
  var text = event.clipboardData.getData('text/plain');
  document.execCommand('insertText', false, text); // to-do cont testar com html css e ver porque está execCommand está riscado, se ok, mover pra outro arquivo, chamar no index.html e comunidade.html também.
});

// var ce = document.querySelector('[contenteditable]')
// ce.addEventListener('paste', function (e) {
//   e.preventDefault()
//   var text = e.clipboardData.getData('text/plain')
//   document.execCommand('insertText', false, text)
// });