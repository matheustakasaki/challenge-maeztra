// Recebe valor inteiro positivo e 
// verifica se os valores estão em ordenação sequencial crescente ou decrescente




const handleIsPositiveInteger = (number) => {
    if (number % 1 === 0 && Math.sign(number) === 1) {

        return true
    } else if (number % 1 === 0 && Math.sign(number) === -1) {

        return false
    } else {
        console.log('É float')

        return false
    }
}

function numberToArray(number) {
    let arr = String(number).split("").map((num) => {
        return Number(num)
    })
    console.log('Array: \n', arr, '\n')
    return arr
}
const numberTest = 1786;
const handleIsOrdenated = (number) => {
    // Se inteiro positivo = true
    let valores = numberToArray(number)

    // Para cada item no array de valores
    let testSequence = []

    valores.forEach((element, index, lista) => {
        // console.log(element, index)

        testSequence.push(element === lista[index + 1] || element === lista[index + 1] - 1 || element === lista[index + 1] + 1)

    });

    testSequence.pop()

    var valoresUnicos = testSequence.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });

    console.log(valoresUnicos)

    if (valoresUnicos) {
        console.log('Está ordenado')
        return 'Está ordenado'
    }
    else {

        console.log('Não está ordenado')
        return 'Não está ordenado'
    }
}

handleIsOrdenated(numberTest)
