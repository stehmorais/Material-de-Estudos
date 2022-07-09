// meu primeiro código JavaScript 

let namePilot = prompt('Nos informe o seu nome piloto/a')
let velocity = 0
let newVelocity = prompt('A que velocidade você gostaria de ir?')
let resposta = confirm('Você realmente deseja acelarar para: ' + newVelocity + 'km/s?')


if (resposta) {
    velocity = newVelocity

    if (newVelocity <= 0) {
        alert(namePilot + ' nave Parada')
    } else if (newVelocity < 40) {
        alert(namePilot + ' devagar, podemos aumentar mais')
    } else if (newVelocity >= 40 && newVelocity < 80) {
        alert(namePilot + ' boa velocidade para manter')
    } else if (newVelocity >= 80 && newVelocity < 100) {
        alert(namePilot + ' velocidade alta, diminua por sua segurança')
    } else {
        alert(namePilot + ' perigo!! velocidade muito alta, controle automático forçado.')
    }
}
    alert(namePilot + '\nSua velocidade atual é: ' + velocity + "km/s")

    