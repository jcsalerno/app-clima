const apiKey = "AQUI É A SUA KEY";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature");
const desElement = document.querySelector("#description");
const weatherElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const getWeatherData = async (city) => {
  const apiWatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWatherURL);
  const data = await res.json();
  return data;
};

const showWeatherData = async (city) => {
  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  desElement.innerText = data.weather[0].description;
  weatherElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  //countryElement.setAttribute("src", apiCountryURL + data.sys.country);
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  showWeatherData(city);
});
