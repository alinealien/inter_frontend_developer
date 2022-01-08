function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7){
        alerto('erro - operacao inválida');
        calculadora();
    } else {

let n1 = Number(prompt('Insira o primeiro valor:')); //Number vai converter de string p number
let n2 = Number(prompt('Insira o segundo valor:'));
let resultado;

if (!n1 || !n2){
    alert('erro - parÂmetros inválidos');
    calculadora();
} else {

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`) //template string (``) - podemos usar strings com expressoes e variaveis
    novaOperacao();
}

function subtracao(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`) //template string (``) - podemos usar strings com expressoes e variaveis
    novaOperacao();
}

function multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`) //template string (``) - podemos usar strings com expressoes e variaveis
    novaOperacao();
}

function divisaoReal(){
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`) //template string (``) - podemos usar strings com expressoes e variaveis
    novaOperacao();
}

function divisaoInteira(){
    resultado = n1 % n2;
    alert(`'O resto da divisao entre ${n1} e ${n2} é igual à ${resultado}`) //template string (``) - podemos usar strings com expressoes e variaveis
    novaOperacao();
}

function potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1} elevado à ${n2}ª é igual à ${resultado}`) //template string (``) - podemos usar strings com expressoes e variaveis
    novaOperacao();
}

    //nova operacao
function novaOperacao(){
    let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')

    if (opcao == 1){
        calculadora();
    }else if (opcao == 2){
        alert('Até mais!')
    }else {
        alert('Digite uma opção válida')
        novaOperacao();
    }
}
}
}

//IF && ELSE 
/*if (operacao == 1) {
    soma();
}else if (operacao == 2){
    subtracao();
}else if (operacao == 3){
    multiplicacao();
}else if (operacao == 4){
    divisaoReal();
}else if (operacao == 5){
    divisaoInteira();
}else if (operacao == 6){
    potenciacao();
}*/

//Switch Case

switch (operacao){
    case 1:
        soma();
        break;
        case 2:
        subtracao();
        break;
        case 3:
        multiplicacao();
        break;
        case 4:
        divisaoReal();
        break;
        case 5:
        divisaoInteira();
        break;
        case 6:
        potenciacao();
        break;
}

}

calculadora();