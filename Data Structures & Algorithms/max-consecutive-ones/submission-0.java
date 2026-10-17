class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int maxNum = 0;
        int maxMemmory = 0;

        for (int num : nums) {
            if (num == 1) {
                maxNum++;
            } else if (num == 0) {
                if (maxNum > maxMemmory) maxMemmory = maxNum;
                maxNum = 0;
            }
        }

        if (maxNum > maxMemmory) {
            maxMemmory = maxNum;
        } 

        return maxMemmory;
    }
}