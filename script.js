
const btn = document.getElementById("btn")

btn.addEventListener("click", function(event){
    event.preventDefault()
    
    let valor =  Number(document.getElementById("valor").value)
    let xMin = Number(document.getElementById("xMin").value)
    let xMax = Number(document.getElementById("xMax").value)
    let y = []
    let labels = []
    while(xMin <= xMax){
        y.push(valor*xMin)
        labels.push(xMin)
        xMin = xMin +1
    }
   const ctx = document.getElementById("myChart")
   const data = {
    labels, 
    datasets: [{
        data: y,
        label: 'Função linear'
   }]
}

const config = {
    type:'line',
    data: data,
}

const myChart = new Chart(
    ctx,
    config
)


})








    //let resultado = math.sqrt(valor)
    //let resultado = math.sin(valor)
    //let resultado = math.pow(valor,2)