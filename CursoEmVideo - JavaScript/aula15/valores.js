let valores = [8, 1, 7, 4, 2, 9]
// Usando for em array
for (let pos = 0;pos < valores.length; pos++) {
    console.log(`Valor na posição ${pos} tem valor ${valores[pos]}`)
}

// Mesma coisa, mas mais simplificado
for (let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

