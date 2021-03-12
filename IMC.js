let nombre="Jose Alvaro";
let peso = 200;
let altura = 1.87;

let imc = peso / (altura * altura);

function calculaimc(){
    if (imc < 18.5){
 console.log("tu peso es insuficiente");
}else if (imc <= 18.5 && 24.9 <= imc){
    console.log("tu peso es Normopeso");
}else if (imc <= 25 && 26.9 <= imc){
    console.log("tu peso es Sobrepeso grado I")
}else if (imc <= 27 && 29.9 <= imc){ 
    console.log("tu peso es Sobrepeso grado II (preobesidad)");
}else if (imc <= 30 && 34.9 <= imc){
    console.log("tu peso es Obesidad de tipo I");
}else if (imc <= 35 && 39.9 <= imc){ 
    console.log("tu peso es Obesidad de tipo II");
}else if (imc <= 40 && 49.9 <= imc){
    console.log("tu peso es Obesidad de tipo III (morbida)");
}else if (imc > 50){
console.log("tu peso es Obesidad de tipo IV(Maxima)");
}

}

calculaimc();{
     console.log("Señor: " + nombre + " tu IMC es de: " + imc );
}