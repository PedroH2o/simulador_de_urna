function clickNumber(n) {
     let num = document.querySelector('.numero.pisca')
     
     if (num !== null) {
          num.innerHTML = n
          numero = `${numero}${n}`
          num.classList.remove('pisca')

          if (num.nextElementSibling !== null) {
               num.nextElementSibling.classList.add('pisca')
          } else {
               proximaEtapa()
          }
     }
}