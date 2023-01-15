import './navbar.css'
function Navbar({sort}) {
    const spanClass = 'bg-[#368f6a] p-2 border rounded-md font-bold text-white cursor-pointer';
  return (
    <div className="flex flex-row w-full justify-between p-2 border items-center">
      <h1 className='font-bold text-4xl text-[#368f6a]'>AlgoVIS</h1>
      <div className="flex flex-row w-7/12 justify-around items-center">
        <span className={spanClass} onClick={()=> sort("merge")}>Merge Sort</span>
        <span className={spanClass} onClick={()=> sort("bubble")}>Bubble Sort</span>
        <span className={spanClass} onClick={()=> sort("quick")}>Quick Sort</span>
        <span className={spanClass} onClick={()=> sort("insertion")}>Insertion Sort</span>
      </div>
    </div>
  );
}

export default Navbar;
