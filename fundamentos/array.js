const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

console.log(valores)

valores.push({ id: 3 }, false, null, 'teste') //adiciona valores num array
console.log(valores)

console.log(valores.pop())//remove o ultimo valor do array

console.log(typeof valores)//retorna o tipo do array
