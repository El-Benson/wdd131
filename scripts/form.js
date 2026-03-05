// Product dropdown
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 },
];

const productSelect = document.getElementById("product");
if (productSelect) {
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

// Shared footer content (year + last modified)
const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (modifiedSpan) modifiedSpan.textContent = document.lastModified;

// Review count tracking (on review.html only)
const reviewCountSpan = document.getElementById("review-count");
if (reviewCountSpan) {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);
  reviewCountSpan.textContent = count;
}
