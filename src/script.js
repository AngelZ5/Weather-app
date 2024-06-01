const key = "1ddd7376a0f8c0ba0524e8a509328889";

function screenInfo(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Weather in " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".weather").innerHTML = data.weather[0].description;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(
    ".time-icon"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function searchcity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  ).then((response) => response.json());
  console.log(data);
  screenInfo(data);
}

function searchCityClick() {
  const city = document.querySelector("#city-input").value;
  searchcity(city);
}
