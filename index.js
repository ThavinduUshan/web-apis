document.getElementById("results").style.display = "none";

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
  const variable = "helloooo";
  document.getElementById("results").style.display = "block";
  document.getElementById("results").innerHTML = `<h1>Results</h1>
      <h2>Location</h2>
      <p>Town :</p>
      <p>localtime : ${variable}</p>
      <h2>Weather</h2>
      <img src="icon" alt="">
      <p>Condition</p>
      <p>Cloud Precentage :</p>
      <p>feels like in C :</p>
      <p>feels like in F :</p>
      <p>Humidity :</p>
      <p>Wind Degree :</p>
      <p>Wind in kph :</p>`;
}
