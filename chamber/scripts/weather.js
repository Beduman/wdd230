const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33&lon=-112&units=imperial&appid=df85fd3eae7d9b8211a7c6efca0497ad'

// select HTML elements in the document

async function apiFetch() {
  try {
      const response = await fetch(url);
      if (response.ok) {
          const data = await response.json();
          // console.log(data);
          displayResults(data);
      } else {
          throw new Error(await response.text());
      }
  } catch (error) {
      console.error(error);
  }
}
apiFetch();

function displayResults(data) {
  const currentTemp = document.querySelector("#current-temp");
  const weatherIcon = document.querySelector("#weather-icon");
  const captionDesc = document.querySelector("#weather-description");

  // Display current temperature
  currentTemp.innerHTML = `${data.main.temp} &deg;F`;

  // Weather icon and description
  data.weather.forEach((weatherEvent) => {
      const iconsrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
      let desc = weatherEvent.description;
      desc = capitalizeSting(desc);
      weatherIcon.setAttribute("src", iconsrc);
      weatherIcon.setAttribute("alt", desc);
      captionDesc.innerHTML = `${desc}`;
  });
}

function capitalizeSting(myString) {
  const words = myString.split(" ");

  return words
      .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
}
