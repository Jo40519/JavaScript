var idade = 21
console.log(`Você tem ${idade} anos, por tanto`)
if (idade < 16){
    console.log('Não pode beber')
}else if(idade <=18 || idade > 65){
        console.log('Você já pode beber, porém só é de maior no Brasil');
}
    else{
        console.log('Parabéns, você já é maior que 21 anos, já pode beber no mundo todo!')
}