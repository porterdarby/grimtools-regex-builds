function add_to_select(select, value){
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    select.add(option);
}

function fill_values(){
    let source_damage_type = document.getElementById("source_damage_type");
    all_damage_types.forEach(damage_type => add_to_select(source_damage_type, damage_type.name));

    let class_1 = document.getElementById("class_1");
    let class_2 = document.getElementById("class_2");
    all_classes.forEach(obj => add_to_select(class_1, obj.class_name))
    all_classes.forEach(obj => add_to_select(class_2, obj.class_name))
}

function add_skill_to_available_list(parent_div, skill) {
    let skill_div = document.createElement("div")
    let name = document.createTextNode(skill.name)
    skill_div.appendChild(name)
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = skill.name
    checkbox.tag = "available_skills"
    skill_div.appendChild(checkbox)
    parent_div.appendChild(div)
}

function create_div_for_skill(skills_class_div, skill){
    let div = document.createElement("div")
    add_skill_to_available_list(div, skill);
    skill.class_skills.forEach(dependent_skill => add_skill_to_available_list(div, dependent_skill))
    skills_class_div.appendChild(div)
}

function fill_skills_div(skills_class_div, class_select) {
    let selected_class = class_select.value;
    let skills = get_skills_for_class(selected_class)
    console.log(selected_class)
    console.log(skills)
    skills.forEach(skill => create_div_for_skill(skills_class_div, skill))
}

function fill_skills(){
    fill_skills_div(document.getElementById("skills_class_1"), document.getElementById("class_1"))
    fill_skills_div(document.getElementById("skills_class_2"), document.getElementById("class_2"))
}