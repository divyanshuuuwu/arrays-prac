// sum of array

// let arr = [20 , 50, 40];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)

// finding the max or greatest element in our array


let arr = [20, 40, 80, 5, 8,];
let max = arr[0];
for(let i = 1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max)
