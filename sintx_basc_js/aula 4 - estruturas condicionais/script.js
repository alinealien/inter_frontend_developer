//CONDIÇÃO - IF(SE)
var jogador1 = 0;
var jogador2 = 1;
var placar;

let array =['valor1', 'valor2', 'valor3', 'valor4', 'valor5', ];
 
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

/*// FOR - executa uma instrução até que ela seja FALSA
for (let indice =0; indice < array.length; indice++){
    console.log(indice);

}

// FOR/IN - executa repetição a partir de uma propriedade
//com array
for (let i in array){
    console.log(i);
}

//com objects
for( i in object){
    console.log(i);

}

// FOR/OFF - executa repetição a partir de um array
//com array
for(i in array) {
console.log(array);
}

//com object
for(i of object.propriedade1){
    console.log(i);

}*/

//While
var a = 0;
while (a < 10){
    a++;
    console.log(a);
}

do{
    a++;
    console.log(a);
} while (a <10);


/*
//IF TÉRNARIO (de uma linha só)
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores Inválidos');

//usando IF
if (jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} 

//usando ELSE IF
else if(jogador2 > 0 && jogador1 == 0){ 
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
     
//usando ELSE
else{ 
    console.log('Ninguém marcou ponto!');
} 

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
        default:
            console.log('Ninguem Ganhou');
    }*/

/*if (jogador1 != -1) { //NINHO/ANINHAMENTO DE IF's
    if (jogador1 > 0){
    console.log('Jogador 1 marcou ponto!');
} else if(jogador2 > 0){ //CONDIÇÃO ELSE IF
    console.log('Jogador 2 marcou ponto');}
     else{ //CONDIÇÃO - ELSE (SE NÃO)
    console.log('Ninguém marcou ponto!');
}*/