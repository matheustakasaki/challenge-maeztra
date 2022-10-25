function handleNumberToArray(number) {
    let arr = String(number).split("").map((num) => {
        return Number(num)
    })
    return arr
}
function countItems(arr) {
    const countMap = Object.create(null);

    for (const element of arr) {
        // Basicamente, estamos dizendo: atribua à `countMap[element]` o valor
        // atual (ou zero, caso não existir) somado ao número 1.
        countMap[element] = (countMap[element] || 0) + 1;
    }

    return countMap;
}


function contar(arr, elemento) {
    const countMap = Object.create(null);
    for (let i = 0; i < arr.length; i++) {

        if (arr.includes(elemento)) {
            countMap[elemento] = (countMap[elemento] || 0) + 1;
        }

    }

    return countMap;
}
function contarOcorrencias(arr) {

    let duplos = [
        {
            'numero': '',
            'ocorrencias': 0
        }
    ]
    const countMap = Object.create(duplos);

    for (let i = 0; i < arr.length; i++) {
        let arrItem = handleNumberToArray(arr[i]);

        console.log(arrItem);

        for (let j = 0; j < arrItem.length; j++) {

            console.log('Itens comparados: ', arr[i], '=', arr[j])
            // countMap[arr[i]] = (countMap[arr[j]] || 0) + 1;
            if (arrItem[j] === arr[i]) {
                duplos.push(arrItem[j])
            }
        }
    }

    console.log(duplos)

}

console.log(contarOcorrencias([4, 5, 44, 98, 4, 5, 6]))

