// sum of array

// let arr = [20 , 50, 40];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)




// finding the max or greatest element in our array

// let arr = [20, 40, 80, 5, 8,];
// let max = arr[0];
// for(let i = 1; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max)


// find the smallest number in an array

// let arr = [60, 50, 100, 20, 80];
// let min = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(min > arr[i])
//         min = arr[i]
// }
// console.log(min)


//find the second max

// let arr = [10, 30, 56, 43, 29, 64, 49, 60, 64];
// let max = Math.max(arr[0], arr[1]);
// let Smax = Math.min(arr[0], arr[1]);

// for(let i=2; i<arr.length; i++){
//     if(arr[i] > max){
//         Smax = max
//         max = arr[i]
//     }
//     else if(arr[i] > Smax && arr[i] != max){
//         Smax = arr[i]
//     }
// }

// console.log(Smax)




//find the second min

// let arr = [10, 30, 56, 43, 29, 64, 49, 60, 64];
// let min = Math.min(arr[0], arr[1]);
// let Smin = Math.max(arr[0], arr[1]);

// for(let i=2; i<arr.length; i++){
//     if(arr[i] < min){
//         Smin = min
//         min = arr[i]
//     }
//     else if(arr[i] < Smin && arr[i] != min){
//         Smin = arr[i]
//     }
// }

// console.log(Smin)



// reverse an array with an extra space 
// let arr = [20, 30, 40, 50, 60];
// let newArr = new Array(arr.length);

// let j = 0;
// for(let i = arr.length-1; i>=0; i--){
//     newArr[j] = arr[i];
//     j++

// }
// console.log(newArr)

// reverse an array without usiing extra space
// let arr = [20, 30, 40, 50, 60];
// let i = 0
// let j = arr.length-1

// while(i!=j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr)

//zero on one side 
// let nums = [0,1,0,3,12]
//   let i = 0;
// let j = 0;

// while(i < nums.length){
//     if(nums[i] !== 0){
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(nums)

// left rotation by 1 element

//  let arr = [1, 2, 3, 4, 5]
//  let copy = arr[0];
//  for(let i = 0; i<arr.length-1; i++){
//     arr[i] = arr[i+1]
//  }
//  arr[arr.length-1]=copy
//  console.log(arr);

// right rotataion by 1 element

// let arr = [1, 2, 3, 4, 5]
// let copy = arr[arr.length-1];

// for(let i= arr.length-1; i>0; i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = copy
// console.log(arr);


// left rotation by k steps

// let arr = [1, 2, 3, 4, 5];
// let k = 2
// for (let i = 0; i < k; i++) {
//     let copy = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length-1]=copy

// }
// console.log(arr)

// right rotation by k elements

// let arr = [1, 2, 3, 4, 5];
// let k = 2
// for (let i = 0; i < k; i++) {
//     let copy = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1]
//     }
//     arr[0] = copy
// }
// console.log(arr)


// Remove Duplicates from Array

// let arr = [1, 1, 2, 2, 3, 4, 4, 5];

// let j = 0;

// for (let i = 1; i < arr.length; i++) {
//     if(arr[i] !== arr[j]){
//         j++
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//     }
// }

// console.log(arr)

// remove element
let nums = [0,1,2,2,3,0,4,2] 
let val = 2

let k = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    console.log (nums);
