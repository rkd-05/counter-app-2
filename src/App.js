import { useState } from "react";
import "./App.css";
// importing Item component from Item.js to App.js
import Item from './Components/Item';
function App() {
  // To reflect decreased value of count on UI ,  we have to use States
  const [count, setCount] = useState(0);
  
  // function to decease the value of counter by 1 on clicking on - button
  function decreaseHandler() {
    setCount(count - 1);
  }
  // function to increase the value of counter by 1 on click on + button
  function increaseHandler() {
    setCount(count + 1);
  }
  // function to reset value of counter to 0 on clicking on "reset button" so do "setCount as 0"
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#344151]">
      <div className="text-[#0398d4] font-medium text-2xl ">Increment and Decerement</div>
      <div className="bg-white flex justify-center items-center gap-12 rounded-sm text-[25px] text-[#344151] ">
        {/* - button decerease the value in the counter so apply "Onclick" on it  */}
        {/* And decreaseHandler is the function that gets called when when we click on - button */}
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 text-5xl border-[#bfbfbf] text-5xl">
          -
        </button>

        <div className="font-bold gap-12 text-4xl">
          {/* to show value of count on UI , we do {count} */}
          {count}
        </div>

        <button onClick={increaseHandler} className="border-r-2 text-center w-20 text-5xl border-[#bfbfbf]">
          +
        </button>
      </div>
      <button onClick={resetHandler} className="text-white px-5 py-2 rounded-sm text-lg bg-[#0398d4]">
        reset
      </button>
      
    </div>
    
  );
}

export default App;
