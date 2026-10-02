class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length === 0 || s.length < t.length) return ''

        let output = ''

        const currentChars = new Map()
        let currentLength = 0

        const requiredChars = new Map()
        const requiredLength = t.length

        for (let i = 0; i < requiredLength; i++){
            requiredChars.set(t[i], (requiredChars.get(t[i]) || 0) + 1)
        }

        let l = 0
        for (let r = 0; r < s.length; r++){

            if(requiredChars.has(s[r])){
                currentChars.set(s[r], (currentChars.get(s[r]) || 0) + 1)

                if(currentChars.get(s[r]) <= requiredChars.get(s[r])){
                    currentLength++
                }
            }
                 
            while(currentLength == requiredLength){
                if((r - l + 1) < (output.length || 100000)){
                    output = s.slice(l, r + 1)
                }

                if(currentChars.has(s[l])){
                    currentChars.set(s[l], currentChars.get(s[l]) - 1)
                    if(currentChars.get(s[l]) < requiredChars.get(s[l])){
                        currentLength--
                    }
                } 
                l++
            }
            
        }

        return output
    }
}
