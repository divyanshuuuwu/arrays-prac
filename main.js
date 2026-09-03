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
// const s = "abab"
// function checkString(s: string): boolean {
//     for(let i:number = 0; i<s.length-1; i++){
//         if(s[i] === "b" && s[i+1] === "a"){
//             return false
//         }
//     }
//     return true
// };
// const result = checkString(s)
// console.log(result)
// two sum for sorted array
// let nums:number[] = [1,2,3,4,5,6]
// let target:number = 5
// function twoSum(nums: number[], target: number): void | number[] {
// let j:number = nums.length-1;
// let i:number = 0;
// while(i<nums.length){
//     if(nums[i] + nums[j] > target){
//         j--
//     }
//     else if(nums[i] + nums[j] < target){
//         i++
//     }
//     else if(nums[i] + nums[j] === target){
//         return [i,j]
//     }
// }
// };
// let result=twoSum(nums, target)
// console.log(result)
// move zeros to end of array striver
let nums = [1, 0, 3, 12, 4, 5, 0, 6, 7];
function moveZeroes(nums) {
    //find the first zero
    let j = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            j = i;
            break;
        }
    }
    // No zero found
    if (j === -1)
        return;
    for (let i = j + 1; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            j++;
        }
    }
}
;
moveZeroes(nums);
console.log(nums);
