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
        if(optSexo[0].checked){
            genero = 'Homem'
        } else if(optSexo[1].checked){
            genero = 'Mulher'
        }
            res.innerHTML = `Detectamos ${genero} com ${idade} ano`
    }
}