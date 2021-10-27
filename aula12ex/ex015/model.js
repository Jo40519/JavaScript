function verificar(){
    var data = new Date()
    var ano = data.getFullYear(); 
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else{
        var fsex = document.getElementsByName('optSexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'criançaMenino.png')
            } else if( idade < 21){
                // Jovem
                img.setAttribute('src', 'jovem.png')
            } else if ( idade <50){
                // adulto
                img.setAttribute('src', 'adultoHomem.png')
            } else {
                // idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // criança
                img.setAttribute('src', 'criançaMenina.png')
            } else if( idade <21){
                // Jovem
                img.setAttribute('src', 'jovemMenina.png')
            } else if(idade <50){
                // adulto
                img.setAttribute('src', 'adultaMulher.png')
            } else {
                // idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
            res.innerHTML = `Detectamos ${genero} com ${idade} anos`
            res.appendChild(img)
    }
}