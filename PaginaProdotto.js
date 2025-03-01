const ProductBox = document.getElementById('ProductBox');

const ProdEnd = "https://striveschool-api.herokuapp.com/api/product/";

const query = window.location.search; 
const params = new URLSearchParams(query); 
const productId = params.get('q');


function getProduct() {
    fetch(ProdEnd + productId, {
        headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA"}
    })
    .then(res => res.json())
    .then(products => {
        console.log(products)
        RenderProd(products)
        return products
    }
    )
    .catch(err => console.log(err))
}

// Render current product

function RenderProd({name, description, imageUrl, price}) {
    const card = document.createElement("div")
    card.classList.add("card", "bg-transparent", "border-0")

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
        failureAlert.style.display = "block";
        setTimeout(() => {
            failureAlert.style.display = "none";
        }, 4000);
    } else {
        successAlert.style.display = "block";
        setTimeout(() => {
            successAlert.style.display = "none";
        }, 4000);
    }
    
    const product = { name, description, imageUrl, price };
    renderCurrentProduct(product);
}


getProduct()






