// // // meu primeiro código JavaScript 
document.getElementById("configurar").onclick = function () {
    let namePilot = parseFloat(document.querySelector("#nome").value);
    let velocity = 0
    let newVelocity = parseFloat(document.querySelector("#newvelocity").value);
    let resposta = confirm('Você realmente deseja acelarar para: ' + newVelocity + 'km/s?')
    let resultado;


    if (resposta == true) {
        velocity = newVelocity

        if (newVelocity <= 0) {
            resultado = namePilot + ' nave Parada'
        } else if (newVelocity < 40) {
            resultado = namePilot + ' devagar, podemos aumentar mais'
        } else if (newVelocity >= 40 && newVelocity < 80) {
            resultado = namePilot + ' boa velocidade para manter'
        } else if (newVelocity >= 80 && newVelocity < 100) {
            resultado = namePilot + ' velocidade alta, diminua por sua segurança'
        } else {
            resultado = namePilot + ' perigo!! velocidade muito alta, controle automático forçado.'
            document.querySelector("#resultado").innerHTML = resultado;

        }
    }
    velocidade = namePilot + '\nSua velocidade atual é: ' + velocity + "km/s"
    document.querySelector("#velocidade").innerHTML = resultado;
};
