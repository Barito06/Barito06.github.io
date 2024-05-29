let arregloFotos = ["/imagenes/primera.jpg", "/imagenes/Segunda.jpg", "/imagenes/Tercera.jpg", "/imagenes/Cuarta.jpg", "/imagenes/Quinta.jpg"]
let contador = 0;

function volver(){
    /*si el contador es mayor a 0,le restamos 1 y 
    mostramos la imagen que esta en la posicion del contador.
    Sino mostramos la ultima posicion del arreglo restandole 1 a la cantidad
    total de elementos y asignando esta cantidad al contador.
    */
    if(contador>0){
        contador--;
    }else{
        contador = arregloFotos.length -1;
    }
    imgObservada();
}
function avanzar(){
/*
Si el contador es menor que la cantidad total de elementos en el arreglo, le sumamos uno al contador.
Sino, asignamos la posicion 0 al contador.
Finalmente mostramos la imagen.
*/

    if(contador < arregloFotos.length - 1){
        contador++;
    }else{
        contador = 0;
    }
    imgObservada();
}
function imgObservada(){ 
    //obtenemos la foto mostrada en el carrousel y le reasignamos el valor del contador.
    let foto_Mostrada = document.getElementById("foto_Mostrada");
    foto_Mostrada.src = arregloFotos[contador];
}