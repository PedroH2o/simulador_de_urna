function proximaEtapa() {
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
          if(etapa.titulo != 'PRESIDENTE'){
               dadosCandidato.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`
          }else{
               dadosCandidato.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido} <br/> Vice: ${candidato.vice}`
          }

          let fotosHtml = ''

          for (i in candidato.fotos) {
               if (candidato.fotos[i].small) {
                    fotosHtml += `<div class="foto vice"> <img src="assets/imagens/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
               } else {
                    fotosHtml += `<div class="foto"> <img src="assets/imagens/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`
               }
          }
          fotos.innerHTML = fotosHtml
     } else {
          seuVoto.style.display = 'block'
          aviso.style.display = 'block'
          dadosCandidato.innerHTML = `
          <div><h3>NÚMERO ERRADO</h3></div>
          <div class="aviso pisca" > VOTO NULO </div>
          `
     }
}
