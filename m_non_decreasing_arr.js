// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

// Example 1:
// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

// Example 2:
// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.

var checkPossibility = function (nums) {
    debugger
    let oddBird = 0;
    //look through the array to find the non-decreasing element "oddBird"
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            oddBird = nums[i];
            //take oddBird out for the sake of testing
            nums.splice(i, 1);
        } else if (i === nums.length - 1) return false;
    }
    //loop through again, trying oddBird in each position
    for (let i = 0; i < nums.length; i++) {
        nums.splice(i, 0, oddBird);
        //check if its decreasing order
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] < nums[j+1]) {
                nums.splice(i, 1)
                break;
            } else {
                return true;
            }
        }
    } return false;
}; checkPossibility([3, 4,2,1])