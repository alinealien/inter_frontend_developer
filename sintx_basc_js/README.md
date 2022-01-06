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





