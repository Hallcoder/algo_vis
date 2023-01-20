function sleep(ms){
return new Promise(resolve => setTimeout(resolve,ms))
}
export const  bubbleSort = async (arr, set, bars,currentBar) => {
  let sorted;
  for (let i = 0; i < bars.length -1 ; i++) {
    sorted = true;
    for(let j = 0;j < bars.length-1;j++){
      if (bars[j + 1].height < bars[j].height) {
        sorted = false;
        let temp = bars[j + 1];
        bars[j + 1] = bars[j];
        bars[j] = temp;
        await set(bars);
        currentBar(bars[j+1]);
        await sleep(10);
      }
    }
    if (sorted) break;
  }
};

 export const mergeSort = async (arr,l,r,set,bar) => {
  if(l < r){
    console.log("Less than");
    let middle = (l+r)/2;
    mergeSort(arr,l,middle,set,bar);
    // set(prev=> arr);
    // await sleep(20);
    mergeSort(arr,middle+1,r,set,bar);
    // set(prev => arr);
    // await sleep(20);
    merge(arr,l,middle,r,set,bar);
    // set(prev => arr);
    // await sleep(20);  
  }
}
const merge = async (arr,l,m,r,set,bar)=>{
console.log("merging...");
let left_length = m-l+1;
let right_length = (r-m);
let left_array = [],right_array  = [];
//first populate the arrays
let i = 0,j = 0;
while(i < left_length){
  left_array[i] = arr[i+l];
  ++i;
}
while(j < right_length){
  right_array[j] = arr[m+1+j];
  ++j;
}
// if(left_array[0] == undefined) return;
console.log("left arr:",left_array);
console.log("right arr:",right_array);

//enter values in the respective arrays by comparing them;
i=0;
j=0;
let k = l;
while(i< left_length && j < right_length){
  console.log("we can reach here");
  if(left_array[i].height <= right_array[j].height){
    arr[k] = left_array[i];
    // await bar(arr[i]);
    // await sleep(50);
    i++;
  }else{
    arr[k] = right_array[j];
    // await bar(arr[j]);
    // await sleep(50);
    j++;
  }
  k++;
}
while(i < left_length){
  arr[k] = left_array[i];
  // await bar(arr[i]);
  // await sleep(50);
  k++;
  i++;
}
while(j < right_length){
  arr[k] = right_array[j];
  // await bar(arr[j]);
  // await sleep(50);
  k++;
  j++;
}
}
const partition = (bars,l,r)  => {
  let pivot = r;
  let i = l,j
}
export const quickSort = (bars,l,r) => {
if(l<r){
  let pivot = partition(bars,l, r);
  quickSort(bars,l,pivot);
  quickSort(bars,pivot+1,r);
}
}
const print = arr => {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i], ",");
    i++;
  }
};
