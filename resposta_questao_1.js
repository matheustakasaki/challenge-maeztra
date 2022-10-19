// Recebe valor inteiro positivo e 
// verifica se os valores estão em ordenação sequencial crescente ou decrescente


const numberTest = 152456457;

const handleIsPositiveInteger = (number) => {
    if (number % 1 === 0 && Math.sign(number) === 1) {
        console.log('É inteiro positivo')
        return true
    } else if (number % 1 === 0 && Math.sign(number) === -1) {
        console.log('É Inteiro negativo')
        return false
    } else {
        console.log('É float')

        return false
    }
}

const handleIsOrdenated = (number) => {

    // Se inteiro positivo = true
    const nTeste = handleIsPositiveInteger(number)

    // Converto para string
    const sequence = number.toString();
    const sequenceArr = Array.from(sequence)
    function compararNumeros(a, b) {
        return a - b;
    }

    sequenceArr.forEach((element, index, array) => {
        console.log(element)
    })

}

handleIsOrdenated(numberTest)
