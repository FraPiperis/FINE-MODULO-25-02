const linkAPI = 'https://striveschool-api.herokuapp.com/api/product/'

const tab = async() => {
    try {
        const response = await fetch(linkAPI, {
            headers: { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JlMGUxNDFlMTQwNjAwMTUzMTRkNjkiLCJpYXQiOjE3NDA1MDg2OTIsImV4cCI6MTc0MTcxODI5Mn0.DpwITaKCU7rZ2Fv20-5UysSwfeXKtUy3JTj_pXqAMyA" }
        }); 
        const Prendi = await response.json(); 
        renderUsers(Prendi); 
        Totale = Prendi; 
        console.log(Prendi); 
      }
      catch (err) {
        console.log(err)
    }; 
  }
  tab(); 

  function renderUsers(Prendi) {
    let Risultato = document.getElementById("riga"); 
    Risultato.innerHTML=""; 

    const tabella = Prendi.map((user)=> NuovaRiga(user)); 

    Risultato.append(...tabella); 
}

function NuovaRiga({name, description, brand, price}){
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

     const deleteButton = document.createElement("btn")
     deleteButton.classList.add("btn", "btn-warning", "m-3"); 
     deleteButton.innerText = "Cancella prodotto"; 
     RigaUtente.appendChild(deleteButton); 

     const EditButton = document.createElement("btn")
     EditButton.classList.add("btn", "btn-warning"); 
     EditButton.innerText = "Modifica prodotto"; 
     RigaUtente.appendChild(EditButton); 


     return RigaUtente;
}

tab(); 






