class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
         while (n > 0) {
        // const full = m + n - 1;
        // const first = m - 1;
        // const second = n - 1;

        if (nums1[m - 1] > nums2[n - 1] && m > 0) {
            nums1[m + n - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
    }
}

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
    
    // while (n > 0) {
    //     const full = m + n - 1;
    //     const first = m - 1;
    //     const second = n - 1;

    //     if (nums1[first] > nums2[second] && m > 0) {
    //         nums1[full] = nums1[first];
    //         m--;
    //     } else {
    //         nums1[full] = nums2[second];
    //         n--;
    //     }
    // }

//     while (n > 0) {
//         // const full = m + n - 1;
//         // const first = m - 1;
//         // const second = n - 1;

//         if (nums1[m - 1] > nums2[n - 1] && m > 0) {
//             nums1[m + n - 1] = nums1[m - 1];
//             m--;
//         } else {
//             nums1[m + n - 1] = nums2[n - 1];
//             n--;
//         }
//     }
// };

