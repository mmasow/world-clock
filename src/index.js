function updateTime() {
  // Johannesburg
  let JohannesburgElement = document.querySelector("#Johannesburg");
  if (JohannesburgElementElement) {
    let JohannesburgElementDateElement =
      JohannesburgElementElement.querySelector(".date");
    let JohannesburgElementTimeElement =
      JohannesburgElementElement.querySelector(".time");
    let JohannesburgElementTime = moment().tz("Africa/Johannesburg");

    JohannesburgElementDateElement.innerHTML =
      JohannesburgElementTime.format("MMMM	Do YYYY");
    JohannesburgElementTimeElement.innerHTML = JohannesburgElementTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // East Rand
  let EastRandElement = document.querySelector("#EastRand");
  if (EastRandElement) {
    let EastRandDateElement = EastRandElement.querySelector(".date");
    let EastRandTimeElement = EastRandElement.querySelector(".time");
    let EastRandTime = moment().tz("Africa/Johannesburg");

    EastRandDateElement.innerHTML = EastRandTime.format("MMMM	Do YYYY");
    EastRandTimeElement.innerHTML = EastRandTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Pretoria
  let PretoriaElement = document.querySelector("#Pretoria");
  if (PretoriaElement) {
    let PretoriaDateElement = PretoriaElement.querySelector(".date");
    let PretoriaTimeElement = PretoriaElement.querySelector(".time");
    let PretoriaTime = moment().tz("Africa/Johannesburg");

    PretoriaDateElement.innerHTML = PretoriaTime.format("MMMM	Do YYYY");
    PretoriaTimeElement.innerHTML = PretoriaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
