document.getElementById("login_btn").onclick = function(){

    username_v = document.getElementById("user_ipt").value;

    if(username_v === ""){
        alert("É necessário informar seu usuário!");
        document.getElementById("username_lbl").innerHTML = "User";
    }else{
        document.getElementById("username_lbl").innerHTML = 'Logado como: ' + '<strong>' + username_v + '</strong>.';
        document.getElementById("user_ipt").value = "";
        document.getElementById("pass_ipt").value = "";
    }

    console.log(username_v);

};


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