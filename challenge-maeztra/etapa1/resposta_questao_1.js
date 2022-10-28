
// Função para transormar o número recebido em um array. Dessa maneira, é possível iterar sob os itens e compará-los
function handleNumberToArray(number) {
    let arr = String(number).split("").map((num) => {
        return Number(num)
    })
    console.log('Array: \n', arr, '\n')
    return arr
}
function handleInteiro(numeros) {
    const listaNum = handleNumberToArray(numeros);


    // Array que armazenará os tipos de ordenação existentes dentro do array
    let resultado = []

    /*
    Este loop itera sob o tamanho do array -1 pois buscará o sucessor para cada item dentro do array.
    */

    for (let index = 0; index < listaNum.length - 1; index++) {

        // Elemento atual,
        let element = listaNum[index]

        // Elemento da próxima posição no array
        let nextElement = listaNum[index + 1]

        // Realiza as comparações entre o item e seu sucessor
        if (element === nextElement - 1) {
            resultado.push('crescente')
        } else if (element === nextElement + 1) {
            resultado.push('decrescente')
        }
        else if (element === nextElement) {
            resultado.push('igual');
        } else {
            resultado.push('fora de ordem')
        }

        /*
            No laço condicional estou comparando quais os tipos de ordenação existem no array atual e armazenando essa informação em outra variável.
        */

    }

    // Variável que remove os itens duplicados do array resultado e me diz quais os tipos de ordenação existentes.
    const resultadoFiltrado = [... new Set(resultado)]

    // Função comparativa que me diz se o array inclui vários tipos de ordenação ao mesmo tempo 
    function includesAll(arr, ...items) {
        for (const item of items) {
            if (!arr.includes(item)) {
                return false;
            }
        }
        return true;
    }

    /*
        Este laço condicional verifica se existem no array filtrado os tipos de ordenação inválida e retorna uma resposta.
    */
    if (
        includesAll(resultadoFiltrado, 'crescente', 'igual', 'decrescente') || resultadoFiltrado.includes('fora de ordem') || includesAll(resultadoFiltrado, 'crescente', 'decrescente')
    ) {
        console.log('Não está ordenada')
    } else (
        console.log('Está ordenado')
    )

}

handleInteiro(123454321);