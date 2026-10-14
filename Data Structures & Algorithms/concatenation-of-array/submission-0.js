class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arrayLength = nums.length;
        let concatenationNums = []
        for (let i=0; i<arrayLength; i++ ) {
            concatenationNums[i]=nums[i];
            concatenationNums[i+arrayLength]=nums[i];
        }
        return concatenationNums;
    }
}
