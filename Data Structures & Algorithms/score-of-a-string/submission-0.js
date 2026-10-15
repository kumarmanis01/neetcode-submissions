class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let currentIndex = 0;
        let sum = 0;

        while(currentIndex < s.length - 1) {
            let currentCharAsciiValue = s[currentIndex].charCodeAt(0);
            let nextCharAsciiValue = s[currentIndex+1].charCodeAt(0);
            sum += Math.abs(currentCharAsciiValue - nextCharAsciiValue);
            currentIndex += 1;
        }

        return sum;
    }
}
