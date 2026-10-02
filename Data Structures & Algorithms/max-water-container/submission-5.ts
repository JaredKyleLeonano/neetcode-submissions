class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let bestArea = 0

        let l = 0
        let r  = heights.length - 1

        while(l < r){
            if(heights[l] > heights[r]){
                bestArea = Math.max((r - l) * heights[r], bestArea)
                r--
            } else {
                bestArea = Math.max((r - l) * heights[l], bestArea)
                l++
            }
        }

        return bestArea
    }
}
