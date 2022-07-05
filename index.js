//una version mas sofisticada del conversor entregado en el primer desafio
//cm = 0.00846;
//px = 118.11;
function conversor(num1, medidaAConvertir){
    switch(medidaAConvertir){
        case "a":
        return num1 * 0.00846;

        case "b":
        return num1 * 118.11;

        default:
        return 0;
    
    }
}

let num1 = parseInt(prompt("Cantidad de pixeles o centimetros a convertir?"));
let medidaAConvertir = prompt("Ingrese la letra correspondiente a la operacion que quiere realizar: a) pixeles a centimetros b) centimetros a pixeles");
let resultado = conversor(num1, medidaAConvertir);
alert(`el resultado es ${resultado}`);