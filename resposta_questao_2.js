// Função para tornar um número em um array
function handleNumberToArray(number) {
    let arr = String(number).split("").map((num) => {
        return Number(num)
    })
    return arr
}


function handleRemoveClones(arr) {
    const itemCount = Object.create(null);


    // Itera sobre o array recebido
    for (let i = 0; i < arr.length; i++) {

        // Converte o número da posição atual em um array. Desta maneira, é possível diferenciarmos os dígitos
        let arrItem = handleNumberToArray(arr[i]);

        // Itera sob o array convertido e conta as ocorrências de cada número
        for (const item of arrItem) {
            // A linha abaixo quer dizer: atribua à `itemCount[item]` o valor
            // atual (ou zero, caso não existir) somado ao número 1.
            itemCount[item] = (itemCount[item] || 0) + 1;
        }
    }

    // Gera um array de objetos com para cada número e sua respectiva quantidade de ocorrências no array
    let numbersObject = Object.entries(itemCount).map(([value, count]) => ({
        numero: value,
        quantidade: count
    }))


    // Array que contém itens duplicados 
    let filteredNumbers = numbersObject.filter(item => item.quantidade >= 2 ? item.numero : '').map(item => item.numero)


    return filteredNumbers


}

console.log(handleRemoveClones([4, 5, 44, 98, 4, 5, 6]))

