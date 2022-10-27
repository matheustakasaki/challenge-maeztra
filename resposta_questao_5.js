function factorial(num) {
    // Se o número for inferior a 0, não calcule.
    if (num < 0)
        return -1;
    // Se o número for 0, seu fatorial é 1.
    else if (num == 0)
        return 1;
    // Caso contrário, chame o procedimento de recursão novamente
    else {
        return (num * factorial(num - 1));
        /* 
        O método chega na condição do if, retorna 1, com o qual num será multiplicado
        A função retornará o valor total
        
        A 5ª chamada retornará (5 * (5 - 1))     // num = 5 * 4
        A 4ª chamada retornará (20 * (4 - 1))    // num = 20 * 3
        
        E assim por diante até esgotar o número fornecido
        
        Com todas as chamadas, temos
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
    }
}
console.log(factorial(5));