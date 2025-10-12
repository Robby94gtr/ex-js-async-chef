
/* async function fetchJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Errore HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
}

const getChefBirthday = async (id) => {
    try {
        const recipe = await fetchJson(`https://dummyjson.com/recipes/${id}`);

        if (!recipe || !recipe.userId) {
            throw new Error("Ricetta non trovata o senza userId");
        }

        const userId = recipe.userId;

        const user = await fetchJson(`https://dummyjson.com/users/${userId}`);

        if (!user || !user.birthDate) {
            throw new Error("utente non trovato o senza userId");
        }

        const birthDate = user.birthDate
        return birthDate
    } catch (error) {
        throw new Error(`Impossibile ottenere la data di nascita: ${error.message}`);
    }
}

getChefBirthday(1)
    .then(birthDate => console.log("Data di nascita dello chef:", birthDate))
    .catch(error => console.error("Errore:", error.message));
 */



/* CORREZIONE */
async function getChefBirthday(id) {
    const recipeResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const recipe = await recipeResponse.json();
    const chefResponse = await fetch(`https://dummyjson.asdascom/users/${recipe.userId}`);
    const chef = await chefResponse.json();
    return chef.birthDate;
}

(async () => {
    try {
        const birthday = await getChefBirthday(1);
        console.log("Data di nascita dello chef", birthday);
    } catch (error) {
        console.error("Errore:", error.message)
    }
    console.log('Fine codice!');
})();


// getChefBirthday(1)
//     .then(birthDate => console.log("Data di nascita dello chef:", birthDate))
//     .catch(error => console.error("Errore:", error.message));