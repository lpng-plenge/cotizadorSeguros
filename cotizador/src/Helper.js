
// funcion de restar años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear()- year;
}

// calcular el total a pagar segun la marca
export function calcularMarca(marca){
    let incremento;
    switch(marca){
        case 'Europeo':
            incremento = 1.3;
            break;
        ;
        case 'Americano':
            incremento = 1.15;
            break;
        ;
        case 'Asiatico':
            incremento = 1.05;
            break;
        ;       

        default: break;
    }
    return incremento;
}

// calcular tipo de seguro
export function calcularPlan(plan){
    // como son solo dos opciones hacemos un alternario
    return (plan === 'basico') ? 1.20 : 1.5;
}

// muestra la primera letra en mayuscula con  
export function PrimeraMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}