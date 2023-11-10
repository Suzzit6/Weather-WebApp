let search = document.getElementById("search-bar")
let submit = document.getElementById("submit")
let place = document.getElementById("place")
let temperature = document.getElementById("temperature")
let clouds = document.getElementById("clouds")
clouds.style.display = 'none'
let north = document.getElementById("north")
north.style.display = 'none'
let sunny = document.getElementById("sunny")
sunny.style.display = 'none'
let thunderstorm = document.getElementById("thunderstorm")
  thunderstorm.style.display = 'none'
let rain = document.getElementById("rain")
  rain.style.display = 'none'


let pop_error = document.getElementById("error")

submit.addEventListener("click", () => {
  let city = search.value;
  let key = "43bfa546bf8e048ca8a193d372a69a79"
  let url = "https://api.openweathermap.org/data/2.5/weather?units=metric"
  let weather = fetch(url + `&q=${city}&appid=${key}`)

  weather.then((response) => {
    return response.json()
  }).then((data) => {
    if(data.weather[0].main === "Thunderstorm" || data.weather[0].main === "Tornado" ){
      north.style.display = 'none'
      clouds.style.display = 'none'
      sunny.style.display = 'none'
      rain.style.display = 'none'
      thunderstorm.style.display = 'block'
    }
    
    if ( data.weather[0].main === "Drizzle" || data.weather[0].main === "Rain") {
      north.style.display = 'none'
      thunderstorm.style.display = 'none'
      clouds.style.display = 'none'
      sunny.style.display = 'none'
      rain.style.display = 'block';
    }

    if(data.weather[0].main === "Snow"){
      thunderstorm.style.display = 'none'
      clouds.style.display = 'none'
      sunny.style.display = 'none'
      rain.style.display = 'none';
      north.style.display = 'block'
    }
    
    if ( data.weather[0].main === "Clear") {
      thunderstorm.style.display = 'none'
      clouds.style.display = 'none'
      rain.style.display = 'none';
      north.style.display = 'none'
      sunny.style.display = 'block';
    }
    
    if (
      data.weather[0].main == "Mist" || data.weather[0].main === "Smoke"
      || data.weather[0].main === "Haze" || data.weather[0].main === "Dust"
      || data.weather[0].main === "Fog" || data.weather[0].main === "Sand"
      || data.weather[0].main === "Dust" || data.weather[0].main === "Ash" || data.weather[0].main === "Squall"|| data.weather[0].main === "Clouds") {
      thunderstorm.style.display = 'none'
      rain.style.display = 'none';
      north.style.display = 'none'
      sunny.style.display = 'none';
      clouds.style.display = 'block';

    }
    
    if (data && data.name && data.main && data.main.temp) {
      place.innerHTML = `<h1> ${data.name} , (${data.sys.country}) </h1>`
      temperature.innerHTML = `<h2> ${data.main.temp}°c </h2>`
    }
    else {
      alert("Weather data is Incomplete Or unavavailable for this Location")
    }
  }).catch((error) => {
    alert("Incorrect Location")
  })
})

setInterval(function() {
  let Daynames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  let MonthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];


  let time = document.getElementById("time")
  let date = document.getElementById("date")
  let present_date = new Date()
  let day = Daynames[present_date.getDay()]
  let month = MonthNames[present_date.getMonth()]
  let date_ = present_date.getDate()
  let year = present_date.getFullYear()

  let current_hours = present_date.getHours()
  let current_minutes = present_date.getMinutes()
  time.innerHTML = `${current_hours}:${current_minutes}`
  date.innerHTML = `${day }: ${ date_ } ${ month } ${ year } `
 },1000)
