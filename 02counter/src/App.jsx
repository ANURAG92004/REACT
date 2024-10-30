import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);

  let addvalue = () => {
    if (counter < 20) setcounter(counter + 1);
    console.log(counter);
  };
  let removevalue = () => {
    if (counter > 0) setcounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>counter value :{counter} </h2>

      <button onClick={addvalue}>ADD VALUE :{counter}</button>
      <br />
      <br />
      <button onClick={removevalue}>REMOVE VALUE :{counter}</button>
      <br />
      <br />
      <footer> footer:{counter}</footer>
    </>
  );
}

export default App;
