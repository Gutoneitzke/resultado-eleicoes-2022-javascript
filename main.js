import axios from 'axios'

const url = 'https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json';

function refreshData(){
  
  var resultBolsonaro = []
  var resultLula = []
  var votosBolsonaro = 0
  var votosLula = 0
  var totalVotos = 0

  axios
    .get(url)
    .then(response=> {
      resultBolsonaro = response.data.cand.find(x => x.nm == 'JAIR BOLSONARO')
      resultLula = response.data.cand.find(x => x.nm == 'LULA')

      votosBolsonaro = parseFloat(resultBolsonaro.vap)
      votosLula      = parseFloat(resultLula.vap)

      console.log('Bolsonaro | ' + resultBolsonaro.pvap + '%' + ' | Votos: ' + votosBolsonaro.toLocaleString('pt-BR'))
      console.log('Lula      | ' + resultLula.pvap + '%' + ' | Votos: ' + votosLula.toLocaleString('pt-BR'))

      console.log('----------');
      totalVotos = votosBolsonaro + votosLula
      console.log('Total de votos: '+totalVotos.toLocaleString('pt-BR'))
      console.log(response.data.pst+'% das seções totalizadas')

      console.log(new Date)
    })
}

setInterval(refreshData, 10000)
