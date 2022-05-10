document.getElementById("results").style.display = "none";
document.getElementById("error").style.display = "none";

function sendRequest() {
  let city = document.getElementById("city").value;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e04aba93d1mshc1808c971073845p15cefejsn186d3f4e99d8",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=" + city, options)
    .then((response) => response.json())
    .then((response) => {
      document.getElementById("results").style.display = "block";
      document.getElementById("results").innerHTML = `<h1>Results</h1>
      <div class="location-section">      
      <h2>Location</h2>
      <p>Country : ${response.location.country}</p>
      <p>Town : ${response.location.name} </p>
      <p>localtime : ${response.location.localtime} </p>
      </div>
      <div class="weather-section">
      <h2>Weather</h2>
      <img src="${response.current.condition.icon}" alt="">
      <p style="font-weight : bold; margin-bottom :30px; margin-top :20px">${response.current.condition.text}</p>
      <p>Cloud Precentage : ${response.current.cloud} </p>
      <p>Feels like in C : ${response.current.feelslike_c} </p>
      <p>Feels like in F :  ${response.current.feelslike_f}</p>
      <p>Humidity : ${response.current.humidity}</p>
      <p>Wind Degree : ${response.current.wind_degree}</p>
      <p>Wind in kph : ${response.current.wind_kph}</p>
      <p>Wind in mph : ${response.current.wind_mph}</p>
      </div>`;
    })
    .catch((err) => {
      console.log(err);
      document.getElementById("error").style.display = "block";
      document.getElementById(
        "error"
      ).style.display.innerHTML = `<p>${err}</p>`;
    });
}
