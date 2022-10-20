
const numeros = [4, 5, 44, 98, 4, 5, 6, 7]

const handleCheckClone = (numeros) => {
    numeros.filter(function (element, i) {
        return numeros.indexOf(element) === i
    })
}

const novArr = numeros.filter(function (e, i) {
    return numeros.indexOf(e) === i
})

console.log(novArr)