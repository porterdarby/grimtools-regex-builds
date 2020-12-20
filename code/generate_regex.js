
classes = fetch("../database/classes.json")
  .then(response => response.json())

console.log(classes)


skills = fetch("../database/skills.json")
  .then(response => response.json())

console.log(skills)