document.getElementById("error").style.display = "none";
document.getElementById("cricket").style.display = "none";
document.getElementById("football").style.display = "none";
document.getElementById("golf").style.display = "none";

function sendRequest() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e04aba93d1mshc1808c971073845p15cefejsn186d3f4e99d8",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  fetch(
    "https://weatherapi-com.p.rapidapi.com/sports.json?q=Sri%20Lanka",
    options
  )
    .then((response) => response.json())
    .then((response) => {})
    .catch((err) => {
      console.error(err);
    });
}
