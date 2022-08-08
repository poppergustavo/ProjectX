// VERSION
var version = "0.1-5.1"
document.getElementById("version_id").innerHTML = "Version " + version + "<strong> DEV</strong>";

// login
document.getElementById("login_btn").onclick = function(){

    username_v = document.getElementById("user_ipt").value;
    password_v = document.getElementById("pass_ipt").value;

    if(username_v === "" || password_v === ""){
        alert("User and password required to proceed!");
        document.getElementById("username_lbl").innerHTML = "User";
    }else{
        document.getElementById("username_lbl").innerHTML = 'Logado como: ' + '<strong>' + username_v + '</strong>.';
        document.getElementById("user_ipt").value = "";
        document.getElementById("pass_ipt").value = "";

        document.getElementById("nav_btns").style.display = "flex";
        document.getElementById("login_div").style.display = "none";

        document.getElementById("main").style.backgroundColor = '#67AD9B';
        document.getElementById("main").style.transition = "3s";

        document.getElementById("username_lbl").style.color = "#fff"

        document.getElementById("main_img").style.display = "flex";
        document.getElementById("main_img").style.alignContent = "center";
    }
};
// login

// CLOCK
window.setInterval(function(){

    var hora_atual = new Date();
    var hora = hora_atual.getHours();
    var min = hora_atual.getMinutes();
    var seg = hora_atual.getSeconds();

    function format_time(time){
        if(time >= 0 && time <= 9){
            var formatted_time = time.toString();
            formatted_time = "0" + formatted_time;
        }else{
            return formatted_time;
        }
    }

    document.getElementById("main_clock").innerHTML = hora.toString() + ":" + min.toString() + ":" + seg.toString();

    if (seg < 10){
        document.getElementById("main_clock").innerHTML = hora.toString() + ":" + min.toString() + ":0" + seg.toString(); 
    }

    if (min < 10 && seg < 10){
        document.getElementById("main_clock").innerHTML = hora.toString() + "0:" + min.toString() + ":0" + seg.toString(); 
    }},1000);