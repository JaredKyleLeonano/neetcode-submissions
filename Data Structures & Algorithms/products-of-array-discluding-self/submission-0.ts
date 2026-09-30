class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]) {
        const output = new Array(nums.length)

        let prefix = 1
        let postfix = 1
        for (let i = 0; i < nums.length; i++){
             if(i == 0){
                output[i] = 1
             } else {
                prefix *= nums[i-1]
                output[i] = prefix
             }
        }

        for (let j = nums.length - 1; j >= 0; j--){
            if(j == nums.length - 1){
                continue
            } else {
                postfix = postfix * nums[j+1]
                output[j] *= postfix
            }
        }

        return output
    }
}
