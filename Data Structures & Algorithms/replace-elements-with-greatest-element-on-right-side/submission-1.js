class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxSoFar = -1;
        for(let index=arr.length - 1; index>=0; index--) {
            let currentValue = arr[index];
            arr[index] = maxSoFar;
            maxSoFar = Math.max(maxSoFar, currentValue);
        }
        return arr;
    }
}
