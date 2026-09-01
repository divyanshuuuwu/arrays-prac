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
// let nums:number[] = [1,2,3,4,5,6]
// let k:number = 3
//  k = k % nums.length;
//    for(let i:number = 0, j = nums.length-1; i<=j; i++){
//         let temp:number = nums[j]
//         nums[j] = nums[i]
//         nums[i] = temp
//         j--
//    }
//     for(let i:number = 0, j = k-1; i<=j; i++){
//         let temp:number = nums[j]
//         nums[j] = nums[i]
//         nums[i] = temp
//         j--
//     }
//      for(let i:number = k, j = nums.length-1; i<=j; i++){
//         let temp:number = nums[j]
//         nums[j] = nums[i]
//         nums[i] = temp
//         j--
//     }
//     console.log(nums)
// Check if All A's Appears Before All B's
const s = "abab";
function checkString(s) {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === "b" && s[i + 1] === "a") {
            return false;
        }
    }
    return true;
}
;
const result = checkString(s);
console.log(result);
