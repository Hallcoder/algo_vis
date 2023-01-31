function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const bubbleSort = async (arr, set, bars, currentBar,speed) => {
  let sorted;
  for (let i = 0; i < bars.length - 1; i++) {
    sorted = true;
    for (let j = 0; j < bars.length - 1; j++) {
      if (bars[j + 1].height < bars[j].height) {
        sorted = false;
        let temp = bars[j + 1];
        bars[j + 1] = bars[j];
        bars[j] = temp;
        await set(prev => bars);
        currentBar(bars[j + 1]);
        await sleep(speed);
      }
    }
    if (sorted) break;
  }
};

export const mergeSort = async (arr, l, r, set, bar,sBar,speed) => {
  if (l < r) {
    let middle = Math.floor((l + r) / 2);
   await  mergeSort(arr, l, middle, set, bar,sBar,speed);
  await mergeSort(arr, middle + 1, r, set, bar,sBar,speed);
    await merge(arr, l, middle, r, set, bar,sBar,speed);
    console.log("Merge sort 1:",arr)
    return;
  }
};
const merge = async (arr, l, m, r, set, bar,sBar,speed) => {
  console.log("low",l,"high",r,"middle",m);
  let left_length = m - l + 1;
  let right_length = r - m;
  let left_array = [],
    right_array = [];
  //first populate the arrays
  let i = 0,
    j = 0;
  while (i < left_length) {
    left_array[i] = arr[i + l];
    ++i;
  }
  while (j < right_length) {
    right_array[j] = arr[m + 1 + j];
    ++j;
  }
  console.log("left arr:", left_array);
  console.log("right arr:", right_array);

  //enter values in the respective arrays by comparing them;
  i = 0;
  j = 0;
  let k = l;
  while (i < left_length && j < right_length) {
    console.log("we can reach here");
    await bar(prev => arr[j]);
    await sBar(prev => arr[i]);
    if (left_array[i].height <= right_array[j].height) {
      arr[k] = left_array[i];
      i++;
    } else {
      arr[k] = right_array[j];
      j++;
    }
    k++;
    await sleep(10)
  }
  //TODO: Implement the speed feature.
  while (i < left_length) {
    arr[k] = left_array[i];
    await bar(prev => arr[i]);
    k++;
    i++;
  }
  while (j < right_length) {
    arr[k] = right_array[j];
    await bar(prev => arr[j]);
    k++;
    j++;
  }
  set(prev => arr)
  await sleep(speed - 10);
};
const partition = async (bars, l, r, current,set,speed) => {
  let pivot = bars[r];
  console.log("Pivot:", r);
  let i = l - 1,
    j = l;
  console.log("Partition bars:", bars);
  while (j < r) {
    await current(prev => bars[j]);
    if (bars[j].height >= pivot.height) {
      j++;
      continue;
    } else {
      i++;
      swap(bars, i, j);
      await set(bars);
      j++;
    }
  }
  swap(bars, i + 1, r);
  await set(bars);
  await sleep(speed)
  return i + 1;
};
export const quickSort = async(bars, l, r, set, current,speed) => {
  if (l < r) {
    let pivot = await partition(bars, l, r, current,set,speed);
    console.log("Pivot:",pivot)
    await quickSort(bars, l, pivot-1, set, current,speed);
    await quickSort(bars, pivot + 1, r, set, current,speed);
  }
};
const print = arr => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i], ",");
    i++;
  }
};
function swap(arr, i, j) {
  console.log("Before i=",arr[i]," j=",arr[j]);
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  console.log("after i=",arr[i]," j=",arr[j]);

}
