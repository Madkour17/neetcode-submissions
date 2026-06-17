class Solution {
    isAlphaNumeric(char) {
        return (
            (char >= "a" && char <= "z") ||
            (char >= "A" && char <= "Z") ||
            (char >= "0" && char <= "9")
        );
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // const formattedS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        // const formattedS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        let p1 = 0;
        let p2 = s.length - 1;
        while (p1 < p2) {
            while (p1 < p2 && !this.isAlphaNumeric(s[p1])) {
                p1++;
            }
            while (p2 > p1 && !this.isAlphaNumeric(s[p2])) {
                p2--;
            }

            if (s[p1].toLowerCase() !== s[p2].toLowerCase()) {
                return false;
            }

            p1++;
            p2--;
        }

        return true;
    }
}
