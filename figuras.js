// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + " cm");

function perimetroCuadrado (lado) {
    return lado * 4;
} 
//console.log("El perímetro del cuadrado es:" + perimetroCuadrado + " cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado (lado) {
    return lado * lado;
}
//console.log("El área del cuadrado es:" + areaCuadrado + " cm2");
console.groupEnd();

// Código del triángulo
console.group("Triangulos");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
    "Los lados del triángulo miden:"
     + ladoTriangulo1 
     + " cm, " 
     + ladoTriangulo2 
     + " cm, " 
     + baseTriangulo 
     + " cm"
     );

const alturaTriangulo = 5.5;

console.log("La altura del tiangulo es de:" + alturaTriangulo + " cm");
*/ 
function perimetroTriangulo (lado1,lado2,base) {
    return lado1 + lado2 + base;
}
//console.log("El perímetro del tiangulo es :" + perimetroTriangulo + " cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El área del tiangulo es :" + areaTriangulo + " cm2");

function areaTriangulo (base,altura) {
    return (base * altura) / 2;
}


console.groupEnd();


// Código del triángulo
console.group("Círculos");
//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es:" + radioCirculo + " cm");
// Diametro

function diametroCirculo (radio) {

        return radio*2;

}
//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del circulo es:" + diametroCirculo + " cm");
// Pi
const Pi = Math.PI;
console.log("El PI es:" + Pi + " cm");

//Circunferencia

function perimetroCirculo(radio) {

    const diametro = diametroCirculo(radio);

    return diametro * Pi;

}

//const perimetroCirculo = diametroCirculo * Pi;
//console.log("El perímetro del circulo es:" + perimetroCirculo + " cm");

//Área

function areaCirculo(radio) {

    return (radio * radio) * Pi;
}
/*
const areaCirculo = (radioCirculo * radioCirculo) * Pi;
console.log("El área del circulo es:" + areaCirculo + " cm");
*/

console.groupEnd();

// AQUI INTERACTUAMOS CON EL HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}