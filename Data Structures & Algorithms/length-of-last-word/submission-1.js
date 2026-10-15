class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let currIndex = s.length - 1;
        while(currIndex >= 0 && s[currIndex] == " ") {
            currIndex -= 1;
        }
        let lengthOfLastWord = 0;
        while(currIndex >= 0 && s[currIndex] != " ") {
            lengthOfLastWord += 1;
            currIndex -= 1;
        }

        return lengthOfLastWord;
    }
}
