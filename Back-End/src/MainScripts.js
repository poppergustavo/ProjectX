document.getElementsByClassName("login_btn").onclick = function(){

    console.log("test");

    var username_v = document.getElementsByClassName("user_ipt").value;
    document.getElementById("username_lbl").innerHTML = username_v;

};