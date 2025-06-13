function updateWeatherData(response) {
  let currentTemperature = Math.round(response.data.daily[0].temperature.day);
  let changeTemperature = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  changeTemperature.innerHTML = currentTemperature;

  let tomorrowTemp = Math.round(response.data.daily[1].temperature.day);
  let changeTomorrowTemp = document.querySelector("#first-day-temp");
  changeTomorrowTemp.innerHTML = tomorrowTemp;

  let secondDayTemp = Math.round(response.data.daily[2].temperature.day);
  let changeSecondDayTemp = document.querySelector("#second-day-temp");
  changeSecondDayTemp.innerHTML = secondDayTemp;

  let thirdDayTemp = Math.round(response.data.daily[3].temperature.day);
  let changeThirdDayTemp = document.querySelector("#third-day-temp");
  changeThirdDayTemp.innerHTML = thirdDayTemp;

  let fourthDayTemp = Math.round(response.data.daily[4].temperature.day);
  let changeFourthDayTemp = document.querySelector("#fourth-day-temp");
  changeFourthDayTemp.innerHTML = fourthDayTemp;

  let fifthDayTemp = Math.round(response.data.daily[5].temperature.day);
  let changeFifthDayTemp = document.querySelector("#fifth-day-temp");
  changeFifthDayTemp.innerHTML = fifthDayTemp;
}

function searchCity(city) {
  let apiKey = "tfafb400af42538491bd1a6a3a041o83";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Solbjerg");
