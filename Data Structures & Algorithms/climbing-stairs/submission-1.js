class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 3) return n;
        let [ val1, val2] = [3, 2];
        let val = 1;
        for (let i = 3; i < n; i++) {
            val = val1 + val2;
            val2 = val1;
            val1 = val;
        }
        return val;
    }
}
