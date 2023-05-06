const numero1= parseInt(prompt("digite o primeiro numero: "));
const numero2= parseInt(prompt("digite o segundo numero: "));

    console.log("a soma resultou em: " + (numero1+numero2));
    console.log("a multiplicacao resultou em: " + (numero1*numero2));
    console.log("a subtracao resultou em: "+ (numero1-numero2));
    if(numero2===0){
      console.log("divisao indeterminada");
    }else{
      console.log("a divisao resultou em: " + (numero1/numero2));
    }
