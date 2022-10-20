function handleNumberToArray(number) {
    let arr = String(number).split("").map((num) => {
        return Number(num)
    })
    return arr
}


function h(arr) {

    let filtrado = []

    for (let index = 0; index < arr.length; index++) {

        console.log('Item atual: ', arr[index]);

        for (let j = index + 1; j < arr.length; j++) {
            const target = handleNumberToArray(arr[j]) // [2,2]

            console.log('PRÓXIMO', target);

            if (target.includes(arr[index])) {
                console.log('Número já existente \n')
                break
            } else {
                filtrado.push(arr[index])
            }
        }

    }

    return filtrado
}
// filtrado.push(parseInt(target.join()))
console.log(h([2, 22, 3]))