function sortProducts() {
  const sortValue = document.getElementById("sort").value;
  const container = document.querySelector(".product-grid");
  const products = Array.from(container.querySelectorAll(".product-container"));

  let sorted;

  switch (sortValue) {
    case "alpha":
      sorted = products.sort((a, b) =>
        a.dataset.name.localeCompare(b.dataset.name)
      );
      break;
    case "price-asc":
      sorted = products.sort((a, b) =>
        parseFloat(a.dataset.price) - parseFloat(b.dataset.price)
      );
      break;
    case "price-desc":
      sorted = products.sort((a, b) =>
        parseFloat(b.dataset.price) - parseFloat(a.dataset.price)
      );
      break;
    default:
      sorted = products; // no change
      break;
  }

  // Remove old and re-append sorted
  container.innerHTML = "";
  sorted.forEach(product => container.appendChild(product));
}
