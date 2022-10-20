const arr = [2, 22, 3, 4, 5,];


// [2, 22, 3, 4]
const eliminaDuplicados = function (arr) {

    // const filteredArray = arr.filter(function (ele, pos) {
    //     return arr.indexOf(ele) == pos;
    // })

    let duplicados = []

    // for (let index = 0; index < arr.length; index++) {

    //     for (let index2 = index + 1; index2 < arr.length; index2++) {
    //         if (arr.indexOf(arr[index2]) === -1) {
    //             duplicados.push(arr[index2]);

    //             console.log('Nova coleção de numbers é : ' + duplicados);

    //         } else if (arr.indexOf(arr[index2]) > -1) {
    //             duplicados.splice(arr[index2])
    //             console.log(arr[index2] + ' já existe na coleção de numbers.');
    //         }

    //     }
    //     arr.length--;
    // }

    for (let index = 0; index < arr.length; index++) {

        for (let index2 = index + 1; index2 < arr.length; index2++) {

            let checkNext = Array.from(arr[index2])
            console.log(checkNext)
        }
        arr.length--;
    }

    return duplicados

    // return 1;
}

console.log(eliminaDuplicados(arr))


