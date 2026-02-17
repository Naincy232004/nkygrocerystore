// Updated product data with all images from frontend/image folder
const products = [
  { id: 1, name: "Apple", price: 200, image: "/frontend/image/apple_image.png" },
  { id: 2, name: "Bakery", price: 150, image: "/frontend/image/bakery_image.png" },
  { id: 3, name: "Banana", price: 100, image: "/frontend/image/banana_image_1.png" },
  { id: 4, name: "Barley", price: 120, image: "/frontend/image/barley_image.png" },
  { id: 5, name: "Basmati Rice", price: 180, image: "/frontend/image/basmati_rice_image.png" },
  { id: 6, name: "Bottles", price: 90, image: "/frontend/image/bottles_image.png" },
  { id: 7, name: "Brown Bread", price: 110, image: "/frontend/image/brown_bread_image.png" },
  { id: 8, name: "Brown Rice", price: 160, image: "/frontend/image/brown_rice_image.png" },
  { id: 9, name: "Butter Croissant", price: 130, image: "/frontend/image/butter_croissant_image.png" },
  { id: 10, name: "Carrot", price: 80, image: "/frontend/image/carrot_image.png" },
  { id: 11, name: "Cheese", price: 250, image: "/frontend/image/cheese_image.png" },
  { id: 12, name: "Chocolate Cake", price: 300, image: "/frontend/image/chocolate_cake_image.png" },
  { id: 13, name: "Coca Cola", price: 60, image: "/frontend/image/coca_cola_image.png" },
  { id: 14, name: "Dairy Product", price: 200, image: "/frontend/image/dairy_product_image.png" },
  { id: 15, name: "Eggs", price: 150, image: "/frontend/image/eggs_image.png" },
  { id: 16, name: "Fanta", price: 60, image: "/frontend/image/fanta_image_1.png" },
  { id: 17, name: "Fresh Fruits", price: 180, image: "/frontend/image/fresh_fruits_image.png" },
  { id: 18, name: "Grain", price: 140, image: "/frontend/image/grain_image.png" },
  { id: 19, name: "Grapes", price: 170, image: "/frontend/image/grapes_image_1.png" },
  { id: 20, name: "Knorr Soup", price: 90, image: "/frontend/image/knorr_soup_image.png" },
  { id: 21, name: "Maggi", price: 50, image: "/frontend/image/maggi_image.png" },
  { id: 22, name: "Maggi Oats", price: 70, image: "/frontend/image/maggi_oats_image.png" },
  { id: 23, name: "Mango", price: 200, image: "/frontend/image/mango_image_1.png" },
  { id: 24, name: "Milk", price: 150, image: "/frontend/image/milk.png" },
  { id: 25, name: "Onion", price: 90, image: "/frontend/image/onion_image_1.png" },
  { id: 26, name: "Orange", price: 180, image: "/frontend/image/orange_image.png" },
  { id: 27, name: "Organic Vegetable", price: 160, image: "/frontend/image/organic_vegitable_image.png" },
  { id: 28, name: "Paneer", price: 220, image: "/frontend/image/paneer_image.png" },
  { id: 29, name: "Paneer 2", price: 230, image: "/frontend/image/paneer_image_2.png" },
  { id: 30, name: "Pepsi", price: 60, image: "/frontend/image/pepsi_image.png" },
  { id: 31, name: "Pepsi 2", price: 65, image: "/frontend/image/pepsi_image_2.png" },
  { id: 32, name: "Potato 1", price: 70, image: "/frontend/image/potato_image_1.png" },
  { id: 33, name: "Potato 2", price: 75, image: "/frontend/image/potato_image_2.png" },
  { id: 34, name: "Potato 4", price: 80, image: "/frontend/image/potato_image_4.png" },
  { id: 35, name: "Quinoa", price: 190, image: "/frontend/image/quinoa_image.png" },
  { id: 36, name: "Seven Up", price: 60, image: "/frontend/image/seven_up_image_1.png" },
  { id: 37, name: "Spinach", price: 100, image: "/frontend/image/spinach_image_1.png" },
  { id: 38, name: "Sprite", price: 60, image: "/frontend/image/sprite_image_1.png" },
  { id: 39, name: "Tomato", price: 90, image: "/frontend/image/tomato_image.png" },
  { id: 40, name: "Tomato 2", price: 95, image: "/frontend/image/tomato_image_2.png" },
  { id: 41, name: "Top Ramen", price: 50, image: "/frontend/image/top_ramen_image.png" },
  { id: 42, name: "Vanilla Muffins", price: 120, image: "/frontend/image/vanilla_muffins_image.png" },
  { id: 43, name: "Wheat Flour", price: 140, image: "/frontend/image/wheat_flour_image.png" },
  { id: 44, name: "Whole Wheat Bread", price: 130, image: "/frontend/image/whole_wheat_bread_image.png" },
  { id: 45, name: "Yippee", price: 60, image: "/frontend/image/yippee_image.png" },
  { id: 46, name: "Yogurt", price: 110, image: "/frontend/image/yogurt_image_1.png" },
];

// Render products dynamically
function renderProducts(productList) {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = "";
  productList.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>Price: Rs ${product.price}/kg</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productDiv);
  });
}

// Cart functionality
let cart = [];

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    alert(`${product.name} added to cart!`);
    // Optionally update cart UI here
  }
}

// Search functionality
document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const query = document.getElementById("search-input").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  renderProducts(filteredProducts);
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});
