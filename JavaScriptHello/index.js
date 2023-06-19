
let a = 0;


document.getElementById("counter").innerHTML = a;
// document.getElementById("p1").innerHTML = "Hello " + fname;
document.getElementById("increase").onclick = function(){
    
    a = Number(a)
    a++;

    document.getElementById("counter").innerHTML = a;
}


document.getElementById("reset").onclick = function(){
    
    a = Number(a)
    a = 0;

    document.getElementById("counter").innerHTML = a;
}


document.getElementById("decrease").onclick = function(){
    
    a = Number(a)
    a--;

    document.getElementById("counter").innerHTML = a;
}



