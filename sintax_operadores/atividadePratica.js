function atividade1(){

    
  

    //função que receba números como parâmetros;
    let num1 = Number(prompt('Insira numero 1:'));
    let num2 = Number(prompt('Insira numero 2:'));
  


   // let soma = num1 + num2;
    // let numIguais = num1 === num2;
    

   //números são iguais
   function numIguais(){
       let osNumeros = `Os números ${num1} e ${num2}`;
       let falsoVerdadeiro = 'não'
    
    if (num1 === num2){
        falsoVerdadeiro = '';

    }
   
    return `${osNumeros} ${falsoVerdadeiro} sãoIguais`


   }

   function somaNumeros(){
       const soma = num1 + num2;
       let compDez = 'menor';
       let compVin = 'menor'

       if ( soma > 10){
           compDez = 'maior';
       }
       if (soma > 20){
           compVin = 'maior'
       }

       return `Sua soma é ${soma}, que é ${compDez} do que  10 e ${compVin} do que 20`
   }
}



   /*if(numIguais){
        alert ('São Iguais');
    } else{
       alert ('Não não iguais');
       }
       
       //a soma dos números é maior que 10 ou menor que 20
       if(soma > 10){
           alert ('Sua soma é maior que 10');
       } else if (soma < 20){
           alert ('Sua soma é menor que 20');
       }

       {
           
        
        let resultadoFinal = alert (' Os números ' + num1 + ' e ' + num2 + ' são numermos Iguais ' + " sua soma é: " + soma);


          
          // console.log('Os números' + num1 + ' e ' + num2 + ' são' +  numIguais + 'Sua soma é: ' + soma + soma > 10 + 'que é maior que 10' || soma > 20 + 'que é menor que 20' );
       }
       
    }*/


atividade1();