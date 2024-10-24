const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'
 
async function visualizarInformacoes (){
    const res = await fetch (url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
    const pessoasNoMundo = (dados.total_pessoas_conectadas)/1e9
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas * 100))
    conts porcetagemConectada = ((pessoasConectadas / total_pessoas_conectadas) * 100).toFixed(2) 



    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = `você sabia que o mundo tem ${pessoasNoMundo} de pessoas e que aproximadamente ${pessoasConectadas} estão conectadas em alguma rede social e passam em média ${horas} horas conectadas.`
    
    const container = document.getElementsById('graficos-container') 
    container.appendChild(paragrafo)
    
}
visualizarInformacoes ()




