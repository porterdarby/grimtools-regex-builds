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
    all_skills.forEach(obj => add_to_select(class_1, obj.class_name));
    all_skills.forEach(obj => add_to_select(class_2, obj.class_name));
}

function add_skill_to_available_list(parent_div, skill) {
    let skill_div = document.createElement("div");
    skill_div.style.display = "inline-block";
    skill_div.style.border = "1px";
    let name = document.createTextNode(skill.name);
    skill_div.appendChild(name);
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.id = skill.name;
    checkbox.tag = "available_skills";
    checkbox.checked = skill.default;
    skill_div.appendChild(checkbox);
    parent_div.appendChild(skill_div);
}

function create_div_for_skill(skills_class_div, skill){
    let div = document.createElement("div")
    add_skill_to_available_list(div, skill);
    skill.skills.forEach(dependent_skill => add_skill_to_available_list(div, dependent_skill));
    skills_class_div.appendChild(div);
}

function fill_skills_div(skills_class_div_id, class_name) {
    if (class_name !== ""){
        let skills_class_div = document.getElementById(skills_class_div_id);
        skills_class_div.innerHTML = "";
        let skills = get_skills_for_class(class_name);
        skills.forEach(skill => create_div_for_skill(skills_class_div, skill));
    }
}

function fill_skills(){
    let class_name_1 = document.getElementById("class_1").value;
    let class_name_2 = document.getElementById("class_2").value;
    fill_skills_div("skills_class_1", class_name_1);
    fill_skills_div("skills_class_2", class_name_2);
}