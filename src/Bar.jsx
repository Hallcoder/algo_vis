function BarDiv({ height, width , current, second}) {
  const style = { height: `${height}px`, width: `${width}px` };
  return <div style={style} className={`${current ? "bg-blue-600": second ? "bg-[#f21a12]": "bg-[#368f6a]"} m-1 `}></div>;
}

export default BarDiv;
