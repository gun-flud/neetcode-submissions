class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n, hash = {}) {
        if (n <= 3) return n;
    
        if (hash[n]) return hash[n];

        hash[n] = this.climbStairs(n - 1, hash) + this.climbStairs(n - 2, hash);

        return hash[n];
    }
}
