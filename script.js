let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '6087bcef68dd5495f9b96cfac63c74d2'
let difKelvin = 273.15



document.getElementById('botonBusqueda').addEventListener('click', () => {
        const ciudad = document.getElementById("ciudadEntrada").value

        if(ciudad){
              fechDatosClima(ciudad)          
        }


})



function fechDatosClima(ciudad){
        fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)     // ``
        .then(data => data.json())
        .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
        console.log(data)    //para verificar la data que viene de la API
        const divDatosClima = document.getElementById('datosClima')
        divDatosClima.innerHTML=''

        const ciudadNombre = data.name
        const temperatura =data.main.temp
        const descripcion = data.weather[0].description
        const humedad = data.main.humidity
        const incono = data.weather[0].icon

        const ciudadTituloInfo = document.createElement('h2')
        ciudadTituloInfo.textContent = ciudadNombre

        const temperaturaInfo = document.createElement('p')
        temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)} °C`

        const humedadInfo = document.createElement('p')
        humedadInfo.textContent = `Humedad: ${humedad} % `

        const descripcionInfo = document.createElement('p')
        descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`

        const iconoInfo = document.createElement('img')
        iconoInfo.src='https://openweathermap.org/img/wn/10d@2x.png'

        divDatosClima.appendChild(ciudadTituloInfo)
        divDatosClima.appendChild(temperaturaInfo)
        divDatosClima.appendChild(humedadInfo)
        divDatosClima.appendChild(descripcionInfo)
        divDatosClima.appendChild(iconoInfo)



        




}