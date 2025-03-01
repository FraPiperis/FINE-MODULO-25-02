//RIVEDERE BENE CREATE - MOD - POST 
const linkAPI = 'https://striveschool-api.herokuapp.com/api/product/'

const postName = document.getElementById("post-name");
const postDesc = document.getElementById("post-description");
const postPrice = document.getElementById("post-price");
const postBrand = document.getElementById("post-brand");
const alertMessage = document.getElementById('alertMessage');

async function createPost() {

    // Controlliamo che tutti i campi siano stati compilati
    if (postName.value && postDesc.value && postPrice.value && postBrand.value) {
        try {
            
            const newPost = {
                name: postName.value,
                description: postDesc.value,
                price: postPrice.value,
                brand: postBrand.value, 
            }
    
    
            const response = await fetch(linkAPI, {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA"
                }
            });

            tab ();

        } catch (error) {
            console.log(error);
        }
    } else {
        alertMessage.classList.remove('d-none');

        setTimeout(() => {
            alertMessage.classList.add('d-none');
        }, 5000);

        console.log("Devi inserire tutti e 3 i campi obbligatori!");
    }
}