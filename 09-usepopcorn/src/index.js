import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StartRating from "./StarRating";

//externally can use rating component by using onSetRating prop by controlling states
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StartRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p
        style={{
          fontFamily: "monospace",
          color: "green",
          fontWeight: "bolder",
        }}
      >
        The Movie Rated was <span style={{ color: "red" }}>{movieRating}</span>{" "}
        Star
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StartRating maxRating={5} />

    <StartRating
      maxRating={6}
      size={30}
      color="red"
      className="test"
      defaultRating={2}
    />

    <Test />

    {/* <App /> */}
  </React.StrictMode>
);
