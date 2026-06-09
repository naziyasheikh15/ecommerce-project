const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "image/laptop.jpg",
    description: "High performance laptop"
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    image: "image/mobile.jpg",
    description: "Latest smartphone"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2500,
    image: "image/headphone.jpg",
    description: "Wireless headphones"
  }
];

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product = products.find(
  p => p.id === id
);

document.getElementById("productDetails")
.innerHTML = `
<div class="card">
  <img src="${product.image}">
  <h2>${product.name}</h2>
  <p>${product.description}</p>
  <h3>₹${product.price}</h3>
</div>
`;