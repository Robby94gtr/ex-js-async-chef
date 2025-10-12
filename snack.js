
async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
}

const getChefBirthday = async (id) => {
    try{const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);

    if (!recipe || ! recipe.userId) {
        throw new Error("Ricetta non trovata o senza userId");
    }

    const userId = recipe.userId;
    
    const user = await fetchJson(`https://dummyjson.com/users/${userId}`);
    
    if(!user || !user.birthDate) {
        throw new Error("utente non trovato o senza userId");
    }
    
    const birthDate = user.birthDate
    return  birthDate
} catch (error) {
     throw new Error(`Impossibile ottenere la data di nascita: ${error.message}`);
    }
}

getChefBirthday(1)
  .then(birthDate => console.log("Data di nascita dello chef:", birthDate))
  .catch(error => console.error("Errore:", error.message));