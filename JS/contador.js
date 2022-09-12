import {palabrasAzahar} from './diccionario.js';
//combierte la palabra por guiones.
let palabrasG = palabrasAzahar.replace(/./g, " _ ");
console.log(palabrasAzahar);
console.log(palabrasG);
//manipula el Dom para mostrarlo en pantalla.
document.querySelector("#parrafo_dic").innerHTML= palabrasG;


var contadorfallos = 0;

String.prototype.replace=function(index, character) { 
    return (String.substr(0, index) + character + String.substr(index+character.length));
}
//compara la letra ingresada con la propuesta por el user

document.querySelector("#btn").addEventListener('click',()=>{
    let letra = document.querySelector('#input_box').value;
    let letrasErr = []; //Almacena las letras erradas para luego exponerlos en pantalla.
    let fallo= true;

    if(letra !== ""){
        for (let i in palabrasAzahar){
            palabrasG = palabrasG.replace(i*2, letra);
            fallo = false;
        }
    }
    if(fallo){
        contadorfallos++;
         letrasErr.push(letra);
         document.querySelector("#errados").innerHTML=letrasErr;
         document.querySelector("#input_box").value = "";
    }

});