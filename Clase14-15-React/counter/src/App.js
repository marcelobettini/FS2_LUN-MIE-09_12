// import { useState } from "react"
// import Counter from "./components/Counter";
import CounterB from "./components/CounterB";
import "./App.css"
function App() {
  // const [number, setNumber] = useState(100)

  // const handleNumber = (e) => {
  //   if (e.target.dataset.id === '-') {
  //     setNumber(number - 1)
  //   } else {
  //     setNumber(number + 1)
  //   }
  // }
  return (
    <CounterB />
    // <Counter number={number} handleNumber={handleNumber} />
  );
}
export default App;
