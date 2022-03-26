function codeObject(projectName, projectDescription, language, backgroundColor, code, codeId) {
 
  projectName = projectName || Date.now();
  projectDescription = projectDescription || Date.now();
  language = language || "javascript";
  backgroundColor = backgroundColor || "blue";
  code = code || "alert('hello word');";

  codeId = codeId || Date.now(); // when NOT inserting a new code card || when inserting a new one

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