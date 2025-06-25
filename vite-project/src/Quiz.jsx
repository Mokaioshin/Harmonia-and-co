// useState (le numéro de la question, le score ...)
// Le rendu conditionnel (if .. else => ? :)
// Ecouteur d'événement avec onClick

// Indices : 
// Un state pourra s'occuper de l'index de la question (index à 1 au départ pour la première question 
// puis lorsque l'on répond on incrémente celui-ci)
// Un state sera aussi très utile pour le score (à chaque bonne réponse on incrémente ce state de 1)
// If ... else à utiliser aussi dans le JSX (ex: si le state de l'index arrive à la fin on affiche 
// un bouton recommencer et le score sinon on affiche les questions)

// Comment utiliser l'index:
// Pour récupérer une question avec un certain index : quiz[index].question
// Pareil pour les choix : quiz[index].choices

import { useState } from "react";

    //Question posé
const quiz = [
  {
    question: "Quel est la capitale de la France ?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Combien font 2 + 2 ?",
    choices: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "Comment s'appelle le coréen le plus connu sur League of Legend ?",
    choices: ["Faker", "Jinx", "David luiz", "Leon kennedy"],
    answer: "Faker",
  },
  {
    question: " Où se trouve l'Algérie ?",
    choices: ["Europe", "Asie", "Amérique", "Afrique"],
    answer: "Afrique",
  },
  {
    question: "Qu'est-ce que le 'moka' ?",
    choices: [" Un oiseau", "Un café", "Une marque de clavier", "un vaccin"],
    answer: "Un café",
  },
  {
    question: "Qu'est-ce que la Gynéphobie ?",
    choices: [" La peur des Gynécologue", "La peur des femmes", "La peur des dinosaures", "La peur des piqures"],
    answer: "La peur des femmes",
  },
  {
    question: " Que veut dire SLM ?",
    choices: [" Salut les musulmans", " Le cérano est salé johann", "Small Languages Models", "Serpent lunaire martien"],
    answer: "Small Languages Models",
  },
  {
    question: "Lequel n'est pas un Singe",
    choices: [" Capucin", "Ouistiti", "Gorille", "Lémurien"],
    answer: "Lémurien",
  },
  {
    question: "Pourquoi certains poisons semblent stimuler une partie du métabolisme cellulaire tout en étant mortels ?",
    choices: ["  Ils remplacent l’oxygène", "Ils bloquent l’ATP synthase", " Ils désactivent l’ADN polymérase", " Ils inhibent la division cellulaire"],
    answer: "Ils bloquent l’ATP synthase",
  },
  
];

    //Affichage du score hihi
export default function QuizApp() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (choice) => {
    //ajout de +1 point lors d'une bonne réponse
    if (choice === quiz[index].answer) {
      setScore(score + 1);
    }
    if (index + 1 < quiz.length) {
      setIndex(index + 1);
    } else {
      setFinished(true);
    }
  };
//Redemarage du Quizz
  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      {finished ? (
        <div>
          <h2 className="text-xl font-bold">Quiz terminé !</h2>
          <p>Votre score : {score} / {quiz.length}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={restartQuiz}
          >
            Recommencer
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold">{quiz[index].question}</h2>
          <div className="space-y-2">
            {quiz[index].choices.map((choice, i) => (
              <button
                key={i}
                className="block w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
                onClick={() => handleAnswer(choice)}
              >
                {choice}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
