const frase=prompt("digite uma frase");
let quantidade_a=0;
for(let i=0;i<frase.length;i++){
  if(frase[i]==="a"){
    quantidade_a++;
  }
}
console.log(`a quantidade de a na frase foi: ${quantidade_a}`);
