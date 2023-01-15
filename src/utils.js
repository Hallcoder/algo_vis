export const  bubbleSort = async (arr, set, bars,currentBar) => {
  console.log("Original:", arr);
  let sorted;
  for (let i = 0; i < bars.length; i++) {
    sorted = true;
    console.log("iteration", i);
    for (let j = 0; j < bars.length - 1; j++) {
      if (bars[j + 1].height < bars[j].height) {
        currentBar(bars[j])
        sorted = false;
        let temp = bars[j + 1];
        bars[j + 1] = bars[j];
        bars[j] = temp;
        currentBar(bars[j + 1])
        await set(bars);
        await set(prev => [...prev, bars]);
      }
    }
    if (sorted) break;
  }
};
const print = arr => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i], ",");
    i++;
  }
};
