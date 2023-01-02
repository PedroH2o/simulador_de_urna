function botaoCorrige() {
     telaInicial()
}

function botaoBranco() {
     votoBranco = true
     seuVoto.style.display = 'block'
     aviso.style.display = 'block'
     numeros.innerHTML = ''
     dadosCandidato.innerHTML = `<div class="aviso pisca" > VOTO EM BRANCO </div>`
     fotos.innerHTML = ''
}

function botaoConfirma() {
     let etapa = etapas[etapaAtual]
     let votoConfirmado = false

     if (votoBranco === true) {
          votoConfirmado = true
          votos.push({
               etapa: etapas[etapaAtual].titulo,
               voto: 'branco'
          })
     } else if (numero.length === etapa.numeros) {
          votoConfirmado = true
          votos.push({
               etapa: etapas[etapaAtual].titulo,
               voto: numero
          })
     }

     if (votoConfirmado) {
          etapaAtual++
          if (etapas[etapaAtual] !== undefined) {
               telaInicial()
          } else {
               document.querySelector('.tela').innerHTML = `
               <div class="fim pisca" >FIM</div>
               <p class="votou">VOTOU</p>`
               console.log(votos)
          }
     }
}

