let classes;

fetch("../database/classes.json")
  .then(response => response.json())
  .then(json => classes = json)
  .catch(function(err) {
      console.log(err);
  })

console.log(classes)

let skills;

fetch("../database/skills.json")
  .then(response => response.json())
  .then(json => skills = json)
  .catch(function(err) {
      console.log(err);
  })

console.log(skills)