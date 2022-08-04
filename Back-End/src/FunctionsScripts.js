// SUMIR CONTEUDO

document.getElementById("functions_btn").onclick = function(){

    document.getElementById("main_img").style.display = "none";
    document.getElementById("adm_div").style.display = "none";
    document.getElementById("rcrd_div").style.display = "none";
    document.getElementById("db_div").style.display = "none";

    document.getElementById("functions_div").style.display = "flex";
    
    document.getElementById("default_main_div").style.display = "flex";

};

document.getElementById("adm_btn").onclick = function(){

    document.getElementById("main_img").style.display = "none";
    document.getElementById("functions_div").style.display = "none";
    document.getElementById("rcrd_div").style.display = "none";
    document.getElementById("db_div").style.display = "none";

    document.getElementById("adm_div").style.display = "flex";

    document.getElementById("default_main_div").style.display = "flex";

};

document.getElementById("rcrd_btn").onclick = function(){

    document.getElementById("main_img").style.display = "none";
    document.getElementById("adm_div").style.display = "none";
    document.getElementById("functions_div").style.display = "none";
    document.getElementById("db_div").style.display = "none";

    document.getElementById("rcrd_div").style.display = "flex";

    document.getElementById("default_main_div").style.display = "flex";

};

document.getElementById("db_btn").onclick = function(){

    document.getElementById("main_img").style.display = "none";
    document.getElementById("adm_div").style.display = "none";
    document.getElementById("functions_div").style.display = "none";
    document.getElementById("rcrd_div").style.display = "none";

    document.getElementById("db_div").style.display = "flex";

    document.getElementById("default_main_div").style.display = "flex";

};