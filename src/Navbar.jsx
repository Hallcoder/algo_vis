import { Slider } from "@mui/material";
import "./navbar.css";
import { useState } from 'react';
function Navbar({ sort,type ,speed}) {
  const [sliderValue,setSliderValue] = useState(290);
  const handleSliderChange= (e) => {
    console.log("Slider changing..");
    setSliderValue(e.target.value);
    speed(sliderValue*10);
  }
  const spanClass =
  "text-[#368f6a] bg-white  p-2 border rounded-md font-bold text-white cursor-pointer";
  const active = 
  "bg-[#368f6a]  text-white  p-2 border rounded-md font-bold text-white cursor-pointer"
  return (
    <div className="flex flex-row w-full justify-between p-2 border items-center">
      <h1 className="font-bold text-4xl text-[#368f6a]">AlgoVIS</h1>
      <div className="flex flex-row w-7/12 justify-around items-center">
        <span
          className={type == "merge" ? active : spanClass}
          onClick={() => sort("merge")}
        >
          Merge Sort
        </span>
        <span
          className={type == "bubble" ? active : spanClass}
          onClick={() => sort("bubble")}
        >
          Bubble Sort
        </span>
        <span
          className={type == "quick" ? active : spanClass}
          onClick={() => sort("quick")}
        >
          Quick Sort
        </span>
        <span
          className={type == "insertion" ? active : spanClass}
          onClick={() => sort("insertion")}
        >
          Insertion Sort
        </span>
        <span className="w-3/12">
        <Slider step={20} value={sliderValue} className='w-5/12' onChange={(e) => handleSliderChange(e)}/>  
        </span>
      </div>
    </div>
  );
}

export default Navbar;
