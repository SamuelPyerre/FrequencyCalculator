const formulario = document.querySelector("#formulario")
let visibilidade = true;
ocultarExibir()

const resultado = document.querySelector('#resultado')

const ciclo = document.getElementById('ciclo')

function verificar(){
    const valueCiclo = ciclo.options[ciclo.selectedIndex].value;
    if (valueCiclo > 1){
        ocultarExibir()
    }
    
}


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    


    const falta1 = e.target.querySelector('#falta01').value;
    const falta2 = e.target.querySelector('#falta02').value;
    const falta3 = e.target.querySelector('#falta03').value;
    const falta4 = e.target.querySelector('#falta04').value;
    const falta5 = e.target.querySelector('#falta05').value;

    const ano = e.target.querySelector('#ano')
    const valueAno = ano.options[ano.selectedIndex].value;

    let porc1 = 0;
    let porc2 = 0;
    let porc3 = 0;
    let porc4 = 0;
    let porc5 = 0;

    let v1 = 0;
    let v2 = 0;
    let v3 = 0;
    let v4 = 0;
    let v5 = 0;

    

    for (let c = 1; c <= Number(valueAno); c++){
        if (c == 1){
            v1 = (200 - Number(falta1))*4
            porc1 = v1 / 8
            console.log(porc1)
            resultado.innerHTML = `1° Ano > ${porc1.toFixed(2)}% <br>`
        } else if (c == 2){
            v2 = (200 - Number(falta2)) * 4
            porc2 = (v1 + v2) / 16
            // / 16
            console.log(porc2)
            resultado.innerHTML += `2° Ano > ${porc2.toFixed(2)}% <br>`
        } else if (c == 3){
            v3 = (200 - Number(falta3)) * 4
            porc3 =  (v1 + v2 + v3) / 24
            resultado.innerHTML += `3° Ano > ${porc3.toFixed(2)}% <br>`
        }else if (c == 4){
            v4 = (200 - Number(falta4)) * 4
            porc4 = v4 / 8
            resultado.innerHTML += `4° Ano > ${porc4.toFixed(2)}% <br>`
        } else if (c == 5){
            v5 = (200 - Number(falta5)) * 4
            porc5 = (v4 + v5) / 16
            resultado.innerHTML += `5° Ano > ${porc5.toFixed(2)}% <br>`
        }
    }

    


})



function exibir() {
    document.getElementById("parte2").style.display = "block";
} 

function exibir() {
    document.getElementById("parte2").style.display = "block";
}

function ocultarExibir() { // Quando clicar no botão.

    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("parte2").style.display = "none";//Ocultamos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("parte2").style.display = "block";//Exibimos a div..
        visibilidade = true;//Alteramos o valor da variável para true.
    }
}