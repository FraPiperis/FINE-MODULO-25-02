
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
    const RigaUtente = document.createElement("tr", "table-light")

     const NameUs = document.createElement("td","table-light")
     NameUs.innerText= name;
     RigaUtente.appendChild(NameUs); 

     const descriptionUs = document.createElement("td", "table-light")
     descriptionUs.innerText= description;
     RigaUtente.appendChild(descriptionUs); 

     const brandUs = document.createElement("td", "table-light")
     brandUs.innerText= brand; 
     RigaUtente.appendChild(brandUs); 

     const priceUs = document.createElement("td", "table-light")
     priceUs.innerText= price; 
     RigaUtente.appendChild(priceUs); 

     return RigaUtente;
}

tab(); 

//function cerca() {
  //const select = document.getElementById("select")
  //const input = document.getElementById("input")

 // const selectValue = select.value
 // const inputValue = input.value.toLowerCase()

  //const userFilter = Totale.filter( user => {
   //  return user[selectValue].toLowerCase().includes(inputValue)

  //})
  //renderUsers(userFilter)
//}

//user.name oppure user["name"] > primo caso non è dinamico, secondo caso dinamico


