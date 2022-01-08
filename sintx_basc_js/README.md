## SINTAXE BÁSICA EM JAVASCRIPT

### O que danado é JavaScript ?

- Interpretada
- Baseada em Protótipos
- Multiparadigma
- Comumente utilizada em aplicações web client-side
- Segue o padrão ECMAScript



### Tipagem

A tipagem funciona como uma regra de uso de dados, quanto mais forte for a tipagem, mais obrigatório é a declaração do tipo de dados.

A tipagem do JavaScript é fraca, a declaração dos dados acontece de modo dinâmico.

**Ex**.: Ao criarmos uma variável com valor entre aspas ("JavaScript já converte o dado para o tipo String").

**Ex.:** var numero = 1;

// o Javascript já converte o valor 1 para o tipo Number.



### Tipos Primitivos

As variáveis em JavaScript podem guardar tipos de dados que chamamos de tipos primitivos.

Variáveis podem guardar valores dos tipos: **Boolean; null; undefined; NUmber; String; Array; Object; Function;**



### O que são variáveis?

São dados que variam.

Imagina uma caixa, onde podemos colocar quase qualquer coisa dentro dela, pode ser uma lista de nomes, cartões com números, objetos no geral...

Variáveis funcionam dessa forma, como uma caixa que guarda valores.

Existem 3 modos de declarar as variáveis em JavaScript:

- **var** - escopo global e local, pode ter seu valor alterado, se não tiver um valor inicial será tratada como _null_;
- **let** - escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratada como _null_;
- **const** - escopo local de bloco, somente leitura, o valor inicial é obrigatório e não pode ser alterado;



### Escopo

O escopo em JavaScript define a limitação e visibilidade de um bloco de código.

**Escopo Global** - quando a variável é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

**Escopo local** - quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível ou não.



### Regras de Uso de Variáveis

- Iniciar com letras, underscore_ ou cifrão$; Não iniciar com números;

  Ex.: **var 1nome** X

  ​       **var nome || var _nome** OK

- Não usar espaços (use o camelCase ou _);

  Ex.: **var nome completo** X

  ​       **var nomeCompleto || var nome_completo** OK

- Não usar palavras reservadas;

  Ex.: **var function** X

  ​       

- Declarar variáveis no topo do bloco do código 



### Diferenças entre atribuição, comparação e comparação idêntica

- Atribuição :

  O sinal de igualdade "=" em JavaScript, significa atribuição.

​       Ex.: 

​       como declarar : var nome = "meu nome";

​       como ler: variável nome recebe o valor meunome;

- Comparação:

  Para fazermos uma comparação de valores em JavaScript usamos "==".

  Ex.:

  como declarar: "0" == 0; ;

  como ler: "0" tem o valor igual a 0?

  //neste caso retorna true

- Comparação Idêntica

  Para fazermos uma comparação de valores e tipos em JS usamos "===";

  Ex.:

  como declarar:  "0" === 0; ;

  como ler: "0" tem o valor e tipo idêntico a 0?

  //neste caso retornará false



### Operadores Aritiméticos, Relacionais e Lógicos

São tipos de operadores matemáticos com valor numérico:

- (+) Adição;
- (-) Subtração;
- (*) Multiplicação;
- (/) Divisão real;
- (%) Divisão inteira;
- (**) Potenciação;



### Operadores Relacionais

São tipos de operadores que consultam a relação entre valores:

- (>) **maior que;**
- (<) **menor que;**
- (>=) **maior ou igual a;**
- (<=) **menor ou igual a;**



### Operadores Lógicos 

São os tipos de operadores que consultam valores lógicos:

- **&& - "e"** - considera que todos os valores sejam true;
- **|| - "ou"** - considera que qualquer valor seja true;
- **! - "não"** - inverte o valor de true para false ou vice-versa;



### Vetores e Objetos

Arrays são um tipo de lista, ou matriz de variáveis, onde cada variável possui um índice. Os valores podem ser de vários tipos.

O array seria como uma caixa com várias outras caixas dentro e cada uma contendo algum valor.

EX.: let array = ['String', 1, true...]

O array deve ser declarado entre colchetes "[]", e podem guardar qualquer valor dentro de seus índices: inclusive outros arrays.

EX.: let array = ['String', 1, true, false, ['array1'], ['array2']...]

OBS: O índice só é acessado por um número inteiro, onde 0 é o primeiro índice. Cada índice é separado por vírgula.



### Manipulando Arrays

ao ser declarado, o Array traz consigo uma série  de métodos para manipula-lo.

- **forEach()** - itera um array;
- **push()** - add item no final do array;
- **pop()** - remove item no final do array;
- **shift()** - remove item no inicio do array;
- **unshift()** - add item no inicio do array;
- **indexOf** - retorna o índice de um valor;
- **splice()** - remove ou substitui um item pelo índice;
- **slice()** - retorna uma parte de um array existente;



### Objetos

Dados que possuem **propriedade** e **valores** que definem  suas caracteristicas. Deve ser declarado entre as chaves "{}";

EX.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções (quero cafééé). Pode ser declarada assim:

**var** xicara = {

cor: 'azul',

tamanho: 'p',

funcao: tomarCafe()

}



### Manipulando Objetos

As propriedades de objetos podem ser atibuidas  à variáveis, facilitando a manipulação de objeto. Chamamos isso de desestruturação.

EX.: **var** xicara = {cor:'azul', tamanho: 'p', funcao: tomarCafe()}

​       **var** cor = xicara.cor;

​       **var** tamanho = xicara.tamanho;

​      **var** funcao = tomarCafe();  

}

As propriedades de obejtos pode ser atríbuidas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

EX.: **var** xicara = {cor:'azul', tamanho: 'p', funcao: tomarCafe()}

​       **var** cor = xicara.cor;

​       **var** tamanho = xicara.tamanho;

​      **var** funcao = tomarCafe();  

}

Outra forma de fazer a desestruturação é utilizando chaves ao declarar a variável:

EX.: **var** xicara = {cor: 'azul', tamanho: 'p', funcao: tomarCafe()}

​        **var** { cor, tamanho, funcao } = xicara;



### Estruturas Condicionais

São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição;

EX.: Um jogo precisa mudar o placar toda vez que um jogador marca pontuação;

#### IF (SE)

Podemos usar as palavras reservadas "if" para estabelecer uma condição:

EX.: **var** jogador1 = 0;

​      **var** jogador2 = 0;

​      **if**(jogador1 > 0){

​      console.log('jogador1 marcou ponto');

}

// como ler: se o jogador1 tiver valor maior que 0 ele marcou ponto.



#### ELSE (SE NÃO)

No caso de a condição**não** ser atendida podemos usar o **"else"**:

EX.:

​      **var** jogador1 = 1;

​      **var** jogador2 = 0;

​      **if** (jogador1 > 0 ){

​      console.log('Jogador 1 marcou ponto')

​      } else {

​      console.log('Ninguém marcou ponto ')

​     }



#### ELSE IF 

Caso haja mais de uma condição uttiliza-se o **eslse if**.

EX.: **var** jogador1 = 1; 

​       **var** jogador2 = 0;

​    **if** (jogador1 > 0){

   console.log('Jogador 1 marcou ponto')

   }else if (jogador2 > 0) {

  console.log('Jogador 2 marcou ponto')

  }else{

  console.log('Ninguem marcou ponto')

  }



#### NINHO DE IF

Podemos também usar o **"if"** dentro de um outro **"if"**, chamamos isso de **aninhamento de if's** ou **ninho de if's**.

EX.: **if** (jogador1 = -1){

​    **if**(jogador1 > 0){

​     console.log('Jogador 1 marcou ponto');

​    }else{

​      console.log('Ninguem marcou ponto');

​     }

​     }else {

​     console.log('jogador inválido');

}



### IF TERNÁRIO

Podemos também fazer uma verificação em uma única linha usando o "if" ternário.

EX.: **[condição] ? [instrução1] : [instrução2];

jogador1 > 0 **?** console.log('marcou ponto') : console.log("não marcou ponto");

// lembre de usar a interrogação **?** e dois pontos **:**



### USANDO SWITCH/CASE

O **"switch/case"** funciona como uma estrutura condicional também;

EX.: **switch** (${expressao}) {

**case 1:**

**${instrucao};**

**break;**

**case 2 : **

**$ {instrução};**

**break;**

**}**



### ESTRUTURAS DE REPETIÇÃO

#### LAÇÕS DE REPETIÇÃO

São estruturas condicionais que repetem uma instrução até atingir determinada condição:

- **For;**
- **For/in;**
- **For/of;**
- **While;**
- **Do/while;**

##### FOR

Funciona como uma repetição de instrução até que a condição seja falsa:

**for([expressaoInicial]; [condicao]; [incremento];){ declaracao}**

EX.: **var** array = ['valro1', 'valor2', 'valor3', 'valor4']

​       **for**(**let** i = 0; i < array.length; i++) {

**console.log**(i);

}

##### FOR/IN

Funciona como uma repetição a partir de uma propriedade: 

**for ([indice] in [objeto ou array]) { declaração }**

EX.: **var** array = ['valor1', 'valor2', 'valor3', 'valor4']

**for**(i **in** array) {

**console.log**(i);

}

##### FOR/OF

O **For/of** não funciona com objetos pois as propriedades variam, diferentes do índice em um array que sempre serão números inteiros.

Mas e se eu quiser pegar o valor mesmo assim?

EX.: **for**(i **of** object.propriedade) {

**console.log**(i);

}

//porém cada caractere dentro do valor será Impresso em linhas separadas



##### WHILE

Executa uma instrução **"enquanto"** determinada condição for verdadeira, a verificação é feita antes da execução;

EX.: **var** a = 0;

**while** (a < 10) {

a++;

console.log(a);

} 

// como ler: enquanto a variável **a** for menor que 10 ela vai receber mais um e imprimir no console.



##### DO/WHILE

Executa uma instrução **"até que"** determinada condição seja falsa, a verificação é feita depois da execução;

EX.: **var** a = 0;

**do** {

a++;

console.log(a);

}**while** (a < 10)

//como ler: a variável **a** vai receber mais um e imprimir no console **até que** seu valor chegue a 10











