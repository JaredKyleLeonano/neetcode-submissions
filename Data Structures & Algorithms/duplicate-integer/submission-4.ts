class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let condition = false
        const numbers = new Set<any>()

        for (const number of nums){
            if (numbers.has(number))
            {
                condition = true
                break
            }
            numbers.add(number)
        }

        return condition
    }
}
