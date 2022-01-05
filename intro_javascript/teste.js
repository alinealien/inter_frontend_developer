// AULA : Manipulando um arquivo
// Aula sobre comentários no JS
// ctrl + / - ele vai fazer um comentario de linha 

/* var y = 0;
var x = 1; 

var z = 3; */

//var preco = 2;
/*var desconto = 0.2;
const PRECO =  2; // No caso de constantes é boa pratica utilizar as letras maiusculas (assim o dev identificará como constante)
var total = PRECO - desconto;

PRECO = preco - desconto; // Nao podemos fazer assim, pois é uma constante, então o valor não pode ser manipulado*/

//AULA: Funções

/*function soma (a, b) { //Dentro do parenteses se declara os atributos/parametros da funcao
   // console.log(a + b); //console: apenas para ver o valor no console esta funcionando. usamos quando n precisamos manipular o resultado de uma funcao.
    return a + b; // valor: 8 //return: usa quando precisa manipular depois o resultado da funcao em outra funcao, etc...

}

//se quer que a funcao seja executada é necessario *chamar a funcao - muito importante*:

soma(3, 5);*/

//AULA: Console - executando arquivos.js
// node teste.js (Vai rodar o arquivo JS com node.js)

//console.log("Hello mundo cruel!")

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            evenNums.push(array[i]);
        } else{
            console.log(`${array[i]} não é par!`);
        }
    }
    console.log('Os números pares são:', evenNums);
}
//aqui foi chamada a funcao
let array = [1, 2, 3, 4, 5, 6, 7, 8];

returnEvenValues(array);
