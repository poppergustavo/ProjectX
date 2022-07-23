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

console.log("testing");