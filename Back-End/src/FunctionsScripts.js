// SUMIR CONTEUDO

document.getElementById("functions_btn").onclick = function(){

    document.getElementById("main_img").style.display = "none";

    document.getElementById("new_purchase_planner").style.display = "block";
    document.getElementById("new_purchase").style.display = "block";
    document.getElementById("new_report").style.display = "block";
    document.getElementById("alerts").style.display = "block";
    document.getElementById("db_search").style.display = "none";

    document.getElementById("functions_div").style.display = "flex";
    document.getElementById("default_main_div").style.display = "flex";

};

document.getElementById("adm_btn").onclick = function(){

    document.getElementById("main_img").style.display = "none";

    document.getElementById("new_purchase_planner").style.display = "block";
    document.getElementById("new_purchase").style.display = "block";
    document.getElementById("new_report").style.display = "block";
    document.getElementById("alerts").style.display = "none";
    document.getElementById("db_search").style.display = "none";

    document.getElementById("functions_div").style.display = "flex";
    document.getElementById("default_main_div").style.display = "flex";

};

document.getElementById("rcrd_btn").onclick = function(){

    document.getElementById("main_img").style.display = "none";

    document.getElementById("new_purchase_planner").style.display = "none";
    document.getElementById("new_purchase").style.display = "none";
    document.getElementById("new_report").style.display = "none";
    document.getElementById("alerts").style.display = "block";
    document.getElementById("db_search").style.display = "none";

    document.getElementById("functions_div").style.display = "flex";
    document.getElementById("default_main_div").style.display = "flex";

};

document.getElementById("db_btn").onclick = function(){

    document.getElementById("main_img").style.display = "none";

    document.getElementById("new_purchase_planner").style.display = "none";
    document.getElementById("new_purchase").style.display = "none";
    document.getElementById("new_report").style.display = "none";
    document.getElementById("alerts").style.display = "none";
    document.getElementById("db_search").style.display = "block";

    document.getElementById("functions_div").style.display = "flex";
    document.getElementById("default_main_div").style.display = "flex";

};