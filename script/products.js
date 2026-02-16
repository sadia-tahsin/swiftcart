const loadcategories = () =>{
    const url = "https://fakestoreapi.com/products/categories"
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCategories(data))
} 
const displayCategories = (data) => {
    const categoryBtn = document.getElementById("categoryBtn")
    categoryBtn.innerHTML = ""

    for (let item of data) {
        const btn = document.createElement("button")
        btn.className = "btn bg-gray-200 rounded-l"
        btn.innerText = item

        btn.addEventListener("click", () => {
            loadProductByCategory(item)
        })

        categoryBtn.append(btn)
    }
}

const loadProductByCategory = category => {
    const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayProductByCategory(data))
}

const displayProductByCategory = data => {
    const productsGrid = document.getElementById("products-grid")
    productsGrid.innerHTML = ""

    for (let item of data) {
        const prodCard = document.createElement("div")

        prodCard.innerHTML = `
            <div class="card bg-base-100 shadow-md hover:shadow-lg transition">

                <figure class="bg-gray-100 p-5 h-60 flex items-center justify-center">
                    <img src="${item.image}" 
                         class="h-40 object-contain" />
                </figure>

                <div class="card-body">
                    <span class="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded w-fit">
                        ${item.category}
                    </span>

                    <h2 class="text-sm font-semibold line-clamp-2">
                        ${item.title}
                    </h2>

                    <div class="flex items-center justify-between mt-2">
                        <p class="font-bold text-lg">$${item.price}</p>
                        <span class="text-sm text-yellow-500">
                             ${item.rating.rate}
                        </span>
                    </div>

                    <div class="mt-4 flex gap-2">
                        <button 
                        onclick="loadProductDetails(${item.id})"
                        class="btn btn-outline btn-sm flex-1">
                        Details
                        </button>

                        <button class="btn bg-indigo-600 text-white btn-sm flex-1 hover:bg-indigo-700 border-none">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        `

        productsGrid.append(prodCard)
    }
}
const loadProductDetails = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => showProductModal(data))
}
const showProductModal = (product) => {
    const modalContent = document.getElementById("modal-content")

    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6">

            <div class="bg-gray-100 p-6 flex items-center justify-center rounded">
                <img src="${product.image}" 
                     class="h-60 object-contain" />
            </div>

            <div>
                <h2 class="text-xl font-bold mb-3">
                    ${product.title}
                </h2>

                <p class="text-gray-600 text-sm mb-4">
                    ${product.description}
                </p>

                <div class="flex items-center justify-between mb-4">
                    <p class="text-2xl font-bold text-indigo-600">
                        $${product.price}
                    </p>

                    <p class="text-yellow-500 font-semibold">
                         ${product.rating.rate} 
                        (${product.rating.count} reviews)
                    </p>
                </div>

                <button class="btn bg-indigo-600 text-white w-full hover:bg-indigo-700 border-none">
                    Add to Cart
                </button>
            </div>
        </div>
    `

    document.getElementById("productModal").showModal()
}

loadcategories()