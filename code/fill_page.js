function add_to_select(select, value){
    let option = document.createElement("option");
    option.text = value;
    select.add(option);
}

function fill_values(){
    let source_damage_type = document.getElementById("source damage type");
    direct_damage_types.forEach(damage_type => add_to_select(source_damage_type, damage_type));
    dot_damage_types.forEach(damage_type => add_to_select(source_damage_type, damage_type));
}

fill_values();