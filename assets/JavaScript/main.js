const seuVoto = document.querySelector('.voto_para span')
const cargo = document.querySelector('.cargo span')
const dadosCandidato = document.querySelector('.dados_candidato')
const aviso = document.querySelector('.d-2')
const fotos = document.querySelector('.foto_candidato')
const numeros = document.querySelector('.numeros')


let etapaAtual = 0
let numero = ''
let votoBranco = false
let votos = [] 


function telaInicial() {
     let etapa = etapas[etapaAtual]
     let numeroHTML = ' '
     numero = ''
     votoBranco = false

     for (i = 0; i < etapa.numeros; i++) {
          if (i === 0) {
               numeroHTML += '<div class="numero pisca"></div>'
          } else {
               numeroHTML += '<div class="numero"></div>'
          }
     }

     seuVoto.style.display = 'none'
     cargo.innerHTML = etapa.titulo
     dadosCandidato.innerHTML = ''
     aviso.style.display = 'none'
     fotos.innerHTML = ''
     numeros.innerHTML = numeroHTML
}

telaInicial()