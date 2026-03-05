// Footer Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Temple Data Array (7 + 3 custom temples)
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  // ➕ Added Temples
  {
    templeName: "Benin City Nigeria",
    location: "Benin City, Nigeria",
    dedicated: "2023, April, 10",
    area: 9800,
    imageUrl: "images/benin.png",
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85000,
    imageUrl: "images/provocity.jpg",
  },
  {
    templeName: "Salt Lake City Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/saltlake.png",
  },
];

// Reference to album grid
const templeContainer = document.querySelector(".album-grid");

// Render Function
function renderTemples(templesList) {
  templeContainer.innerHTML = ""; // Clear grid

  templesList.forEach((temple) => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
      <strong>${temple.templeName}</strong><br>
      Location: ${temple.location}<br>
      Dedicated: ${temple.dedicated}<br>
      Area: ${temple.area.toLocaleString()} sq ft
    `;

    card.appendChild(img);
    card.appendChild(caption);
    templeContainer.appendChild(card);
  });
}

// Initial Load
renderTemples(temples);

// Filters
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const filter = link.textContent;

    document.querySelector(".main-title").textContent = filter;

    switch (filter) {
      case "Home":
        renderTemples(temples);
        break;
      case "Old":
        renderTemples(
          temples.filter((t) => {
            const year = parseInt(t.dedicated.split(",")[0]);
            return year < 1900;
          })
        );
        break;
      case "New":
        renderTemples(
          temples.filter((t) => {
            const year = parseInt(t.dedicated.split(",")[0]);
            return year > 2000;
          })
        );
        break;
      case "Large":
        renderTemples(temples.filter((t) => t.area > 90000));
        break;
      case "Small":
        renderTemples(temples.filter((t) => t.area < 10000));
        break;
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu");
  const navigation = document.querySelector(".navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("show");
    });
  }
});
