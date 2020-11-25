let movimiento = document.querySelector("#movimiento");
let obj2 = document.querySelector("#obj2");
obj2.style.transform = `translate(0px, 449px)`;
function cambiarColor(){
//Es una función par crear colores aletaorios
    movimiento.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
    obj2.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);//javascript convierte de base decimal a base 16 con ese comando
 }

 let x = 0;
 let dX = 25;
 let y = 0;
 let dY = 10;
 let angle = 0;
 let dAngle = 5;
 let x2 = 0;
 let x20= 0;
 let y2 =0;
 let y20 = 449;
 let vY0 = -130;
 let vX = 150;
 let t = 0;
 let a = 20;
function mover(){
    if(y<450 ){ 
        x = x + dX;
        y = y + dY;
        angle = angle + dAngle;
        movimiento.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
    }else{
        x = x - dX;
        y = 0;
        angle = angle + dAngle;
        movimiento.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
    }
    t+= 0.1;
    x2 = x20 + vX*t;
    y2 = y20 + vY0*t + (a*Math.pow(t,2))/2;
    angle = angle + dAngle;
    obj2.style.transform = `translate(${x2}px, ${y2}px) rotate(${angle}deg)`;
}

let idMovimiento;
let idColor;
let corriendo = false;
function start(){
     corriendo = true;
    idMovimiento = window.setInterval(mover,100);
    //setInterval> ejecuta una función cada cierto tiempo. El tiempo se debe escribir e milisegundos
    idColor = window.setInterval(cambiarColor,30);   
}
function stop(){
    window.clearInterval(idMovimiento);
    window.clearInterval(idColor);
    corriendo = false;
}
window.onkeydown = function (evento){
    if(evento.key == "w"){
        if(corriendo)stop();
        else start();
    }
};
