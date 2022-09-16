import { useState } from "react"
import './app.css';

function App() {

  const [counter , setCounter] = useState(0)

  function increase() {
    setCounter(counter + 1)
  }

  function decrease() {
    if(counter === 0) {
      
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="container">
      <button onClick={decrease}>-</button>
      <h2>{counter}</h2>
      <button onClick={increase}>+</button>   
    </div>
  );
}

export default App;
