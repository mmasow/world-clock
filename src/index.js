function updateTime() {
  // Johannesburg
  let JohannesburgElement = document.querySelector("#Johannesburg");
  if (JohannesburgElement) {
    let JohannesburgElementDateElement =
      JohannesburgElement.querySelector(".date");
    let JohannesburgElementTimeElement =
      JohannesburgElement.querySelector(".time");
    let JohannesburgElementTime = moment().tz("Africa/Johannesburg");

    if (JohannesburgElementDateElement && JohannesburgElementTimeElement) {
      JohannesburgElementDateElement.innerHTML =
        JohannesburgElementTime.format("MMMM Do YYYY");
      JohannesburgElementTimeElement.innerHTML = JohannesburgElementTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }

  // Chicago
  let ChicagoElement = document.querySelector("#Chicago");
  if (ChicagoElement) {
    let ChicagoDateElement = ChicagoElement.querySelector(".date");
    let ChicagoTimeElement = ChicagoElement.querySelector(".time");
    let ChicagoTime = moment().tz("America/Chicago");

    ChicagoDateElement.innerHTML = ChicagoTime.format("MMMM	Do YYYY");
    ChicagoTimeElement.innerHTML = ChicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Dubai
  let DubaiElement = document.querySelector("#Dubai");
  if (DubaiElement) {
    let DubaiDateElement = DubaiElement.querySelector(".date");
    let DubaiTimeElement = DubaiElement.querySelector(".time");
    let DubaiTime = moment().tz("Asia/Dubai");

    DubaiDateElement.innerHTML = DubaiTime.format("MMMM	Do YYYY");
    DubaiTimeElement.innerHTML = DubaiTime.format(
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
