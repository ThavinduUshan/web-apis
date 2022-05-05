//document.getElementById("results").style.display = "none";
document.getElementById("results").innerHTML = `<h1>Results</h1>
      <div class="location-section">      
      <h2>Location</h2>
      <p>Town :</p>
      <p>localtime : </p>
      </div>
      <div class="weather-section">
      <h2>Weather</h2>
      <img src="icon" alt="">
      <p style="font-weight : bold; margin-bottom :30px; margin-top :20px">Condition</p>
      <p>Cloud Precentage :</p>
      <p>Feels like in C :</p>
      <p>Feels like in F :</p>
      <p>Humidity :</p>
      <p>Wind Degree :</p>
      <p>Wind in kph :</p>
      </div>`;

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
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  document.getElementById("results").style.display = "block";
}
