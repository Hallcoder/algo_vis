function BarDiv({ height, width , current}) {
  const style = { height: `${height}px`, width: `${width}px` };
  return <div style={style} className={`${current ? "bg-blue-600":"bg-[#368f6a]"} m-1 `}></div>;
}

export default BarDiv;
