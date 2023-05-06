const lista = parseInt(prompt("digite uma lista de numeros separados por virgula"));
const vetor = [lista];
let soma=0;
for(let i=0;i<vetor.length;i++){
    soma=soma+vetor[i];
}
const media=(soma/vetor.length);
console.log(`a media dos numeros foi: ${media}`);
