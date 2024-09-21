import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  // orfun in onClick ex: onClick={() => setSelectedId(q.id !== selectedId ? q.id : null);
  // The id is assigned to selectedId when you click on a flashcard. Initially, selectedId is null. Once you click a card, setSelectedId(q.id) updates selectedId with the ID of the clicked card. If the same card is clicked again, it sets the state back to null.
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          className={q.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(q.id)}
        >
          <p>{q.id === selectedId ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
