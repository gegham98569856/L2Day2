const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    { id: 4, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    { id: 5, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    { id: 6, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    { id: 7, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    { id: 8, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 9, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 10, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 11, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 12, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 13, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] }

];


function filter(){
    let selectedCategory = document.getElementById("Category").value;
    let filteredProducts = [];
    if(selectedCategory === "All"){
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === selectedCategory);
    }
    displayProducts(filteredProducts);
    
}

function displayProducts(products){
    let info = document.getElementById("info");
    info.innerHTML = ''; 
    if (products.length === 0) {
        info.innerHTML = '<p>No products found.</p>';
        return;
      }
    products.forEach(product => {
        let infoDiv = document.createElement("div");
        infoDiv.innerHTML = `
            <h3>Name : ${product.name}</h3>
            <p>Category : ${product.category}</p>
            <p>Price : ${product.price}</p>
            <p>Tags : ${product.tags.join(", ")}</p>
        `;
        info.appendChild(infoDiv); 
    });
}

function filterData() {
    let filteredData = products.filter(item => {
        if (document.getElementById('Eco-friendly').checked && item.tags.includes('eco-friendly')) {
            return true
        }
        if (document.getElementById('New').checked && item.tags.includes('new')) {
            return true;
        }
        if (document.getElementById('Sale').checked && item.tags.includes('sale')) {
            return true;
        }
        return false;
    });
    displayProducts(filteredData)
}
