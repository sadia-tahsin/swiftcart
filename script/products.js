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
                        <button class="btn btn-outline btn-sm flex-1">
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

loadcategories()