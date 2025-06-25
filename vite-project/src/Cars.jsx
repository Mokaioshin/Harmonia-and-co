//Je veux 4 input de type texte
//Un pour le brevet
//Un pour le modele de la voiture
// Unn pour la la couleur

//En dessous de ces inputs un bouton de validation?
//Une fois cliqué on affichera dans un phrase en dessous
//ce que le user aura écrit dans les champs

//"Je conduis la Renault Twingon de couleur jaune"

import Input from "./Input";
import { useState } from "react";

export default function Car() {
  const [brevet, setBrevet] = useState("");
  const [modele, setModele] = useState("");
  const [couleur, setCouleur] = useState("");
  const [result, setResult] = useState("");

  let array = [
    { name: "brevet", placeholder: "Votre brevet...", state: brevet, fn: setBrevet },
    { name: "modele", placeholder: "Votre modèle...", state: modele, fn: setModele },
    { name: "couleur", placeholder: "Votre couleur...", state: couleur, fn: setCouleur },
  ];

  const handleSubmit = () => {
    setResult(`Je conduis la ${modele} de couleur ${couleur}`);
  };

  return (
    <>
      {array.map((elem, index) => (
        <Input
          key={index} 
          name={elem.name}
          placeholder={elem.placeholder} 
          value={elem.state}
          stateFn={elem.fn}
        />
      ))}

      <button onClick={handleSubmit}>Valider</button>

      {result && <p>{result}</p>} {/* Affichage du résultat */}
    </>
  );
}
