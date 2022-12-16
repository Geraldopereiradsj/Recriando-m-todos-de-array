const numerosAleatórios = [37, 23, 66, 76, 38, 73, 76, 3, 16, 56];




const filtrarNumeros = numerosAleatórios.filter((numeros) => numeros < 20)

console.log(filtrarNumeros)


function numerosFiltrar(array, callback) {
    const numerosMenoresQue50 = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            numerosMenoresQue50.push(array[i])
        }
    }
    return numerosMenoresQue50;
}


console.log(numerosFiltrar(numerosAleatórios, (numeros) => numeros < 20));









const mapNumeros = numerosAleatórios.map((numeros) => numeros + 10)

console.log(mapNumeros)


function numerosMap(array, callback) {

    let map = []

    for (let i = 0; i < array.length; i++) {
        map.push(callback(array[i]))
    }
    return map
}
console.log(numerosMap(numerosAleatórios, (numeros) => numeros + 10));







const total = numerosAleatórios.reduce((currentTotal, numero) => numero + currentTotal)

console.log(total)




function totalNumeros(array, callback, indice = 0, valorAtual) {
    let numeros = 0;
    for (let i = indice; i < array.length; i++) {

        numeros = callback(numeros, array[i])
    }
    return numeros
}
console.log(totalNumeros(numerosAleatórios, (inicial, atual, indice, valorAtual) => inicial + atual))














function itensFind(array, callback, indice = 0) {
    
    let find = []
    
    for (let i = indice; i < array.length; i++) {
        if (callback(array[i])) {
            find.push(array[i])

        }
    }
    return find[0]
}
console.log(itensFind(numerosAleatórios, ((numero, indice, array) => numero > 30)))







const includesNumeros = numerosAleatórios.includes(3)

console.log(includesNumeros)


function numerosIncludes(array, callback, indice = 0) {
    for (let i = indice; i <= array.length; i++) {
        if (callback(array[i])) {
            return true

        }

    }
    return false

}
console.log(numerosIncludes(numerosAleatórios, (numero, indice) => numero == 3))





console.log(numerosAleatórios.indexOf(23, 0))


function numerosIndexOf(array, callback, indice = 0) {
    for (let i = indice; i <= array.length; i++) {

        if (callback(array[i], inicial = 0)) {

            if (inicial < i) {
                return i
            }
        }
    }
    return -1
}
console.log(numerosIndexOf(numerosAleatórios, callbackIndexOf))




function callbackIndexOf(numero, indice) {
    return numero == 23
}