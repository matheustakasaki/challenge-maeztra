function handleNumberToArray(number) {
    let arr = String(number).split("").map((num) => {
        return Number(num)
    })
    return arr
}


function h(arr) {
    let duplicados = []

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let existe = false

        for (let j = 0; j < arr.length; j++) {

            let arr2 = handleNumberToArray(element)
            console.log(arr2)

            if (arr2.includes(arr[index])) {
                break
            }

        }

    }

    return duplicados
}
// filtrado.push(parseInt(target.join()))
console.log(h([1, 12, 3]))



// const arr2 = [1, 1, 11, 3]

// const filteredArray = arr2.filter(function (ele, pos) {
//     return arr2.indexOf(ele) == pos;
// })
