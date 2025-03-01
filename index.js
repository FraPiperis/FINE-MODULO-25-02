
const linkAPI = 'https://striveschool-api.herokuapp.com/api/product/'

let Complex = []; 

    async function prodotti() {
        try {
            const res = await fetch(linkAPI, {
                headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA" }
            })
            const products = await res.json();
            Complex = products; 
            RenderProducts(products); 
            console.log(products);
        } catch (err) {
            console.log(err)
        }
    }

function RenderProducts(products) {
    let risultato = document.getElementById("contenitore")
    risultato.classList.add("row", "gap-2", "justify-content-center")
    risultato.innerHTML=""

    const Cards = products.map((products) => creacard(products))
    risultato.append(...Cards); 
}

function creacard({name, description, brand, imageUrl, price, _id}) {
    const Card = document.createElement("div")
    Card.classList.add("card", "col-6", "col-md-4", "col-lg-3", "mb-3", "text-bg-dark", "mt-5"); 

    const CardImage = document.createElement("img")
    CardImage.classList.add("card-img-top", "mt-3")
    CardImage.src = imageUrl; 
    Card.appendChild(CardImage); 

    const CardBody = document.createElement("div")
    CardBody.classList.add("card-body")
    Card.appendChild(CardBody); 

    const CardName = document.createElement("h3")
    CardName.classList.add("card-title",)
    CardName.innerText = name; 
    CardBody.appendChild(CardName); 

    const CardDescription = document.createElement("p")
    CardDescription.classList.add("card-text")
    CardDescription.innerText = description; 
    Card.appendChild(CardDescription); 

    const CardBrand = document.createElement("h5")
    CardBrand.classList.add("card-text")
    CardBrand.innerText = brand; 
    Card.appendChild(CardBrand); 

    const CardPrice = document.createElement("h5")
    CardPrice.classList.add("card-text", "mb-4")
    CardPrice.innerText = "€ " + price; 
    Card.appendChild(CardPrice); 

    const PaginaProdotto = document.createElement("a")
    PaginaProdotto.classList.add("btn", "btn-outline-warning", "mb-4")
    PaginaProdotto.innerText = "Dettaglio prodotto"
    PaginaProdotto.setAttribute('href', `PaginaProdotto.html?q=${_id}`)
    Card.appendChild(PaginaProdotto); 

    //GUARDARE LEZIONE SPOTIFY 

    Card.style.border = "border-warning"

    //card text-bg-dark mb-3

    return Card; 
}

prodotti(); 
