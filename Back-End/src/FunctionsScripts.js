function hide_content(){
    document.getElementById("main_img").style.display = "none";
    document.getElementById("new_purchase_planner").style.display = "none";
    document.getElementById("new_purchase").style.display = "none";
    document.getElementById("new_report").style.display = "none";
    document.getElementById("alerts").style.display = "none";
    document.getElementById("db_search").style.display = "none";
    document.getElementById("general_records").style.display = "none";
    document.getElementById("prices").style.display = "none";
    document.getElementById("user_registration").style.display = "none";
    document.getElementById("user_func").style.display = "none";
    document.getElementById("functions_div").style.display = "none";
    document.getElementById("default_main_div").style.display = "none";
    document.getElementById("new_purchase_planner_func").style.display = "none";
    document.getElementById("user_registration_func").style.display = "none";
};

function show_functions(){
    document.getElementById("new_purchase_planner").style.display = "block";
    document.getElementById("new_purchase").style.display = "block";
    document.getElementById("new_report").style.display = "block";
    document.getElementById("alerts").style.display = "block";

    document.getElementById("functions_div").style.display = "flex";
    document.getElementById("default_main_div").style.display = "flex";
};

function show_adm(){
    document.getElementById("user_registration").style.display = "block";
    document.getElementById("user_func").style.display = "block";

    document.getElementById("functions_div").style.display = "flex";
    document.getElementById("default_main_div").style.display = "flex";
};

function show_records(){
    document.getElementById("general_records").style.display = "block";
    document.getElementById("prices").style.display = "block";

    document.getElementById("functions_div").style.display = "flex";
    document.getElementById("default_main_div").style.display = "flex";
};

function show_db(){
    document.getElementById("db_search").style.display = "block";

    document.getElementById("functions_div").style.display = "flex";
    document.getElementById("default_main_div").style.display = "flex";
};

// NAVBAR BUTTONS{
document.getElementById("functions_btn").onclick = function(){
    hide_content();
    show_functions();
};

document.getElementById("adm_btn").onclick = function(){
    hide_content();
    show_adm();
};

document.getElementById("rcrd_btn").onclick = function(){
    hide_content();
    show_records();
};

document.getElementById("db_btn").onclick = function(){
    hide_content();
    show_db();
};
// NAVBAR BUTTONS}


// FUNCTIONS BUTTONS
document.getElementById("new_purchase_planner").onclick = function(){
    hide_content();

    document.getElementById("default_main_div").style.display = "flex";
    document.getElementById("new_purchase_planner_func").style.display = "block";
};

document.getElementById("user_registration").onclick = function(){
    hide_content();

    document.getElementById("default_main_div").style.display = "flex";
    document.getElementById("user_registration_func").style.display = "block";
};
// FUNCTIONS BUTTONS