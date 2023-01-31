import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Navbar";
import BarDiv from "./Bar";
import { bubbleSort, mergeSort, quickSort } from "./utils";
import { SpeedDialAction } from "@mui/material";
function App() {
  const [bars, setBars] = useState([]);
  const [sort, setSort] = useState("");
  const [speed,setSpeed] = useState(300);
  const [currentBar, setCurrentBar] = useState({});
  const [secondCurrentBar, setSecondCurrentBar] = useState({});
  const currentBarClass = "";
  class Bar {
    height;
    width;
    id;
    constructor(height, width) {
      this.height = height;
      this.width = width;
      this.id = new Date().getMilliseconds() + Math.random();
    }
  }
  useEffect(() => {
    generateArray();
  }, []);
  const generateArray = () => {
    console.log("Generating array...");
    let newBars = [];
    let newBar;
    for (let i = 0; i < 20; i++) {
      newBar = new Bar(
        Math.floor(Math.random() * 450) + 20,
        Math.ceil(Math.random() * 215) + 20
      );
      newBars.push(newBar);
    }
    setBars(newBars);
  };
  const sortStyle = type => {
    console.log(type);
    setSort(type);
  };
  const visualiseSort = () => {
    let arr = bars.map(b => b.height);
    switch (sort) {
      case "merge":
        console.log("merge");
        mergeSort(bars, 0, bars.length-1, setBars, setCurrentBar,setSecondCurrentBar,speed);
        break;
      case "quick":
        console.log("quick");
        quickSort(bars, 0, bars.length-1, setBars, setCurrentBar,speed);
        break;
      case "bubble":
        console.log("Bubble");
        bubbleSort(arr, setBars, bars, setCurrentBar,speed);
        break;
      case "insertion":
        insertionSort(arr, setBars);
        break;
    }
  };
  return (
    <div className="flex flex-col">
      <Navbar sort={sortStyle} type={sort} speed={setSpeed}/>
      <div className="flex flex-row w-9/12 justify-around m-auto">
        {bars.map(b => {
          return (
            <BarDiv
              height={b.height}
              width={b.width}
              key={new Date().getMilliseconds() + Math.random()}
              id={b.id}
              current={b.id == currentBar.id}
              second = {b.id == secondCurrentBar.id}
            />
          );
        })}
      </div>
      <button
        className="m-auto mt-20 rounded-md bg-[#368f6a] text-white font-bold p-2"
        onClick={visualiseSort}
      >
        Visualise Sort
      </button>
      <button
        className="m-auto mt-10 rounded-md bg-[#368f6a] text-white font-bold p-2"
        onClick={generateArray}
      >
        Generate Array
      </button>
    </div>
  );
}

export default App;
