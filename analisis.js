//funciones helpers
function esPar(numerito) {
    return (numerito % 2 ===0);
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//calculadora de Medianas
function medianaSalariosCol(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2,]);
    return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


// mediana General
const salariosColombia = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosColombia.sort(
    function(salaryA,salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

//mediana del Top 10 

const spliceStar = (salariosColSorted.length * (100-10)/100);
const spliceCount = salariosColSorted.length - spliceStar;

const salariosColTop10 = salariosColSorted.splice(spliceStar, spliceCount);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
})