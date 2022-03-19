function codeObject(projectName, projectDescription, language, backgroundColor, code) {

  codeId = Date.now();
  projectName = projectName || Date.now();
  projectDescription = projectDescription || Date.now();
  language = language || "javascript";
  backgroundColor = backgroundColor || "blue";
  code = code || "alert('hello word');";

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