function verificar() {

let data = new Date()
let ano = data.getFullYear()
let anoFormulario = window.document.getElementById('anoFormulario')
let resultado = window.document.getElementById('resposta')

let idade = ano - Number(anoFormulario.value)

    let img = window.document.createElement('img')
    img.setAttribute('id', 'foto')

if ( anoFormulario.value.length == 0 || anoFormulario.value > ano) { resultado.innerText ='Ops... algo de errado não está certo'}
else { 
    let genero = window.document.getElementsByName('genero')

    if (genero[0].checked){ 
        genero ='uma mulher'
        if (idade >= 0 && idade <= 13){
        img.setAttribute('src','imagens/criança-mulher.jpg')// criança
        } 
        else if ( idade <= 19){
        img.setAttribute('src','imagens/adolescente-mulher.jpg')//adolescente
        } 
        else if ( idade <= 59){
        img.setAttribute('src','imagens/adulto-mulher.jpg')// adulto
        }
        else {
        img.setAttribute('src','imagens/idoso-mulher.jpg')// idoso
        }
    }
    else if (genero[1].checked)
    {genero ='um homem'
        if (idade >= 0 && idade <= 13){
        img.setAttribute('src','imagens/criança-homem.jpg')// criança
        } 
        else if ( idade <= 19){
        img.setAttribute('src','imagens/adolescente-homem.jpg')//adolescente
        } 
        else if ( idade <= 59){
        img.setAttribute('src','imagens/adulto-homem.jpg')// adulto
        }
        else {
        img.setAttribute('src','imagens/idoso-homem.jpg')// idoso
        }
    }
    resultado.style.textAlign ='center'
    resultado.innerText =`Detectado ${genero} com ${idade} anos`
    resultado.appendChild(img)
    
}

}
