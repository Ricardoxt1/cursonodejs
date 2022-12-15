// mais de um valor

const x = 10
const y = "Ricardo"
const z = [1,2]

console.log(x, y, z)

// contagem de impressões console.count é sobre isso.
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// contagem de strings
console.log('o nome é %s, ele é programador', y)

// limpar o console
setTimeout(() => console.clear(), 2000)
