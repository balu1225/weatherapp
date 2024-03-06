
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?&APPID=939adc5cbb1b2bd738ab3edb25826599&units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");
async function checkWeather(city){
 const response = await fetch(apiUrl+city);
 var data= await response.json();
 console.log(data);
 document.querySelector(".city").innerHTML= data.name;
 document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°C";
 document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
 document.querySelector(".wind ").innerHTML= data.wind.speed+" km/h";
 if (data.weather[0].main == "Clouds"){
    weatherIcon.src="images/clouds.png";
 }
 else  if (data.weather[0].main == "Clear"){
    weatherIcon.src="images/clear.png";
 }
 else  if (data.weather[0].main == "Dizzle"){
    weatherIcon.src="images/dizzle.png";
 }
 else  if (data.weather[0].main == "Mist"){
    weatherIcon.src="images/mist.png";
 }
 else  if (data.weather[0].main == "Rain"){
    weatherIcon.src="images/rain.png";
 }
 else  if (data.weather[0].main == "Snow"){
    weatherIcon.src="images/snow.png";
 }
 
 document.querySelector(".weather").style.display="block"
 
 
}
searchBtn.addEventListener("click", function clicker (){
    checkWeather(searchBox.value);
} )
