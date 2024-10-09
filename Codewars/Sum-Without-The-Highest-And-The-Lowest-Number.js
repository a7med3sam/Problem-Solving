// Sum without highest and lowest number

function sumWithoutHighestAndLowestNumber(arr){
    if (arr == null) return 0;
    let maxValue = Math.max(...arr)
    let minValue = Math.min(...arr) 
    let filterdArray = arr.filter((x) => x!== maxValue && x !== minValue) ;
    console.log(filterdArray) ;
}
console.log(sumWithoutHighestAndLowestNumber(1,2,3,4,5,6,7,8,9))