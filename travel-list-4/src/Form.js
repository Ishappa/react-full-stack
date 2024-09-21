import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescripton] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItems(newItem);
    // initialItems.push(newItem);
    console.log(newItem);
    //setting up intial state after clicked add button input and select field will got to initial state
    setDescripton("");
    setQuantity(1);
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescripton(e.target.value)}
        />
        <button>Add</button>
      </form>
      {/* <PackingList /> */}
    </>
  );
}
