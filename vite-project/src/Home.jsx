import { useState } from "react";

function Home() {

    function fetchApi(){
        fetch("http://localhost:3000/test")
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    // Déclare un état sous forme de tableau vide
    const [array, setArray] = useState([]);

    // Fonction pour initialiser le tableau avec [1, 2, 3]
    function handleClick() {
        setArray([1, 2, 3]);
    }

    // Fonction pour ajouter un élément au tableau existant
    function addMore() {
        setArray(prevArray => [...prevArray, prevArray.length + 1]);
    }

    return ( 
        <div>
            <h2>Bienvenue sur la page Home</h2>
            <button onClick={() => fetchApi()}> Clickez pour l'api</button>

            {/* Affiche le tableau sous forme de texte */}
            <p>{JSON.stringify(array)}</p>

            {/* Ajoute un tableau de base */}
            <button onClick={handleClick}>Add to array</button>

            {/* Ajoute un élément en plus dans le tableau */}
            <button onClick={addMore}>Add more</button>
        </div>
    );
}

export default Home;
