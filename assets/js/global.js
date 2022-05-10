const elMenuLinks = document.querySelectorAll(".menu__link");

const lskey = {
  codes: "codes",
  codeId: "codeId"
}

function getLocalStorageCodes(codeId) {
  const codes = JSON.parse(window.localStorage.getItem(lskey.codes)) || [];

  if (codeId) { // select just one "code" object
    let code = [];

    if (Array.isArray(codes) && codes.length > 0) {
      code = codes.filter((code) => {
        return code.codeId == codeId;
      });
    }

    return code;
  }

  return codes;
}

elMenuLinks.forEach(elMenuLink => {
  elMenuLink.addEventListener('click', (event) => {

    window.localStorage.setItem(lskey.codeId, "");
  });
});