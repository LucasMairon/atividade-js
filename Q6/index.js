const numero = parseInt(prompt("digite um numero"));
let fatorial=1;
for(let i=1;i<=numero;i++){
  fatorial=fatorial*i;
}
console.log(`o fatorial do numero digitado é: ${fatorial}`);
