class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const freqMap = new Map()

        let mostFrequent = 0
        let longest = 0
        let l = 0
        // formula: window length - mostFrequent <= k to be valid
        for(let r = 0; r < s.length; r++){
            freqMap.set(s[r], (freqMap.get(s[r]) || 0) + 1);

            mostFrequent = Math.max(mostFrequent, freqMap.get(s[r]))

            while(!((r-l + 1) - mostFrequent <= k)){
                freqMap.set(s[l], freqMap.get(s[l]) - 1)
                l++
            }

            const currentLength = r - l + 1
            longest = Math.max(longest, currentLength)
        }


        return longest
    }
}
