const key ='f3587a832cbde6e47b1493fb6b17a12c'


const setQuery=(e)=>{

    if(e.keyCode == '13'){
        getResult(searchBar.value)
    }
}

const getResult = (cityName)=>{
    let query =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result)=>{
   let city=document.querySelector(".city")
   city.innerText = `${result.name},${result.sys.country}`

   let temp= document.querySelector(".temp")
   temp.innerText=`${result.main.temp}°C`

   let desc= document.querySelector(".desc")
   desc.innerText=`${result.weather[0].description}`
}
const searchBar =document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)