
let name = sessionStorage.getItem("username");
let score= sessionStorage.getItem("points");
let time= sessionStorage.getItem("time");

document.getElementById("user_name").innerHTML=name;

document.getElementById("score").innerHTML=score;

document.getElementById("finish").innerHTML = time;
