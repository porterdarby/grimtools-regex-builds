let classes;

fetch("../database/classes.json")
  .then(response => response.json())
  .then(json => classes = json);

console.log(classes)

let skills;

fetch("../database/skills.json")
  .then(response => response.json())
  .then(json => skills = json);

console.log(skills)