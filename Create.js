const NostroLink = 'https://striveschool-api.herokuapp.com/api/product/'

const postName = document.getElementById("post-name");
const postDesc = document.getElementById("post-description");
const postBrand = document.getElementById("post-brand");
const postPrice = document.getElementById("post-price");
const alertMsg = document.getElementById('alertMsg');


async function createPost() {

    // Controlliamo che tutti i campi siano stati compilati
    if (postName.value && postDesc.value && postBrand.value && postPrice.value) {
        try {
            const newPost = {
                name: postName.value,
                description: postDesc.value,
                brand: postBrand.value, 
                price: postPrice.value,
            }

            const res = await fetch(NostroLink, {
                method: 'POST',
                body: JSON.stringify(newPost),
                headers: {
                    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA', 
                    "Content-Type": 'application/json'
                }
            });

            tab();
        } catch (error) {
            console.log(error);
        }
    }
}

