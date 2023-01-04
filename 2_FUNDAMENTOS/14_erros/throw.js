const x = 10 //"10"

// checar se a const é um número inteiro ou string

if(!Number.isInteger(x)) {
    throw new Error("O valor de x não é um número inteiro!");
}

console.log("Continuando o código...");


