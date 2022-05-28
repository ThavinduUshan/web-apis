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

      cricket.style.display = "block";
      football.style.display = "block";
      golf.style.display = "block";
      document.getElementById("result").style.display = "block";

      cricket = cricket.innerHTML = "<h2>Cricket : </h2>";
      football = football.innerHTML = "<h2>FootBall : </h2>";
      golf = golf.innerHTML = "<h2>Golf : </h2>";

      //rendering cricket results
      if (response.cricket.length === 0) {
        cricket.style.display = "none";
      } else {
        let str = "";
        for (let i = 0; i < response.current.length; i++) {
          str += `<h3>Match ${i}</h3>
          <p>Stadium : ${response.cricket.stadium}</p>
          <p>Country : ${response.cricket.country}</p>
          <p>Tournament : ${response.cricket.stadium}</p>
          <p>Start : ${response.cricket.stadium}</p>
          <p>Match : ${response.cricket.stadium}</p>`;
        }
        cricket.innerHTML = str;
      }

      //rendering football events
      if (response.cricket.length === 0) {
        football.style.display = "none";
      } else {
        let str = "";
        for (let i = 0; i < response.current.length; i++) {
          str += `<h3>Match ${i}</h3>
          <p>Stadium : ${response.football.stadium}</p>
          <p>Country : ${response.football.country}</p>
          <p>Tournament : ${response.football.stadium}</p>
          <p>Start : ${response.football.stadium}</p>
          <p>Match : ${response.football.stadium}</p>`;
        }
        football.innerHTML = str;
      }

      //rendering golf events
      //rendering cricket results
      if (response.cricket.length === 0) {
        cricket.style.display = "none";
      } else {
        let str = "";
        for (let i = 0; i < response.current.length; i++) {
          str += `<h3>Match ${i}</h3>
          <p>Stadium : ${response.cricket.stadium}</p>
          <p>Country : ${response.cricket.country}</p>
          <p>Tournament : ${response.cricket.stadium}</p>
          <p>Start : ${response.cricket.stadium}</p>
          <p>Match : ${response.cricket.stadium}</p>`;
        }
        cricket.innerHTML = str;
      }

      //rendering football events
      if (response.cricket.length === 0) {
        golf.style.display = "none";
      } else {
        let str = "";
        for (let i = 0; i < response.current.length; i++) {
          str += `<h3>Match ${i}</h3>
          <p>Stadium : ${response.golf.stadium}</p>
          <p>Country : ${response.golf.country}</p>
          <p>Tournament : ${response.golf.stadium}</p>
          <p>Start : ${response.golf.stadium}</p>
          <p>Match : ${response.golf.stadium}</p>`;
        }
        golf.innerHTML = str;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
