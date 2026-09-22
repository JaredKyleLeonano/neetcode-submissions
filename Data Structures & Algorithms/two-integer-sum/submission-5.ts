class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numSet = new Set<number>()

        for(let i = 0; i < nums.length; i++){
            const toFind = target - nums[i]
            if(numSet.has(toFind)){
                return [i, nums.indexOf(toFind)]
            } else {
                numSet.add(nums[i])
            }
        }
    }
}
