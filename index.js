console.log("page is loading");

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
}
