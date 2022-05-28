document.getElementById("result").style.display = "none";
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
    .then((response) => {
      console.log(response);
      let cricket = document.getElementById("cricket");
      let football = document.getElementById("football");
      let golf = document.getElementById("golf");

      document.getElementById("result").style.display = "block";
      cricket.style.display = "block";
      football.style.display = "block";
      golf.style.display = "block";

      //rendering cricket results
      if (response.cricket.length === 0) {
        cricket.style.display = "none";
      } else {
        let str = "";
        for (let i = 0; i < response.cricket.length; i++) {
          str += `<h3>Match ${i}</h3>
          <p>Stadium : ${response.cricket[i].stadium}</p>
          <p>Country : ${response.cricket[i].country}</p>
          <p>Tournament : ${response.cricket[i].tournament}</p>
          <p>Start : ${response.cricket[i].start}</p>
          <p>Match : ${response.cricket[i].match}</p>`;
        }
        cricket.innerHTML = "<h2>Cricket : </h2>" + str;
      }

      //rendering football events
      if (response.football.length === 0) {
        football.style.display = "none";
      } else {
        let str = "";
        for (let i = 0; i < response.football.length; i++) {
          str += `<h3>Match ${i}</h3>
          <p>Stadium : ${response.football[i].stadium}</p>
          <p>Country : ${response.football[i].country}</p>
          <p>Tournament : ${response.football[i].stadium}</p>
          <p>Start : ${response.football[i].stadium}</p>
          <p>Match : ${response.football[i].stadium}</p>`;
        }
        football.innerHTML = "<h2>Football : </h2>" + str;
      }

      //rendering golf events
      if (response.golf.length === 0) {
        golf.style.display = "none";
      } else {
        let str = "";
        for (let i = 0; i < response.golf.length; i++) {
          str += `<h3>Match ${i}</h3>
          <p>Stadium : ${response.golf[i].stadium}</p>
          <p>Country : ${response.golf[i].country}</p>
          <p>Tournament : ${response.golf[i].tournament}</p>
          <p>Start : ${response.golf[i].start}</p>
          <p>Match : ${response.golf[i].match}</p>`;
        }
        golf.innerHTML = "<h2>Golf : </h2>" + str;
      }

      console.log(response.golf.length);
    })
    .catch((err) => {
      console.error(err);
    });
}
