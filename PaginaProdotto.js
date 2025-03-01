const ProductBox = document.getElementById('ProductBox');

const ProductEndpoint = "https://striveschool-api.herokuapp.com/api/product/";

const query = window.location.search; 
const params = new URLSearchParams(query); 
const productId = params.get('q');

function getProduct() {
fetch(`${ProductEndpoint}${productId}`)
.then(res => res.json())
.then(products => {
    console.log(products);
    const CardMiele = createProductTemplate(products);
    ProductBox.appendChild(CardMiele);
})
.catch((err) => console.log(err));
}

getProduct(); 

function createProductTemplate({name, description, brand, imageUrl, price}){
    const ProductCard = document.createElement("div")
    ProductCard.classList.add('text-light', 'p-3', 'text-center'); 

    const ProductImage = document.createElement("img")
    ProductImage.classList.add("card-img-top", "mt-3")
    CardImage.src = imageUrl;

    const CardName = document.createElement("h3")
    CardName.classList.add("card-title",)
    CardName.innerText = name; 

    const CardDescription = document.createElement("p")
    CardDescription.classList.add("card-text")
    CardDescription.innerText = description;  

    const CardBrand = document.createElement("h5")
    CardBrand.classList.add("card-text")
    CardBrand.innerText = brand;  

    const CardPrice = document.createElement("h5")
    CardPrice.classList.add("card-text", "mb-4")
    CardPrice.innerText = "€ " + price; 

    ProductCard.append(ProductImage, CardName, CardDescription, CardBrand, CardPrice); 

    return ProductCard; 
}

getProduct(); 









