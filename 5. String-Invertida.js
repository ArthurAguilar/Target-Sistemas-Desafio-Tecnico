function inverterString(string) {
    let novaString = ''
    let ultimoIndice = string.length - 1

    for (let i = ultimoIndice; i >= 0; i--) {
        novaString += string[i]
    }    

    return novaString
}

const string = "Olá, mundo, eu sou o Arthur!"
const stringInvertida = inverterString(string)
console.log(stringInvertida)
