class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let sortedArray = nums.sort();
        for (let index=0; index< sortedArray.length; index++) {
            if (sortedArray[index] == sortedArray[index+1]) 
                return true;
        }
        return false;
    }
}
