// Helpers
function esPar(numero) {
    return (numero % 2 === 0);
}
// Mediana general
const salariosCOl = colombia.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCOl.sort(
    function(salaryA,salaryB) {
        return salaryA - salaryB;
    }
);

function calcularMediaAritmetica (lista) {
    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;
    
    }

// calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

const medianaGeneralCol =   medianaSalarios(salariosColSorted);

const spliceStart = (salariosColSorted.length * 90 / 100);
const spliceCount = salariosColSorted.length - spliceStart;

// Mediana del top 10%
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);

const medianaTop10Col =  medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
}
    );