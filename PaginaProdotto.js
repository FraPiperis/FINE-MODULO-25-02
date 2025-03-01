const ProductBox = document.getElementById('ProductBox');

const ProductEndpoint = "https://striveschool-api.herokuapp.com/api/product/";

function getProduct() {
    const query = window.location.search; 
    const params = new URLSearchParams(query); 
    const productId = params.get('q');

fetch(`${ProductEndpoint}${productId}`, { 
    headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA" }})
    .then(res => res.json())
    .then(products => {
    const CardMiele = createProductTemplate(products);
    ProductBox.appendChild(CardMiele);
    CardMiele.render(Products); 
})
.catch((err) => console.log(err));
}

getProduct(); 

function createProductTemplate({name, description, brand, imageUrl, price}){

    const productCard = document.createElement('div');
    productCard.classList.add('text-light', 'p-3', 'text-center');

    const productImg = document.createElement('img');
    productImg.src = imageUrl;

    const productName = createMyH6(name);

    const productDescription = createMyH6(description); 

    const productBrand = createMyH6(`brand: ${brand}`);

    const productPrice = createMyH6(`Prezzo: ${price}`);

   
    productCard.append,(productImg, productName,productDescription, productBrand, productPrice)

    return productCard;
}

function createMyH6(text) {
    const myH6 = document.createElement('h6');
    myH6.classList.add('mt-2', 'mb-0');
    myH6.innerText = text;

    return myH6;
}
 









