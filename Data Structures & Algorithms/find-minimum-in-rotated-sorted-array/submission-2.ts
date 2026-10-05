class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let output = nums[0]


        let l = 0
        let r = nums.length - 1

        while(l <= r){
            if(nums[l] < nums[r]){
                output = Math.min(output, nums[l])
                break
            }

            const midIndex = Math.trunc((l + r) / 2) 
            console.log("mid index is:", midIndex, "value is:", nums[midIndex])
            output = Math.min(output, nums[midIndex])

            if(nums[midIndex] >= nums[l]){
                l = midIndex + 1
            } else {
                r = midIndex - 1
            }
        }

        console.log('final output is:', output)
        return output
    }
}
