
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = `${currentYear}`;

// Get last modified date of the document
document.getElementById("lastModified").innerHTML = `Last modified: ${document.lastModified}`;
