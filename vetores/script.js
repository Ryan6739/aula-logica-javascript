//valores do array
let notas = [7.5, 6.3, 4.8, 9.2];

console.log("Notas iniciais", notas);

//Ordenar em ordem crescente
notas.sort((a, b) => a - b);

console.log("Notas odenadas (crescente):", notas);

//Ordenar em ordem decrescente
notas.sort((a, b) => b - a);

console.log("Notas odenadas (decrescente):", notas);

//vetor de string
let frutas = ["banana", "maçã", "laranja", "abacaxi"];

console.log("Coleção de frutas", frutas);

//Ordenando em ordem alfabética
frutas.sort();
console.log("frutas ordenadas:", frutas);
