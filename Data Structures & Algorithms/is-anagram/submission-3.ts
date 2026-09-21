class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string) {

        if (s.length != t.length){
            return false
        }
        const totalCount = new Map<String, number>()
        //const totalCount = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++){
            totalCount.set(s[i], (totalCount.get(s[i]) || 0) + 1);
            totalCount.set(t[i], (totalCount.get(t[i]) || 0) - 1);
        }
        return Array.from(totalCount.values()).every((value) => value === 0);
        
    }
}
