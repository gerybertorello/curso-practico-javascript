// Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}  
function areaCuadrado(lado){
   return lado* lado;
}
console.groupEnd();

// Codigo del triangulo
console.group("Triangulo");
function perimetroTriangulo(base,lado1,lado2) {
    return (base+lado1+lado2);
}  
function areaTriangulo(base,altura) {
    return (base*altura)/2;
}  

console.groupEnd();
// Codigo del cuadrado

//Interactuamos con Html
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};
function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

function calcularAlturaTriaangulo(base,lado1,lado2) {
    if (lado1===lado2 && lado1 !=base) {
        alert("es isoceles")
        const alturaTriangulo = Math.sqrt(lado1**2 - base**2)
        console.log(altura);
    } else{
        alert("no es isoceles")
    }
}