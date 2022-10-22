function handleNumberToArray(number) {
    let arr = String(number).split("").map((num) => {
        return Number(num)
    })
    return arr
}

function countItems(arr) {
    const countMap = Object.create(null);

    for (const element of arr) {
        if (!countMap[element]) {
            // Se ainda não existir elemento, definimos como um, já que
            // estamos na primeira ocorrência.
            countMap[element] = 1;
        } else {
            // Caso contrário, incrementamos um no número atual.
            countMap[element] += 1;
        }
    }

    return countMap;
}

function h(arr) {
    let duplicados = arr.filter(function (value, index, array) {

        let contador = 0;


        console.log(contador)
        return value == 4

    })



    function handleContaElemento(arr, elemento) {
        let contador = 0;

        for (let i = 0; i < arr.length; i++) {
            if (elemento === arr[i]) {
                contador++
            }
        }
        return contador
    }

    function hasTwoDigits(numero) {
        const n = handleNumberToArray(numero);

        if (n.length > 1) {
            return true
        } else {
            return false
        }
    }


    return duplicados
}
// filtrado.push(parseInt(target.join()))
console.log(h([4, 5, 44, 98, 4, 5, 6]))

// console.log(countItems([4, 5, 44, 98, 4, 5, 6]))

// const arr2 = [1, 1, 11, 3]

// const filteredArray = arr2.filter(function (ele, pos) {
//     return arr2.indexOf(ele) == pos;
// })
