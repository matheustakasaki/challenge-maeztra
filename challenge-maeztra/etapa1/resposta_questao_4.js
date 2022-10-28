

// Array com anos no formato [anoInicio - anoFim]
let anos = [[2000, 2010], [1999, 2010], [1998, 2010]]

// Array para base de cálculo com base nos períodos fornecidos
let periods = []

// Objeto que contém todos os anos trabalhados independentemente do número de pessoas
let workedYears = Object.create(null);

// Iteração para fornecer os anos trabalhados de cada pessoa
anos.map((item) => {
    // console.log(`${index + 1}: ${item}`, typeof item);

    for (let i = item[0]; i <= item[1]; i++) {
        periods.push(i)
    }
})
// Iteração que conta o número de pessoas que trabalharam naquele ano
for (const ano of periods) {
    workedYears[ano] = (workedYears[ano] || 0) + 1;
}

// Relação de ano/numero de pessoas que trabalharam
let listaAnos = Object.entries(workedYears).map(([ano, count]) => ({
    year: ano,
    numberOfPeopleWorking: count
}))

let yearsWithMoreWorkers = listaAnos.filter(({ numberOfPeopleWorking, year }) => numberOfPeopleWorking >= anos.length ? year : '').map((item) => item.year)


console.log('\n', 'Anos com mais pessoas trabalhando:')
console.table(yearsWithMoreWorkers)