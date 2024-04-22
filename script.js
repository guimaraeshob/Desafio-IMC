// // função auto-invocavel para pegar noe do usuário aoiniciar a aplicação
// const usuario = function(){
//     pass//nome = prompt('Digite seu nome') 
// }
// usuario()   


function calcular(){
   
    // Pegando os valores do HTML
    let resultado = document.getElementById('resultado')
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let info = document.getElementById('info')
    let infoBtn = document.getElementById('infoBtn')
    let btnAbaixoPeso = document.getElementById('btnAbaixoPeso')
    let btnPesoNormal = document.getElementById('btnPesoNormal')
    
    
    //Validação de Formulário se estiver vazio 
    if (peso === '' || altura === '') {
        alert("Por favor, preencha todos os campos.");
        document.getElementById('peso').focus()
        return;
      }

    // Calcular IMC
    let imc = peso/(altura*altura)
    
    // Marca a linha correspondente à classificação do IMC
    if (imc < 18.5) {
        document.getElementById('abaixo-peso').classList.add('marked-row');
        btnAbaixoPeso.style.color = "";
        btnAbaixoPeso.style.background = "yellow"

    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById('peso-normal').classList.add('marked-row');
        btnPesoNormal.style.background = "green"

    } else if (imc >= 25 && imc < 30) {
        document.getElementById('sobrepeso').classList.add('marked-row');
    } else if (imc >= 30 && imc < 35) {
        document.getElementById('obesidade-grau-1').classList.add('marked-row');
    } else if (imc >= 35 && imc < 40) {
        document.getElementById('obesidade-grau-2').classList.add('marked-row');
    } else {
        document.getElementById('obesidade-grau-3').classList.add('marked-row');
    }

    // Mostrar resultado na tela 
    resultado.innerHTML = ` <div id="info" style= margin-top:0;">
                                <p style=font-size:20px;>Informações do Usuário</p><br>
                                <hr>
                                Nome: <br> 
                                IMC:    ${imc.toFixed(2)} <br>
                                Peso:   ${peso} Kg <br>
                                Altura: ${altura} m <br>
                                <hr>
                                <button onclick="apagar()">Apagar</button><br>
                            </div>
                           
                           

                                                        `
}

function abaixoPeso(){
  infoBtn.innerHTML = "Abaixo do Peso. Você deve procurar uma ajuda médica";
  
}

  function pesoNormal(){
    infoBtn.innerHTML = "Seu peso está  normal, parabens !"
  }



// Apaga todos os campos ao clicar no botão "apagar"
function apagar(){
    resultado.innerHTML=""
    peso.value = ''
    altura.value = ''
    btnAbaixoPeso.style.color = "";
    btnPesoNormal.style.background = ""
    infoBtn.innerHTML = ""
    document.getElementById('peso').focus()

    // Remove a marcação de todas as linhas da tabela
    var rows = document.querySelectorAll('#tabela-imc tr');
    rows.forEach(function(row) {
      row.classList.remove('marked-row');
    });
    

}




