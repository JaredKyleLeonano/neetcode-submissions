class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map<number, number>()

        for(let i = 0; i < nums.length; i++){
            const toFind = target - nums[i]
            if(numMap.has(toFind)){
                return [numMap.get(toFind), i]
            } else {
                numMap.set(nums[i], i)
            }
        }
    }
}
