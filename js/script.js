// Descrizione
// Attraverso l’apposita API di Boolean
//  https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// seleziono elemento output
const emailList = document.getElementById('output');

// inserisco l'endpoint in una variabile
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

// creo un array
const arrayEmail = [];

// creo variabile risultato lista
let emailResult ="";

// faccio chiamata verso l'API con un ciclo per ricevere le email
for (let i = 0; i < 10; i++) {
    axios.get(endpoint)

        .then(response => {
            const result = response.data;
            let email = result.response;

            // aggiungo l'email all'array
            arrayEmail.push(email);

        

            emailResult += `
            <li id="output">${email}</li>
            
            `



            // input risultato
            emailList.innerHTML = emailResult
            
            

       

        })

        .catch(error => {
            console.error(error);

        });
}
    
    
