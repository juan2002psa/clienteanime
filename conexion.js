//Conectarse con el API

//1. url sel servicio
let url="https://localhost/appisura/public/heroes";

//2. armamos la peticion
let peticion={
    method:"GET"
}

//3. llamar al servidor
fetch(url,peticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(datos){
    pintarHeroes(datos)
})

//funcion para pintar los recursos que trae el appi
function pintarHeroes(datos){

    let fila=document.getElementById("fila");

    datos.map(function(heroe){

        let columna=document.createElement("div");
        columna.classList.add("col");

        let tarjeta=document.createElement("div");
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        let imagen=document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.src=heroe.foto;

        let tarjetaCuerpo=document.createElement("div");
        tarjetaCuerpo.classList.add("card-body");

        let nombre=document.createElement("h3");
        nombre.classList.add("text-center");
        nombre.textContent=heroe.nombre;

        let descripcion=document.createElement("p");
        descripcion.classList.add("text-center");
        descripcion.textContent=heroe.descripcion;

        //pintar (definir hijos)
        tarjetaCuerpo.appendChild(nombre);
        tarjetaCuerpo.appendChild(descripcion);
        
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(tarjetaCuerpo);

        columna.appendChild(tarjeta);

        fila.appendChild(columna);

    });

}
