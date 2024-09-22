import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. Creative dishes to choose from. All from
            our store oven, all organic and all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are still working on menu. please come back later.. </p>
      )}

      {/* <Pizza
        name="Pizza more cheese"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        price={10}
        photoName="pizzas/spinaci.jpg"
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, mozarella"
        price={13}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzObj }) {
  //   if (pizzObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzObj.photoName} alt={pizzObj.name} />
      <div>
        <h3>{pizzObj.name}</h3>
        <p>{pizzObj.ingredients}</p>
        <span>{pizzObj.soldOut ? "SOLD OUT" : pizzObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("we are currently open..!");
  //   else alert("Sorry we are  closed..!");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHour} closeHours={closeHour} />
      ) : (
        <p>
          Closed..! we are happy to welcome you between {openHour}:00 and{" "}
          {closeHour}:00
        </p>
      )}
    </footer>

    //   return React.createElement("footer", null, "we are currently open");
  );
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        we are open from {openHours}:00 to {closeHours}:00. come visit us or
        order online..
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
