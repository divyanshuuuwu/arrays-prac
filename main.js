"use strict";
// Roatate an array right with extra space 
// let nums:number[] = [1,2,3,4,5,6,7]
// let k:number = 3
//     k = k % nums.length;
//     let temp:number[] = new Array(nums.length)
//     for(let i:number = 0; i<nums.length; i++){
//         temp[i] = nums[(i - k + nums.length) % nums.length];
//     }
//     for(let i:number = 0; i<nums.length; i++){
//         nums[i] = temp[i] }
//         console.log(nums)
// Rotate an Array to right Optimal
let nums = [1, 2, 3, 4, 5, 6];
let k = 3;
k = k % nums.length;
for (let i = 0, j = nums.length - 1; i <= j; i++) {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    j--;
}
for (let i = 0, j = k - 1; i <= j; i++) {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    j--;
}
for (let i = k, j = nums.length - 1; i <= j; i++) {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    j--;
}
console.log(nums);
