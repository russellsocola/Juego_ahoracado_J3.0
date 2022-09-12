import { palabrasAzahar } from "./master.js";

let palabrasG = palabrasAzahar.replace(/./g, "_");

document.querySelector("#parrafo_dic").innerHTML= palabrasG;
let letrasErr = []; //Almacena las letras erradas para luego exponerlos en pantalla.
let contadorFallos = 0;
