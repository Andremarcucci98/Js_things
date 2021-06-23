let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(num[0])
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num)

// Usando indexOf() -> localiza a posição de determinado valor, se não tiver este valor no array retorna "-1"
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}