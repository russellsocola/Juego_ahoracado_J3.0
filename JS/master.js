let diccionario = [
    "PROGRAMADOR",
    "DEVELOPER",
    "JAVASCRIPT",
    "AHORACADO",
    "JAVA",
    "HTML",
    "CSS",
    "PROGRAMACION",
    "PERRO",
    "GATO",
    "LORO",
    "CODING",
    "SQL",
];

export let palabrasAzahar = diccionario[Math.floor(Math.random()*diccionario.length)];//Extraigo una palabra del diccionario.

document.querySelector("#btn_add").addEventListener("click", ()=>{
    let palabra = document.querySelector("#inputnew").value;
    if(palabra!== ""){
        if (diccionario.indexOf(palabra) === -1) {
                    diccionario.push(palabra);
                    console.log(diccionario);
                    let ve= "La palabra "+palabra+" se añadio con exito. ";
                    document.querySelector("#inputnew").value = '';
                    document.querySelector("#verificado").innerHTML= ve;
                    document.querySelector("#inputnew").innerHTML= '';
                } else if (diccionario.indexOf(palabra) > -1) {
                    let err = "La palabra: " + palabra + " ya existe en el diccionario";
                    document.querySelector('#verificado').innerHTML= err;
                    document.querySelector('#inputnew').innerHTML= '';
                }
        }else{
            alert("No ingrese espacios en blanco.");
        };
});

document.querySelector('#agregar').addEventListener('click', ()=>{
    document.querySelector("#box_newP").style.display="block";
});



function ocultar(){
    document.querySelector("#box_newP").style.display="none";
}