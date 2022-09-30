const agora = new Date()
const hora = agora.getHours()

if (hora < 12) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Bom dia')
} else if (hora < 18) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa tarde')
} else if(hora <= 24) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log('Boa noite')
} else {
    console.log('Não existe')
}