
const ProdEnd = "https://striveschool-api.herokuapp.com/api/product/";

const query = window.location.search; 
const params = new URLSearchParams(query); 
const productId = params.get('q');


function getProduct() {
    fetch(ProdEnd + productId,{
        headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA"}
    })
    .then(res => res.json())
    .then(products => {
        console.log(products); 
        RenderProd(products); 
        return products; 
    }
    )
    .catch(err => console.log(err))
}

// Render current product

function RenderProd({name, description, imageUrl, price}) {
    const ProductBox = document.getElementById('ProductBox');

    const card = document.createElement("div")
    card.classList.add("card", "bg-transparent", "border-0", "m-5", "p-5")

    const cardImg = document.createElement("img")
    cardImg.classList.add("img-fluid","p-5", "m-0")
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
    cardPrice.innerText = "Prezzo" + price + "€"

    card.append(cardImg, cardBody, cardTitle, cardDescription, cardPrice); 
    ProductBox.appendChild(card); 

    return card
}

getProduct(); 






