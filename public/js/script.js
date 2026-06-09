const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "image/laptop.jpg"
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
    image: "image/mobile.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    price: 2500,
    image: "image/headphone.jpg"
  }
];

const productContainer =
document.getElementById("products");

products.forEach(product => {

  productContainer.innerHTML += `

  <div class="card">

    <img src="${product.image}">

    <h3>
      <a href="product.html?id=${product.id}">
        ${product.name}
      </a>
    </h3>

    <p>₹${product.price}</p>

    <button onclick="addToCart(${product.id})">
      Add To Cart
    </button>

  </div>

  `;

});

function addToCart(id) {

  const product =
  products.find(p => p.id === id);

  let cart =
  JSON.parse(localStorage.getItem("cart"))
  || [];

  const existingProduct =
  cart.find(item => item.id === id);

  if(existingProduct){

    existingProduct.quantity += 1;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });

  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  alert("Product Added To Cart");

}