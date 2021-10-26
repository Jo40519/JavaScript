
function carregar (){
var msg = document.getElementById('msg');
var img = document.getElementById('imagem');
var data = new Date()
var hora = data.getHours()
// var hora = 10
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0 && hora < 12){
    //Bom dia
    document.body.style.background = '#dac4b6'
    img.src = 'fotomanha.png'
} else if(hora >= 12 && hora < 18){
    //Boa tarde
    document.body.style.background = '#ab7c68'
    img.src = 'fototarde.png'
}else{
    //Boa noite
    document.body.style.background = '#881ea1'
    img.src = 'fotonoite.png'
}
}
