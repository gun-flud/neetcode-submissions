class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let storage = [];
        for (let num of nums) {
            if (storage.includes(num)) return true;

            storage.push(num);
        }

        return false;
    }
}
