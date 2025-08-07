/*
// exercicio 1 - peça um número e exiba se ele é impar ou par. E se é múltiplo de 3 ou 5

let num1 = Number(prompt("Digite um número: "));
if (num1 % 2 == 0){
    console.log("Ese número é par");
}else{
    console.log("Esee número é impar");
 }

*/


/*
// exercicio 2 - peça um número para o usuário e imprima a classificação de idade: bebe = menor 2 anos | criança = menor de 13 anos 
// adolescente = menor de 18 anos | adulto = menor de 60 anos | idoso = maior ou igual a 60 anos 

 let idade = Number(prompt("Digite sua idade: "));
 if (idade <= 2){
    console.log("Você é um bebê");
 }else if (idade <= 13){
    console.log("você é uma criança");
 }else if (idade <= 18){
    console.log("Você é um adolescente");
 }else if (idade >= 60){
    console.log("Você é um(a) idoso(a)");
 }

*/


// exercicio 3 - Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário
//  foi multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.
/*
let velocidade = Number(prompt("Digite a velocidade de seu carro: "));
if (velocidade > 80){
    let km_passado = velocidade - 80;
    let multa = km_passado * 5;
    alert = ("Você foi multado")
    alert = ("Você passou" + km_passado + "km do limite");
    alert = ("O valor da multa é R$ " + multa);
}else{
    alert("Você está dentro do limite de velocidade");
}
*/

// exercicio 4 - Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade dela e depois mostre se ela pode ou não votar.
/*
let ano = Number(prompt("Insira seu ano de nascimento: "))
if (ano >= 2010){
    let idade = ano - 2025;
    console.log("Você tem " + idade + " anos e ainda não pode votar");
}else if (ano <= 1954 || ano === 2008 || ano === 2009){
    let idade = ano - 2025;
    console.log("Você tem" + idade + " anos e pode votar se quiser");
}else if (ano >= 1955 && ano <= 2007);{
    console.log("Você tem " + idade + " anos e seu voto é obrigatório");
}
*/


// exercicio 5 - Faça um algoritmo que leia um determinado ano e mostre se ele é ou não BISSEXTO
/*
let ano = Number(prompt("Digite um ano:"));
if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log("Esse ano é bissexto");
} else {
    console.log("O ano não é bissexto");
}
*/

// exercicio 6 - Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua situação em relação 
// ao alistamento militar - s estiver antes dos 18 anos, mostre em quantos anos faltam para o alistamento. 
// - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do alistamento.
/*
let idade = Number(prompt("Insira sua idade: "));
if (idade < 18){
    let alistamento = idade - 18;
    console.log("Faltam " + alistamento + " anos para o alistamento");
}else if(idade > 18){
    let alistamento = idade - 18;
    console.log("Já faz " + alistamento + " anos que você já se alistou");
}else{
    console.log("Você vai se alistar esse ano");
}
*/


// exercicio 7 - Conversor de Unidades. Escreva um programa que permite ao usuário escolher entre converter uma 
// temperatura de Celsius para Fahrenheit ou vice-versa. Solicite o valor e execute a conversão
/*
let tipo = prompt("Converter para (Celsius ou Fahrenheit): ").toLowerCase(); // vai aceitar qualquer coisa pq no fim vai ser convertido pra minusculo, ent tanto faz
let valor = Number(prompt("Digite o valor da temperatura: "));

if (isNaN(valor)) { // o isNaN serve pra ver se o que a pessoa digitou não é número
  alert("Digite um número válido");
} else if (tipo === "celsius") {
  let resultado = (valor - 32) / 1.8;
  alert("Temperatura em Celsius: " + resultado + "°C");
} else if (tipo === "fahrenheit") {
  let resultado = (valor * 1.8) + 32;
  alert("Temperatura em Fahrenheit: " + resultado + "°F");
} else {
  alert("Digite apenas 'Celsius' ou 'Fahrenheit'");
}
*/

// exercicio 8 (Desafio) - Uma empresa precisa reajustar o salário dos seus funcionários, dando um aumento de acordo com alguns fatores. Faça um programa que
//  leia o salário atual, o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. 
// No final, mostre o seu novo salário, baseado na tabela a seguir: - Mulheres - menos de 15 anos de empresa: +5% - de 15 até 20 anos de empresa: +12%
// - mais de 20 anos de empresa: +23%
// - Homens - menos de 20 anos de empresa: +3% - de 20 até 30 anos de empresa: +13% - mais de 30 anos de empresa: +25
/*
let genero = prompt("Digite seu gênero: ").toLowerCase();
let salario = Number(prompt("Digite seu salário atual: "));
let ano = Number(prompt("Digite a quantos anos você trabalha na empresa: "));
let aumento = 0;
if (genero === "feminino"){
    if (ano < 15){
        aumento = salario * 1.05;
    }else if (ano >= 15 && ano <= 20){
        aumento = salario * 1.12;
    }else if (ano > 20){
        aumento = salario * 1.23;
    }
}else if (genero === "masculino"){
    if (ano < 20){
        aumento = salario * 1.03;
    }else if (ano >= 20 && ano <= 30){
        aumento = salario * 1.13;
    }else if (ano > 30){
        aumento = salario * 1.25;
    }
}
console.log("Seu novo salário é R$ " + aumento + ".");
*/
