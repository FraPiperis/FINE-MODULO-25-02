const productUrl = "https://striveschool-api.herokuapp.com/api/product/"

// DOM Elements

const inputName = document.getElementById("inputName")
const inputBrand = document.getElementById("inputBrand")
const inputPrice = document.getElementById("inputPrice")
const inputImage = document.getElementById("inputImg")
const inputDesc = document.getElementById("inputDesc")
const failureAlert = document.getElementById("failure")
const successAlert = document.getElementById("success")
const currentProduct = document.getElementById("currentProduct")
const returnBtn = document.getElementById("return")

// fetch current product with query string

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

function getCurrentProduct() {
    fetch(productUrl + productId, {
        headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA"}
    })
    .then(res => res.json())
    .then(product => {
        console.log(product)
        renderCurrentProduct(product)
        return product
    }
    )
    .catch(err => console.log(err))
}

// Render current product

function renderCurrentProduct({name, description, imageUrl, price}) {
    const card = document.createElement("div")
    card.classList.add("card", "bg-transparent", "border-0", "mb-5")

    const cardImg = document.createElement("img")
    cardImg.classList.add("img-fluid", "img-thumbnail")
    cardImg.src = imageUrl

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")

    const cardTitle = document.createElement("h4")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = name

    const cardDescription = document.createElement("p")
    cardDescription.classList.add("card-text")
    cardDescription.innerText = description

    const cardPrice = document.createElement("p")
    cardPrice.classList.add("card-text")
    cardPrice.innerText = price + "€"

    cardBody.append(cardTitle, cardDescription, cardPrice)
    card.append(cardImg, cardBody)
    currentProduct.appendChild(card)

    return card
}

// Edit products

function editProduct() {
    
    const name = inputName.value;
    const brand = inputBrand.value;
    const price = inputPrice.value;
    const imageUrl = inputImage.value;
    const description = inputDesc.value;

    if (!name || !brand || !price || !imageUrl || !description) {
        failureAlert.classList.remove("d-none");
        setTimeout(() => {
            failureAlert.classList.add("d-none");
        }, 4000);
        return; 
    }

    currentProduct.innerHTML = "";
    
    const product = {name, description, imageUrl, price, brand};

    fetch(productUrl + productId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA"
        },
        body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(updatedProduct => {
        
        successAlert.classList.remove("d-none");
        setTimeout(() => {
            successAlert.classList.add("d-none");
        }, 4000);
    
        renderCurrentProduct(updatedProduct);
    })
    .catch(err => console.error(err));
}



getCurrentProduct()

returnBtn.addEventListener("click", () => {
    window.location.href = `backoffice.html`
})