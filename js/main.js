/*var nome = "Antonio";
var n1 = 27;
var n2 = "10";
var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(n1 * n2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());*/
var lista = ["maça", "pera", "laranja"];
lista.push("uva");
console.log(lista);
lista.pop();//exclui ultimo item da lista
console.log(lista);
console.log(lista.reverse());//imprime a lista na ordem inversa
console.log(lista.toString());//transforma a lista em uma string
console.log(lista.join(" - "));//trasnforma a lista em uma string e adiciona o que foi passado como parametro, 
                               //no meio de cada item da lista
var fruta = {nome:"maça", cor:"vermelha"};//dicionario

console.log(fruta);

var frutas = [
    {nome:"maça", cor:"vermelha"},
    {nome:"banana", cor:"amarela"}
];
console.log(frutas);