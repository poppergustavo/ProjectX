// VERSION
var version = "0.1-3"





// login
document.getElementById("login_btn").onclick = function(){

    username_v = document.getElementById("user_ipt").value;

    if(username_v === ""){
        alert("É necessário informar seu usuário!");
        document.getElementById("username_lbl").innerHTML = "User";
    }else{
        document.getElementById("username_lbl").innerHTML = 'Logado como: ' + '<strong>' + username_v + '</strong>.';
        document.getElementById("user_ipt").value = "";
        document.getElementById("pass_ipt").value = "";

        document.getElementById("nav_btns").style.display = "flex";
        document.getElementById("login_div").style.display = "none";

        document.body.style.backgroundColor = '#67AD9B';
        document.body.style.transition = "3s";

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

    },1000);
    // 


    document.getElementById("version_id").innerHTML = "Version " + version + "<strong> DEV</strong>";
    document.body.style.backgroundColor = '#467469';
    document.body.style.color = '#ffffff';