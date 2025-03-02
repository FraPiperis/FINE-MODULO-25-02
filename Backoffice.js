const linkAPI = 'https://striveschool-api.herokuapp.com/api/product/'

const tbody = document.getElementById("tbody")
const inputName = document.getElementById("post-name")
const inputBrand = document.getElementById("post-brand")
const inputPrice = document.getElementById("post-price")
const inputImage = document.getElementById("post-image")
const inputDesc = document.getElementById("post-description")
const failureAlert = document.getElementById("failure")
const successAlert = document.getElementById("success")

Totale = []; 

async function tab() {
    try {
        const response = await fetch(linkAPI, {
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA" }
        }); 
        const Prendi = await response.json(); 
        renderUsers(Prendi); 
        Totale = Prendi; 
        console.log(Prendi); 
      }
      catch (err) {console.log(err)}; 
  }
  tab(); 

  function renderUsers(Prendi) {
    let Risultato = document.getElementById("riga"); 
    Risultato.innerHTML=""; 

    const tabella = Prendi.map((user)=> NuovaRiga(user)); 

    Risultato.append(...tabella); 
}

function NuovaRiga({name, description, brand, price, _id}){
    const RigaUtente = document.createElement("tr", "table-dark")

     const NameUs = document.createElement("td","table-dark")
     NameUs.innerText= name;
     RigaUtente.appendChild(NameUs); 

     const descriptionUs = document.createElement("td", "table-dark")
     descriptionUs.innerText= description;
     RigaUtente.appendChild(descriptionUs); 

     const brandUs = document.createElement("td", "table-dark")
     brandUs.innerText= brand; 
     RigaUtente.appendChild(brandUs); 

     const priceUs = document.createElement("td", "table-dark")
     priceUs.innerText= price; 
     RigaUtente.appendChild(priceUs); 

     const cellActions = document.createElement('td');

     const editbutton = document.createElement("button")
     editbutton.classList.add("btn", "btn-warning", "mx-2") 
     editbutton.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
     editbutton.addEventListener("click", () => {
         window.location.href = `edit.html?id=${_id}`
     })

    const removebutton = document.createElement("button")
    removebutton.classList.add("btn", "btn-danger", "m-2")
    removebutton.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    removebutton.addEventListener("click", () => {
        if (confirm("Sei sicuro di voler eliminare questo prodotto?")){
          deleteProduct(_id)
        }; 
        })

    cellActions.append(editbutton, removebutton)
    RigaUtente.append(NameUs, descriptionUs,brandUs, priceUs, cellActions)
    
     return RigaUtente;
}; 

//DELETE
async function deleteProduct(id) {
  try {
      const res = await fetch(linkAPI + id, {
          method: "DELETE",
          headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA"
          }
      })
      tab(); 
  }
  catch(err) {console.log(err)}; 
};

//CREARE NUOVO PRODOTTO NELLA TABELLA 
async function createProduct() {
    if (inputName.value && inputBrand.value && inputPrice.value && inputImage.value && inputDesc.value) {
        
        try {
            const newProduct = {
                imageUrl: inputImage.value,
                name: inputName.value,
                description: inputDesc.value,
                brand: inputBrand.value,
                price: inputPrice.value,
            }

            const res = await fetch (linkAPI, {
                method: "POST",
                body: JSON.stringify(newProduct),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA"
                }
            })
            successAlert.classList.remove("d-none")
            setTimeout(() => {
                successAlert.classList.add("d-none")
            }, 4000)

            await tab(); 
        }
        catch(err) {
            console.log(err)
        }
    } else {
        failureAlert.classList.remove("d-none")
        setTimeout(() => {
            failureAlert.classList.add("d-none")
        }, 4000)
    }
};

tab(); 
 

