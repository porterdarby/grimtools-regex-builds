function add_to_select(select, value){
    let option = document.createElement("option");
    option.text = value;
    option.value = value;
    select.add(option);
}

function fill_values(){
    let source_damage_type = document.getElementById("source damage type");
    damage_types.forEach(damage_type => add_to_select(source_damage_type, damage_type.name));

    let class_1 = document.getElementById("class 1");
    let class_2 = document.getElementById("class 2");
    Object.entries(classes).forEach(([key, value]) => add_to_select(class_1, key))
    Object.entries(classes).forEach(([key, value]) => add_to_select(class_2, key))
}

fill_values();