function sequenciaFibonnaci(numero) {
    let num1 = 0
    let num2 = 1

    while (num2 < numero) {
        let temp = num2
        num2 = num1 + num2
        num1 = temp
    }

    if (num2 === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`
    }
}

const verificarNum = 25
console.log(sequenciaFibonnaci(verificarNum))
