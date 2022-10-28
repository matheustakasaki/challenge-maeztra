const validateRegEx = (string) => {


    // Consegui validar a sequencia, porém sem sucesso em casar os pares de caracteres aberto/fechado
    let pattern = /([\[]|[\(]|[\{])([\}]|[\)]|[\]])/g;


    if (pattern.test(string)) {
        console.log('eh valida')
    } else console.log('nao eh valida');

}

validateRegEx('[({{}})])')