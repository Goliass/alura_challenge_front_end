function codeObject(projectName, projectDescription, language, backgroundColor, code) {

  projectName = projectName || Date.now();
  projectDescription = projectDescription || Date.now();
  language = language || "javascript";
  backgroundColor = backgroundColor || "blue";
  code = code || "alert('hello word');";

  const codeObj = {
    projectName,
    projectDescription,
    language,
    backgroundColor,
    code
  }

  return codeObj;
}