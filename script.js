const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c13f08ab1dmshb713fcf18dc9a4ep1a8f19jsnf2e0a9f83901",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  city_name.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      if (feels_like > 30) {
        mood.innerHTML = "Hot";
      } else {
        if (feels_like < 20) {
          mood.innerHTML = "Cold";
        } else mood.innerHTML = "Normal";
      }
      console.log(response);
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
const defaultCity = () => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + "delhi",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      delhi_temp.innerHTML = response.temp;
      delhi_humidity.innerHTML = response.humidity;
      delhi_max_temp.innerHTML = response.max_temp;
      delhi_min_temp.innerHTML = response.min_temp;
    })
    .catch((err) => console.error(err));
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
      "Allahabad",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      Allahabad_temp.innerHTML = response.temp;
      Allahabad_humidity.innerHTML = response.humidity;
      Allahabad_max_temp.innerHTML = response.max_temp;
      Allahabad_min_temp.innerHTML = response.min_temp;
    })
    .catch((err) => console.error(err));
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + "Lucknow",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      Lucknow_temp.innerHTML = response.temp;
      Lucknow_humidity.innerHTML = response.humidity;
      Lucknow_max_temp.innerHTML = response.max_temp;
      Lucknow_min_temp.innerHTML = response.min_temp;
    })
    .catch((err) => console.error(err));
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
      "Bangalore",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      Bangalore_temp.innerHTML = response.temp;
      Bangalore_humidity.innerHTML = response.humidity;
      Bangalore_max_temp.innerHTML = response.max_temp;
      Bangalore_min_temp.innerHTML = response.min_temp;
    })
    .catch((err) => console.error(err));
};
defaultCity();
getWeather("Delhi");
