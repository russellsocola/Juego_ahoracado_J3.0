import {palabrasAzahar} from './diccionario.js';
//combierte la palabra por guiones.
var palabrasG = palabrasAzahar.replace(/./g,"_ ");
var letrasErradas = [];
var contadorfallos = 0;
console.log(palabrasAzahar);
console.log(palabrasG);
//manipula el Dom para mostrarlo en pantalla.
document.querySelector('#parrafo_dic').innerHTML= palabrasG;
//compara la letra ingresada con la propuesta por el user

String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); }//Mediante el metodo substring extraemos la palabra 

document.querySelector('#btn').addEventListener("click",()=>{
    let letra = document.querySelector('#input_box').value;
    let fallo = true;
    if(letra !== ""){
        for ( let i in palabrasAzahar){
            if(letra == palabrasAzahar[i]){
                palabrasG = palabrasG.replaceAt(i*2, letra);
                fallo = false;
            }
        }
        if(palabrasG.indexOf("_")==-1){
            document.querySelector("#ganaste").style.display="flex";

        }
        if(fallo){
            contadorfallos ++;
            letrasErradas.push(letra,);
            document.querySelector('#letraserr').innerHTML= letrasErradas;
            document.querySelector('#input_box').value= "";
            document.querySelector(".img").style.
            backgroundPosition = -(202*contadorfallos)+ "px 0";
            if(contadorfallos === 4){
                document.querySelector("#perdiste").style.display="flex";
                
            };
        };

        document.querySelector('#parrafo_dic').innerHTML= palabrasG;
        document.querySelector('#input_box').value= ""; 
        document.querySelector('#input_box').focus();
    }if(letra == ''){
        alert('No ingrese espacios en blanco');
    }
});

document.querySelector("#reiniciar").addEventListener('click',()=>{
    document.querySelector("#perdiste").style.display="none";
    location.href= location.href;
});

document.querySelector("#reiniciar2").addEventListener('click',()=>{
    document.querySelector("#ganaste").style.display="none";
    location.href= location.href;
});