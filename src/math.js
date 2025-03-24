/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    // TODO: Insira seu código funcional aqui
    return numeros
        .filter(numero1 => numero1 % 2 === 0) //Filtrando somente os números pares
        .map(numero2 => numero2 * 2) //Multiplicando cada número por 2
        .reduce((soma, numero3) => soma + numero3, 0) // Soma total
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    // TODO: Insira seu código estruturado aqui
    let soma = 0;
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            soma += numeros[i] * 2;
        }
    }
    return soma;
}

export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
