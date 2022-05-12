/**
 * 
 * @param {*} projectName 
 * @param {*} projectDescription 
 * @param {*} language 
 * @param {*} backgroundColor 
 * @param {*} code 
 * @param {*} codeId Unique code card ID. Pass it when NOT inserting a new code card
 * @returns a code card object
 */
function codeObject(projectName, projectDescription, language, backgroundColor, code, codeId) {
 
  projectName = projectName || Date.now();
  projectDescription = projectDescription || Date.now();
  language = language || "javascript";
  backgroundColor = backgroundColor || "blue";
  code = code || "alert('hello word');";

  codeId = codeId || Date.now() + ''; // when NOT inserting a new code card || when inserting a new one

  const codeObj = {
    codeId,
    projectName,
    projectDescription,
    language,
    backgroundColor,
    code
  }

  return codeObj;
}