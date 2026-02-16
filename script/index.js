const loadTrendingProducts = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const data = await res.json();

  // Sort by rating (highest first)
  const topRated = data
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);

  displayTrendingProducts(topRated);
};
const displayTrendingProducts = (products) => {
  const container = document.getElementById("trending-container");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
  <div class="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col">

    <!-- Image Box -->
    <div class="bg-gray-100 rounded-lg flex justify-center items-center h-56 mb-6 p-6">
      <img src="${product.image}" 
           class="h-40 object-contain" />
    </div>

    <!-- Category + Rating -->
    <div class="flex justify-between items-center text-sm mb-3">
      <span class="text-indigo-600 font-medium capitalize bg-sky-200 rounded-xl p-2">
        ${product.category}
      </span>
      <span class="text-yellow-500 font-medium">
        <i class="fa-solid fa-star"></i>
        ${product.rating.rate}
      </span>
    </div>

    <!-- Title -->
    <h3 class="font-semibold text-base mb-2 h-12 overflow-hidden">
      ${product.title}
    </h3>

    <!-- Price -->
    <p class="font-bold text-lg mb-4">
      $${product.price}
    </p>

    <!-- Buttons -->
   <div class="mt-auto flex justify-between gap-3">

  <button onclick="loadProductDetails(${product.id})"
    class="btn btn-outline btn-sm flex-1 flex items-center justify-center gap-2">
    <i class="fa-regular fa-eye"></i>
    Details
  </button>

  <button 
    class="btn bg-indigo-600 text-white btn-sm flex-1 hover:bg-indigo-700 border-none flex items-center justify-center gap-2">
    <i class="fa-solid fa-cart-shopping"></i>
    Add
  </button>

</div>

  </div>
`;

  
  });
};
loadTrendingProducts();