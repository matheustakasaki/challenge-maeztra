function numberToArray(number) {
    let arr = String(number).split("").map((num) => {
        return Number(num)
    })
    console.log('Array: \n', arr, '\n')
    return arr
}
function handleInteiro(numeros) {
    const listaNum = numberToArray(numeros);

    let resultado = []
    for (let index = 0; index < listaNum.length; index++) {

        // para o elemento atual,
        let element = listaNum[index]
        let nextElement = listaNum[index + 1]
        if (element === nextElement - 1) {
            resultado.push('crescente')
        } else if (element === nextElement + 1) {
            resultado.push('decrescente')
        }
        else if (element === nextElement) {
            resultado.push('igual');
        }
    }

    console.log(resultado)
    const r = [... new Set(resultado)]

    console.log(r)

    function includesAll(arr, ...items) {
        for (const item of items) {
            if (!arr.includes(item)) {
                return false;
            }
        }
        return true;
    }

    console.log(includesAll(r, 'crescente', 'igual', 'decrescente') ? 'Não está ordenada' : 'Está ordenada')

}

handleInteiro(152456457);