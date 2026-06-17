class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const formattedS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let p1 = 0;
        let p2 = formattedS.length - 1;
        while (p1 < p2) {
            if (formattedS[p1] !== formattedS[p2]) {
                return false;
            }

            p1++;
            p2--;
        }

        return true;
    }
}
