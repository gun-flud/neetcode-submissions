class Solution {
    public int[] replaceElements(int[] arr) {
        if (arr.length == 1) return new int[]{-1};
        int lastEl = arr.length - 1;
        int[] result = new int[lastEl + 1];
        result[lastEl] = -1;
        result[lastEl - 1] = arr[lastEl];

        for (int i = (lastEl - 2); i >= 0; i--) {
           if ( result[i + 1] > arr[i + 1] ) {
                result[i] = result[i + 1];
           } else {
                result[i] = arr[i + 1];
           }
        }

        return result;
    }
}