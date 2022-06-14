
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



let name = 'johN'
function hello(name) {
    const tratarNomes = name.split(' ').map(nomeAtual => {
        return nomeAtual[0].toUpperCase() +
        nomeAtual.toLowerCase().slice(1)
    })

    for (let retorna of tratarNomes) {
        if (retorna == '') {
            return 'Hello, World!'
        } else {
            return `Hello, ${retorna}`
        }
    }

    return tratarNomes.join('')
}

console.log(hello('johN'))



function exclamaca(string) {
    let arr = string.split('')
    let fil = arr.filter(element => {
        if (element[-1] == '!') {
            return element.replace(/!/g, '')
        }
    })
    return fil
}

console.log(exclamaca('Hi!!, hi!!'))


let array = [1, 2, 3, 10, 5]
console.log(array.sort((a, b)=> {
    return a-b
}))