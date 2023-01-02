let seuVoto = document.querySelector('.voto_para span')
let cargo = document.querySelector('.cargo span')
let dadosCandidato = document.querySelector('.dados_candidato')
let aviso = document.querySelector('.d-2')
let fotos = document.querySelector('.foto_candidato')
let numeros = document.querySelector('.numeros')



let etapaAtual = 0
let numero = ''
let votoBranco = false
let votos = []


function comecarEtapa() {
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

function atualizaInterface() {
     let etapa = etapas[etapaAtual]

     let candidato = etapa.candidatos.filter((item) => {
          if (item.numero === numero) {
               return true
          } else {
               return false
          }
     })


     

     if (candidato.length > 0) {
          candidato = candidato[0]
          seuVoto.style.display = 'block'
          aviso.style.display = 'block'
          dadosCandidato.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido} <br/> ${candidato.vice}`

          let fotosHtml = ''
          for (i in candidato.fotos) {
               if(candidato.fotos[i].small){
                    fotosHtml += `<div class="foto vice"> <img src="assets/imagens/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
               }else{
                    fotosHtml += `<div class="foto"> <img src="assets/imagens/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
               }
          }
          fotos.innerHTML = fotosHtml

     }else{
          seuVoto.style.display = 'block'
          aviso.style.display = 'block'
          dadosCandidato.innerHTML = `<div class="aviso pisca" > VOTO NULO </div>`
     }
}

function clicou(n) {
     let elNumero = document.querySelector('.numero.pisca')

     if (elNumero !== null) {
          elNumero.innerHTML = n
          numero = `${numero}${n}`

          elNumero.classList.remove('pisca')

          if (elNumero.nextElementSibling !== null) {
               elNumero.nextElementSibling.classList.add('pisca')
          } else {
               atualizaInterface()
          }
     }
}

function corrige(){
     comecarEtapa()
}

function branco(){
     
          numero = ' '
          votoBranco = true
          seuVoto.style.display = 'block'
          aviso.style.display = 'block'
          numeros.innerHTML = ''
          dadosCandidato.innerHTML = `<div class="aviso pisca" > VOTO EM BRANCO </div>`
          fotos.innerHTML = ''
}

function confirma() {
     let etapa = etapas[etapaAtual]
     
     let votoConfirmado = false

     if(votoBranco === true){
          
          votoConfirmado = true
          votos.push({
               etapa: etapas[etapaAtual].titulo,
               voto: 'branco'
          })
     }else if ( numero.length === etapa.numeros){
          votoConfirmado = true
          votos.push({
               etapa: etapas[etapaAtual].titulo,
               voto: numero
          })
     }

     if(votoConfirmado){
          etapaAtual++
          if(etapas[etapaAtual] !== undefined){
               comecarEtapa()
          }else{
               document.querySelector('.tela').innerHTML = `<div class="fim pisca" >FIM</div>`
               console.log(votos)
          }
     }
}

comecarEtapa()