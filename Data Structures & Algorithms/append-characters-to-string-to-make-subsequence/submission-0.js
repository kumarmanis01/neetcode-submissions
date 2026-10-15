class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let sPointer = 0;
        let tPointer = 0;

        while (sPointer < s.length && tPointer < t.length) {
            if(s[sPointer] == t[tPointer]) {
                tPointer += 1;
            }
            sPointer += 1;
        }

        return (t.length - tPointer);
    }
}
