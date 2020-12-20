function add_to_select(select_id, value){
    let select = document.getElementById(select_id);
    let option = document.createElement("option");
    option.text = value;
    select.add(option);
}

function fill_values(){
    
    direct_damage_types.forEach(damage_type => add_to_select("source damage type", damage_type));
    dot_damage_types.forEach(damage_type => add_to_select("source damage type", damage_type));
}

fill_values();