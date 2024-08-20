//1.Faça um Programa que mostra a mensagem "Olá mundo" na tela.
alert("Olá mundo!")

//2.Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
let numero = prompt("Digite um número: ")
alert("O número informado foi " + numero)

//3.Faça um Programa que peça dois números e imprima a soma.
let numero1 = prompt("digite um número:")
let numero2 = prompt("digite outro número:")
let Soma = parseInt(numero1) + parseInt(numero2)
alert("A soma dos números é: " + Soma)

//4.Faça um Programa que parte as 4 notas bimestrais e mostre a média.
let nota1 = prompt("Digite a primeira nota: ")
let nota2 = prompt("Digite a segunda nota: ")
let nota3 = prompt("Digite a terceira nota: ")
let nota4 = prompt("Digite a quarta nota: ")
let media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4))
alert("A média das notas é: " + media/4)

//5.Faça um Programa que converte metros para centímetros.
let metros = prompt("Digite o valor em metros: ")
let centimetros = metros * 100
alert("O valor em centímetros é: " + centimetros)

//6.Faça um Programa que parte o raio de um círculo, calcule e mostre sua área.
letra = prompt("Digite o raio do círculo: ")
let area1 = 3.14 * (letra * letra)
alert("A área do círculo é: " + area1)

//7.Faça um programa que calcula a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
let lado = prompt("Digite o valor do lado do quadrado:")
let area = lado * lado
let dobro = area * 2
alert("O dobro da área do quadrado é: " + dobro)

//8.Faça um Programa que pergunta quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let valorHoras = prompt("Digite o valor ganho por hora: ")
let horasDeTrabalho = prompt("Digite o número de horas trabalhadas no mês")
let Salario = valorHoras * horasDeTrabalho
alert("O salário do mês é: " + Salario)

//9.Faça um programa que parte a temperatura em graus Fahrenheit, transforma e mostra a temperatura em graus Celsius. C=5*((F-32)/9)
let fahrenheit = prompt("Digite a temperatura em Fahrenheit: ")
let celsius = 5 * ((fahrenheit - 32) / 9)
alert("A temperatura em Celsius é: " + celsius)

//10.Faça um programa que parte a temperatura em graus Celsius, transforma e mostra em graus Fahrenheit.
let celsius1 = prompt("Digite a temperatura em Celsius: ")
let fahrenheit1 = (celsius1 * 9 / 5) + 32
alert("A temperatura em Fahrenheit é: " + fahrenheit1)

//11.Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//o produto do dobro do primeiro com metade do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo.
let num1 = prompt("Digite o primeiro número inteiro: ")
let num2 = prompt("Digite o segundo número inteiro: ")
let num3 = prompt("Digite o número real: ")
let produto = (2 * parseInt(num1)) * (parseInt(num2) / 2)
let soma = (3 * parseInt(num1)) + parseInt(num3)
let cubo = parseInt(num3) * parseInt(num3) * parseInt(num3)
alert("O produto do dobro do primeiro com metade do segundo é: " + produto)
alert("A soma do triplo do primeiro com o terceiro é: " + soma)
alert("O terceiro elevado ao cubo é: " + cubo)

//12.Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcula seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
let altura = prompt("Digite a altura da pessoa: ")
let pesoIdeal = (72.7 * altura) - 58
alert("O peso ideal da pessoa é: " + pesoIdeal)

//13.pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:

//Para homens: (72.7*h) - 58
//Para mulheres: (62,1*h) - 44,7
let altura1 = prompt("Digite a altura da pessoa: ")
let pesoIdealM = ((72.7 * altura1) - 58)
let pesoIdealF = ((62.1 * altura1) - 44.7)
alert("O peso ideal da pessoa é: " + pesoIdealM)
alert("O peso ideal da pessoa é: " + pesoIdealF)

//14.João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele trouxer um peso de peixes maior que o previsto pelo regulamento de pesca do estado de São Paulo (50 quilos) deverá pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na multa variável o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens apropriadas.
let peso = prompt("Digite o peso de peixes: ")
let excesso = peso - 50
let multa = excesso * 4
alert("O excesso de peso é: " + excesso)
alert("A multa a ser paga é: " + multa)

//15.Faça um Programa que pergunta quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no mês específico, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
//salário bruto.
//quanto pagou ao INSS.
//quando pagou para o sindicato.
//o salário líquido. Calcule os descontos e o salário //líquido, conforme tabela abaixo:
//Salário Bruto : R$
//INSS (8%) : R$
//Sindicato (5%) : R$ = Salário Líquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.
let valorHora2 = prompt("Digite o valor ganho por hora: ")
let horasTrabalhadas = prompt("Digite o número de horas trabalhadas no mês")
let salario = valorHora2 * horasTrabalhadas
let inss = salario * 0.08
let sindicato = salario * 0.05
let salarioLiquido = salario - inss - sindicato
alert("O salário bruto é: " + salario)
alert("O valor pago ao INSS é: " + inss)
alert("O valor pago ao sindicato é: " + sindicato)
alert("O salário líquido é: " + salarioLiquido)