class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let sPointer = 0;
        let tPointer = 0;
        while (sPointer < s.length && tPointer < t.length) {
            if (s[sPointer] == t[tPointer]) {
                sPointer += 1;
            }
            tPointer += 1;
        }

        // if (sPointer == s.length) {
        //     return true;
        // }
        // return false;

        return sPointer == s.length;
    }
}
