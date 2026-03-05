// scripts.js

// Set current year and last modified
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
});

// Weather data (general static values)
const weatherData = {
  temp: 28,
  condition: "Partly Cloudy",
  windSpeed: 10,
  icon: "https://openweathermap.org/img/wn/03d@2x.png",
};

// Calculate wind chill
function calculateWindChill(temp, wind) {
  if (temp <= 10 && wind > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  }
  return "N/A";
}

// Output weather
function displayWeather() {
  document.getElementById("temp").textContent = weatherData.temp;
  document.getElementById("condition").textContent = weatherData.condition;
  document.getElementById("wind").textContent = weatherData.windSpeed;
  document.getElementById("chill").textContent = calculateWindChill(
    weatherData.temp,
    weatherData.windSpeed
  );
  const icon = document.getElementById("weather-icon");
  icon.src = weatherData.icon;
  icon.alt = weatherData.condition;
}

displayWeather();

// Contact form validation + localStorage
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name && email && message) {
    let submissions = Number(localStorage.getItem("formSubmissions")) || 0;
    localStorage.setItem("formSubmissions", submissions + 1);
    alert(`Thanks for your message, ${name}! Form submitted successfully.`);
    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});
