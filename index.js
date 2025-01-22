async function afficher() {
    try {
        // Récupérer les données depuis l'API
        const reponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const donnees = await reponse.json();
        console.log(donnees);

        // Récupérer la référence au tableau dans le DOM
        const table = document.querySelector("#tableau");

        // Boucle pour afficher les données dans des lignes du tableau
        donnees.forEach(element => {
            let tr = document.createElement("tr");

            // Créer des cellules pour chaque donnée (id, titre, et contenu du post)
            

            let tdTitre = document.createElement("td");
            tdTitre.textContent = element.title;
            tr.appendChild(tdTitre);

            let tdContenu = document.createElement("td");
            tdContenu.textContent = element.body;
            tr.appendChild(tdContenu);

            // Ajouter la ligne au tableau
            table.appendChild(tr);
        });
    } catch (error) {
        console.error(error);
    }
}

// Appeler la fonction pour afficher les données
afficher();
