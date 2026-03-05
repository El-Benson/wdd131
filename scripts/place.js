// ========== Static Data Section ==========
const dataSection = document.querySelector("#data-section ul");
dataSection.innerHTML = `
  <li><strong>Area:</strong> 1,204 km²</li>
  <li><strong>Population:</strong> 1.7 million</li>
  <li><strong>Capital:</strong> Benin City</li>
  <li><strong>Languages:</strong> English, Edo</li>
  <li><strong>Currency:</strong> Nigerian Naira (₦)</li>
  <li><strong>Time Zone:</strong> WAT (UTC+1)</li>
  <li><strong>Calling Code:</strong> +234</li>
  <li><strong>Internet TLD:</strong> .ng</li>
`;

// ========== Static Weather Data ==========
const temp = 29;
const windSpeed = 18;
const description = "Partly Cloudy";
const iconSrc = "https://openweathermap.org/img/wn/10d@2x.png"; // Colorful icon
const iconAlt = description;

// ===== Weather Section =====
const weatherHeading = document.querySelector("#weather-section h2");
const iconImg = document.createElement("img");
iconImg.src = iconSrc;
iconImg.alt = iconAlt;
iconImg.id = "weather-icon";

// Responsive icon placement
function placeWeatherIcon() {
  iconImg.remove(); // Remove first if already placed
  if (window.innerWidth >= 768) {
    // Large view: inline
    weatherHeading.appendChild(iconImg);
  } else {
    // Mobile view: below h2
    weatherHeading.insertAdjacentElement("afterend", iconImg);
  }
}

// Initial placement
placeWeatherIcon();
// Re-check on window resize
window.addEventListener("resize", placeWeatherIcon);

// Fill weather list
const weatherList = document.querySelector("#weather-section ul");
weatherList.innerHTML = `
  <li><strong>Temperature:</strong> ${temp}°C</li>
  <li><strong>Conditions:</strong> ${description}</li>
  <li><strong>Wind Speed:</strong> ${windSpeed} km/h</li>
  <li><strong>Wind Chill:</strong> ${calculateWindChill(temp, windSpeed)}</li>
`;

// Wind chill calculator
function calculateWindChill(t, s) {
  if (t <= 10 && s > 4.8) {
    const chill =
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(s, 0.16) +
      0.3965 * t * Math.pow(s, 0.16);
    return chill.toFixed(1) + "°C";
  } else {
    return "N/A";
  }
}

// ===== Footer Info =====
const yearSpan = document.querySelector("#current-year");
const modifiedSpan = document.querySelector("#last-modified");
const modifiedDate = new Date(document.lastModified);

const formatted = modifiedDate.toLocaleString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = `${formatted} by Ade-Benson Kehinde Michael`;
