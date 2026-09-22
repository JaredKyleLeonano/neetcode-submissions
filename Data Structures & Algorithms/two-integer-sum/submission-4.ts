class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numSet = new Set<number>()
        console.log("THIS IS THE SET", numSet)

        for(let i = 0; i < nums.length; i++){
            console.log('this is the numebr', nums[i])
            const toFind = target - nums[i]
            console.log("this is to find", toFind)
            if(numSet.has(toFind)){
                return [i, nums.indexOf(toFind)]
            } else {
                numSet.add(nums[i])
            }
        }
    }
}
