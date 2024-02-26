function fetchProductData() {
    fetch("https://fakestoreapi.com/products/3")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((product) => {
        const productInfoElement = document.getElementById("productInfo");
        productInfoElement.innerHTML = `
                  <p>Title: ${product.title}</p>
                  <p>Price: $${product.price}</p>
                  <p>Description: ${product.description}</p>
                  <p>Category: ${product.category}</p>
                  <p>Rating: ${product.rating.rate} / 5 (${product.rating.count} reviews)</p>
              `;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        const productInfoElement = document.getElementById("productInfo");
        productInfoElement.innerHTML = "<p>Error fetching data</p>";
      });
  }
  
  document.addEventListener("DOMContentLoaded", fetchProductData);