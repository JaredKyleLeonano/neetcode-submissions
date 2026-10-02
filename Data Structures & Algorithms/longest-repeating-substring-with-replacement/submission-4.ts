class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const freqMap = new Map()

        let longest = 0
        let l = 0
        // formula: window length - mostFrequent <= k to be valid
        for(let r = 0; r < s.length; r++){
            freqMap.set(s[r], (freqMap.get(s[r]) || 0) + 1);

            const mostFrequent = Math.max(...freqMap.values())

            if(!((r-l + 1) - mostFrequent <= k)){
                freqMap.set(s[l], freqMap.get(s[l]) - 1)
                l++
            }

            const currentLength = r - l + 1
            longest = Math.max(longest, currentLength)
        }


        return longest
    }
}
