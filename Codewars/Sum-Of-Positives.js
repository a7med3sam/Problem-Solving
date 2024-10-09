// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


function SumOfPositive(arr) {
  
  return arr.filter((x) => x > 0).reduce((acc, current) => acc + current , 0)
  
  
  
    // let initial = 0;
    // for (let i=0; i < arr.length; i++){
    //     if(arr[i] > 0){
    //         initial += arr[i]
    //     }
    // }
    // return initial
}

console.log(SumOfPositive([1,-4,7,12]))