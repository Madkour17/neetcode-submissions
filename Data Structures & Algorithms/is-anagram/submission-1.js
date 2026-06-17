class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let res = true;

        if (s.length !== t.length) return false;

        const sortedS = [...s].sort().join("");
        const sortedT = [...t].sort().join("");

        for (let i = 0; i < sortedS.length; i++) {
            if (sortedS[i] !== sortedT[i]) {
                res = false;
            }
        }

        return res;
    }
}
