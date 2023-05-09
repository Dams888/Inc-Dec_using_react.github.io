import { useState } from "react";
import "./App.css";

function App() {

    const[count, setcount] = useState(0);

    function incHandler()
    {
      setcount(count+1);
    }

    function decHandler()
    {
      setcount(count-1);
    }

    function reserHandler()
    {
      setcount(0);
    }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center text-center flex-col justify-center bg-[#344151] gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement Bro</div>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>

        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>

        <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <button onClick={reserHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
        Reset
      </button>
    </div>
  );
}

export default App;
