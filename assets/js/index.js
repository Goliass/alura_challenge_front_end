document.querySelector("#elEditorMenuOption").classList.add("active");
const elCodeWrapper = document.querySelector("#codeWrapper");

const elBtnVisualizeCode = document.querySelector("#btnVisualizeCode");


const elProjectName = document.querySelector("#projectName");
const elProjectDescription = document.querySelector("#projectDescription");
const elLanguage = document.querySelector("#language");
const elInputBackgroundColor = document.querySelector("#inputBackgroundColor");

const elBtnSaveProject = document.querySelector("#btnSaveProject");

// functions
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

function renderCodeCard(code) {
  if (code) {
    elProjectName.value = code.projectName;
    elProjectDescription.value = code.projectDescription;
    elLanguage.value = code.language;
    elInputBackgroundColor.value = code.backgroundColor;
    changeBorderColor(elInputBackgroundColor.value);
    elCodeText.textContent = code.code;
  }
}

function loadCodeCard() {
  const codeId = getLocalStorageCodeId();

  if (codeId) {
    const codeArr = getLocalStorageCodes(codeId);

    if (codeArr && codeArr.length > 0) {
      const code = codeArr[0];
      const codeObj = codeObject(code.projectName, code.projectDescription, code.language, code.backgroundColor, code.code);

      renderCodeCard(codeObj);
    }
  }
}

function changeBorderColor(color) {
  document.querySelector("#codeBorder").style.borderColor = color;
}

elBtnVisualizeCode.addEventListener('click', applyHighlight);

// change the color of code border when color picker changes
elInputBackgroundColor.addEventListener('input', function() {
  changeBorderColor(elInputBackgroundColor.value);
});


elBtnSaveProject.addEventListener('click', function() {
  try {
    const elCodeText = document.querySelector("#codeText");
    const codeId = getLocalStorageCodeId();
  
    const codeObj = codeObject(elProjectName.value, elProjectDescription.value, elLanguage.value, elInputBackgroundColor.value, elCodeText.textContent, codeId);
  
    const codes = getLocalStorageCodes();

    if (codeId) {
      const index = codes.findIndex((code, index, array) => {
        return code.codeId == codeId;
      });

      if (index >= 0) { // code card update (through replacement)
        codes[index] = codeObj;
        setLocalStorageCodeId("");
      }
    } else { // new code card
      codes.push(codeObj);
    }
    
    if (codes && codes.length > 0) {
      window.localStorage.setItem(lskey.codes, JSON.stringify(codes));
      location.reload();
    }
  } catch (error) {
    console.log("Error saving the code card: " + error);
  }
});

const elCodeText = document.querySelector("#codeText");
elCodeText.addEventListener('paste', function (event) {
  event.preventDefault();
  var text = event.clipboardData.getData('text/plain');
  document.execCommand('insertText', false, text);
});

loadCodeCard();
applyHighlight();