class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    twoSum (nums, target) {
        let hash = {}
        for (let i = 0; i < nums.length; i++){
            let key = target - nums[i];
            if (key in hash){
                return [hash[key], i];
            } else{
                hash[nums[i]] = i;
            };
        };
    };
}
